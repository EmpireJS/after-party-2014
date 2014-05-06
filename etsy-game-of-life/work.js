var Signal = (function () {
    function Signal() {
        this.listeners = [];
    }
    Signal.prototype.tap = function (l) {
        this.listeners = this.listeners.slice(0);
        this.listeners.push(l);
    };

    Signal.prototype.untap = function (l) {
        var ix = this.listeners.indexOf(l);
        if (ix == -1) {
            return;
        }

        this.listeners = this.listeners.slice(0);
        this.listeners.splice(ix, 1);
    };

    Signal.prototype.raise = function () {
        var args = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            args[_i] = arguments[_i + 0];
        }
        var _this = this;
        this.listeners.forEach(function (l) {
            l.apply(_this, args);
        });
    };
    return Signal;
})();
var life;
(function (life) {
    var Model = (function () {
        function Model(cols, rows) {
            this.didChange = new Signal();
            this.rows = rows;
            this.cols = cols;
            this.grid = new Int8Array(cols * rows);
            this.alive = [];
        }
        Model.prototype.indexFor = function (x, y) {
            var cols = this.cols, rows = this.rows;
            return ((rows + y) % rows) * cols + ((cols + x) % cols);
        };

        Model.prototype.get = function (index) {
            return this.grid[index] > 0;
        };

        Model.prototype.init = function (vals) {
            var grid = this.grid, alive = this.alive;
            vals.forEach(function (v, i) {
                var val = v & 1;
                grid[i] = val;
                if (val > 0) {
                    alive.push(i);
                }
            });

            var changes = { born: alive, died: [], survived: [] };
            this.didChange.raise(this, changes);
            return changes;
        };

        Model.prototype.size = function () {
            return this.grid.length;
        };

        Model.prototype.neighborsOf = function (index) {
            var x = index % this.cols, y = (index / this.cols) | 0;
            return [
                this.indexFor(x - 1, y - 1),
                this.indexFor(x, y - 1),
                this.indexFor(x + 1, y - 1),
                this.indexFor(x - 1, y),
                this.indexFor(x + 1, y),
                this.indexFor(x - 1, y + 1),
                this.indexFor(x, y + 1),
                this.indexFor(x + 1, y + 1)
            ];
        };

        Model.prototype.nextFor = function (index) {
            var grid = this.grid, neighbors = this.neighborsOf(index), count = grid[neighbors[0]] + grid[neighbors[1]] + grid[neighbors[2]] + grid[neighbors[3]] + grid[neighbors[4]] + grid[neighbors[5]] + grid[neighbors[6]] + grid[neighbors[7]];
            if (count == 3) {
                return 1;
            }
            if (count == 2) {
                return grid[index];
            }
            return 0;
        };

        Model.prototype.activeCells = function () {
            var included = [], active = [], alive = this.alive;

            for (var i = 0, n = alive.length; i < n; i++) {
                var index = alive[i];

                if (!included[index]) {
                    active.push(index);
                    included[index] = true;
                }

                var neighbors = this.neighborsOf(index);
                for (var j = 0; j < 8; j++) {
                    index = neighbors[j];
                    if (!included[index]) {
                        active.push(index);
                        included[index] = true;
                    }
                }
            }

            return active;
        };

        Model.prototype.next = function () {
            var grid = this.grid, active = this.activeCells(), alive = [], born = [], died = [], survived = [];

            for (var i = 0, n = active.length; i < n; i++) {
                var index = active[i], next = this.nextFor(index), current = grid[index];

                if (next > 0) {
                    alive.push(index);
                }

                if (current != next) {
                    if (next > 0) {
                        born.push(index);
                    } else {
                        died.push(index);
                    }
                } else if (next > 0) {
                    survived.push(index);
                }
            }

            for (var i = 0, n = born.length; i < n; i++) {
                grid[born[i]] = 1;
            }
            for (var i = 0, n = died.length; i < n; i++) {
                grid[died[i]] = 0;
            }
            this.alive = alive;

            var changes = { born: born, died: died, survived: survived };
            this.didChange.raise(this, changes);
            return changes;
        };
        return Model;
    })();
    life.Model = Model;
})(life || (life = {}));
var life;
(function (life) {
    life.InitLife = 0, life.NeedSome = 1, life.HereSome = 2;
})(life || (life = {}));
var life;
(function (life) {
    var model;

    var initLife = function (msg) {
        model = new life.Model(msg.cols, msg.rows);

        var changes = model.init(msg.values);
        send({ type: life.HereSome, changes: [changes] });
    };

    var needSome = function (msg) {
        var changes = [];
        for (var i = 0; i < msg.n; i++) {
            changes.push(model.next());
        }
        send({ type: life.HereSome, changes: changes });
    };

    var send = function (msg) {
        var port = self;
        port.postMessage(msg);
    };

    self.onmessage = function (e) {
        var msg = e.data;
        switch (msg.type) {
            case life.InitLife:
                initLife(msg);
                break;
            case life.NeedSome:
                needSome(msg);
                break;
        }
    };
})(life || (life = {}));

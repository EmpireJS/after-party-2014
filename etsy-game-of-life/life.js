var life;
(function (life) {
    life.InitLife = 0, life.NeedSome = 1, life.HereSome = 2;
})(life || (life = {}));
var life;
(function (life) {
    life.etsyState = function () {
        var vals = Array(150 * 150), ones = [
            8129,
            8130,
            8131,
            8132,
            8133,
            8134,
            8135,
            8136,
            8137,
            8138,
            8139,
            8140,
            8141,
            8142,
            8143,
            8144,
            8145,
            8146,
            8147,
            8148,
            8149,
            8150,
            8151,
            8152,
            8153,
            8154,
            8279,
            8280,
            8281,
            8282,
            8283,
            8284,
            8285,
            8286,
            8287,
            8288,
            8289,
            8290,
            8291,
            8292,
            8293,
            8294,
            8295,
            8296,
            8297,
            8298,
            8299,
            8300,
            8301,
            8302,
            8303,
            8304,
            8432,
            8433,
            8434,
            8435,
            8436,
            8437,
            8438,
            8449,
            8450,
            8451,
            8452,
            8453,
            8454,
            8583,
            8584,
            8585,
            8586,
            8587,
            8601,
            8602,
            8603,
            8604,
            8733,
            8734,
            8735,
            8736,
            8737,
            8751,
            8752,
            8753,
            8754,
            8763,
            8764,
            8883,
            8884,
            8885,
            8886,
            8887,
            8902,
            8903,
            8904,
            8913,
            8914,
            9033,
            9034,
            9035,
            9036,
            9037,
            9052,
            9053,
            9054,
            9063,
            9064,
            9183,
            9184,
            9185,
            9186,
            9187,
            9202,
            9203,
            9204,
            9212,
            9213,
            9214,
            9333,
            9334,
            9335,
            9336,
            9337,
            9352,
            9353,
            9362,
            9363,
            9364,
            9483,
            9484,
            9485,
            9486,
            9487,
            9497,
            9498,
            9511,
            9512,
            9513,
            9514,
            9633,
            9634,
            9635,
            9636,
            9637,
            9647,
            9648,
            9660,
            9661,
            9662,
            9663,
            9664,
            9665,
            9666,
            9667,
            9668,
            9669,
            9670,
            9671,
            9678,
            9679,
            9680,
            9681,
            9682,
            9683,
            9684,
            9685,
            9686,
            9687,
            9688,
            9691,
            9692,
            9693,
            9694,
            9695,
            9696,
            9697,
            9698,
            9699,
            9700,
            9701,
            9706,
            9707,
            9708,
            9709,
            9710,
            9711,
            9712,
            9713,
            9783,
            9784,
            9785,
            9786,
            9787,
            9797,
            9798,
            9807,
            9808,
            9809,
            9810,
            9811,
            9812,
            9813,
            9814,
            9815,
            9816,
            9817,
            9818,
            9819,
            9820,
            9821,
            9827,
            9828,
            9829,
            9830,
            9831,
            9832,
            9833,
            9834,
            9835,
            9836,
            9837,
            9838,
            9841,
            9842,
            9843,
            9844,
            9845,
            9846,
            9847,
            9848,
            9849,
            9850,
            9851,
            9856,
            9857,
            9858,
            9859,
            9860,
            9861,
            9862,
            9863,
            9933,
            9934,
            9935,
            9936,
            9937,
            9947,
            9948,
            9957,
            9958,
            9959,
            9960,
            9961,
            9962,
            9963,
            9964,
            9965,
            9966,
            9967,
            9968,
            9969,
            9970,
            9971,
            9976,
            9977,
            9978,
            9979,
            9985,
            9986,
            9987,
            9988,
            9993,
            9994,
            9995,
            9996,
            9997,
            9998,
            10008,
            10009,
            10010,
            10011,
            10012,
            10083,
            10084,
            10085,
            10086,
            10087,
            10096,
            10097,
            10098,
            10111,
            10112,
            10113,
            10114,
            10125,
            10126,
            10127,
            10128,
            10136,
            10137,
            10138,
            10143,
            10144,
            10145,
            10146,
            10147,
            10148,
            10159,
            10160,
            10161,
            10233,
            10234,
            10235,
            10236,
            10237,
            10238,
            10239,
            10240,
            10241,
            10242,
            10243,
            10244,
            10245,
            10246,
            10247,
            10248,
            10261,
            10262,
            10263,
            10264,
            10275,
            10276,
            10277,
            10278,
            10286,
            10287,
            10288,
            10294,
            10295,
            10296,
            10297,
            10298,
            10308,
            10309,
            10310,
            10383,
            10384,
            10385,
            10386,
            10387,
            10388,
            10389,
            10390,
            10391,
            10392,
            10393,
            10394,
            10395,
            10396,
            10397,
            10398,
            10411,
            10412,
            10413,
            10414,
            10425,
            10426,
            10427,
            10428,
            10436,
            10437,
            10438,
            10444,
            10445,
            10446,
            10447,
            10448,
            10449,
            10458,
            10459,
            10460,
            10533,
            10534,
            10535,
            10536,
            10537,
            10538,
            10539,
            10540,
            10541,
            10542,
            10543,
            10544,
            10545,
            10546,
            10547,
            10548,
            10561,
            10562,
            10563,
            10564,
            10575,
            10576,
            10577,
            10578,
            10579,
            10595,
            10596,
            10597,
            10598,
            10599,
            10608,
            10609,
            10683,
            10684,
            10685,
            10686,
            10687,
            10696,
            10697,
            10698,
            10711,
            10712,
            10713,
            10714,
            10725,
            10726,
            10727,
            10728,
            10729,
            10730,
            10731,
            10745,
            10746,
            10747,
            10748,
            10749,
            10757,
            10758,
            10759,
            10833,
            10834,
            10835,
            10836,
            10837,
            10847,
            10848,
            10861,
            10862,
            10863,
            10864,
            10876,
            10877,
            10878,
            10879,
            10880,
            10881,
            10882,
            10883,
            10896,
            10897,
            10898,
            10899,
            10900,
            10907,
            10908,
            10909,
            10983,
            10984,
            10985,
            10986,
            10987,
            10997,
            10998,
            11011,
            11012,
            11013,
            11014,
            11027,
            11028,
            11029,
            11030,
            11031,
            11032,
            11033,
            11034,
            11035,
            11046,
            11047,
            11048,
            11049,
            11050,
            11056,
            11057,
            11058,
            11133,
            11134,
            11135,
            11136,
            11137,
            11147,
            11148,
            11161,
            11162,
            11163,
            11164,
            11178,
            11179,
            11180,
            11181,
            11182,
            11183,
            11184,
            11185,
            11186,
            11187,
            11196,
            11197,
            11198,
            11199,
            11200,
            11206,
            11207,
            11208,
            11283,
            11284,
            11285,
            11286,
            11287,
            11311,
            11312,
            11313,
            11314,
            11330,
            11331,
            11332,
            11333,
            11334,
            11335,
            11336,
            11337,
            11338,
            11347,
            11348,
            11349,
            11350,
            11351,
            11356,
            11357,
            11433,
            11434,
            11435,
            11436,
            11437,
            11454,
            11455,
            11461,
            11462,
            11463,
            11464,
            11482,
            11483,
            11484,
            11485,
            11486,
            11487,
            11488,
            11497,
            11498,
            11499,
            11500,
            11501,
            11505,
            11506,
            11507,
            11583,
            11584,
            11585,
            11586,
            11587,
            11604,
            11605,
            11611,
            11612,
            11613,
            11614,
            11634,
            11635,
            11636,
            11637,
            11638,
            11639,
            11648,
            11649,
            11650,
            11651,
            11655,
            11656,
            11733,
            11734,
            11735,
            11736,
            11737,
            11753,
            11754,
            11755,
            11761,
            11762,
            11763,
            11764,
            11775,
            11776,
            11785,
            11786,
            11787,
            11788,
            11789,
            11798,
            11799,
            11800,
            11801,
            11802,
            11804,
            11805,
            11806,
            11883,
            11884,
            11885,
            11886,
            11887,
            11903,
            11904,
            11905,
            11911,
            11912,
            11913,
            11914,
            11915,
            11925,
            11926,
            11927,
            11935,
            11936,
            11937,
            11938,
            11939,
            11948,
            11949,
            11950,
            11951,
            11952,
            11954,
            11955,
            11956,
            12033,
            12034,
            12035,
            12036,
            12037,
            12038,
            12052,
            12053,
            12054,
            12055,
            12061,
            12062,
            12063,
            12064,
            12065,
            12075,
            12076,
            12077,
            12086,
            12087,
            12088,
            12089,
            12099,
            12100,
            12101,
            12102,
            12103,
            12104,
            12105,
            12183,
            12184,
            12185,
            12186,
            12187,
            12188,
            12201,
            12202,
            12203,
            12204,
            12205,
            12211,
            12212,
            12213,
            12214,
            12215,
            12221,
            12225,
            12226,
            12227,
            12235,
            12236,
            12237,
            12238,
            12249,
            12250,
            12251,
            12252,
            12253,
            12254,
            12255,
            12331,
            12332,
            12333,
            12334,
            12335,
            12336,
            12337,
            12338,
            12339,
            12340,
            12341,
            12342,
            12343,
            12344,
            12345,
            12346,
            12347,
            12348,
            12349,
            12350,
            12351,
            12352,
            12353,
            12354,
            12355,
            12361,
            12362,
            12363,
            12364,
            12365,
            12366,
            12367,
            12368,
            12369,
            12370,
            12371,
            12375,
            12376,
            12377,
            12378,
            12385,
            12386,
            12387,
            12388,
            12400,
            12401,
            12402,
            12403,
            12404,
            12479,
            12480,
            12481,
            12482,
            12483,
            12484,
            12485,
            12486,
            12487,
            12488,
            12489,
            12490,
            12491,
            12492,
            12493,
            12494,
            12495,
            12496,
            12497,
            12498,
            12499,
            12500,
            12501,
            12502,
            12503,
            12504,
            12505,
            12512,
            12513,
            12514,
            12515,
            12516,
            12517,
            12518,
            12519,
            12520,
            12521,
            12525,
            12526,
            12527,
            12528,
            12529,
            12530,
            12531,
            12532,
            12533,
            12534,
            12535,
            12536,
            12537,
            12550,
            12551,
            12552,
            12553,
            12554,
            12629,
            12630,
            12631,
            12632,
            12633,
            12634,
            12635,
            12636,
            12637,
            12638,
            12639,
            12640,
            12641,
            12642,
            12643,
            12644,
            12645,
            12646,
            12647,
            12648,
            12649,
            12650,
            12651,
            12652,
            12653,
            12654,
            12663,
            12664,
            12665,
            12666,
            12667,
            12668,
            12669,
            12676,
            12677,
            12678,
            12679,
            12680,
            12681,
            12682,
            12683,
            12684,
            12685,
            12700,
            12701,
            12702,
            12703,
            12816,
            12851,
            12852,
            12853,
            13001,
            13002,
            13003,
            13140,
            13141,
            13150,
            13151,
            13152,
            13289,
            13290,
            13291,
            13299,
            13300,
            13301,
            13439,
            13440,
            13441,
            13448,
            13449,
            13450,
            13451,
            13589,
            13590,
            13591,
            13592,
            13597,
            13598,
            13599,
            13600,
            13739,
            13740,
            13741,
            13742,
            13745,
            13746,
            13747,
            13748,
            13749,
            13889,
            13890,
            13891,
            13892,
            13893,
            13894,
            13895,
            13896,
            13897,
            13898,
            14039,
            14040,
            14041,
            14042,
            14043,
            14044,
            14045,
            14046
        ];
        for (var i = 0, n = ones.length; i < n; i++) {
            vals[ones[i]] = 1;
        }
        return vals;
    };
})(life || (life = {}));
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
    var randomize = function (size, fill) {
        var data = Array(size), count = (size * fill) | 0;
        for (var i = 0; i < size; i++) {
            data[i] = 0;
        }
        for (var i = 0; i < count; i++) {
            data[(Math.random() * size) | 0] = 1;
        }
        return data;
    };

    var sigmoidEasing = function (p) {
        return 0.5 - Math.cos(p * Math.PI) * 0.5;
    };

    var transition = function (callback, duration, easing) {
        if (!easing) {
            easing = function (p) {
                return p;
            };
        }

        var t0 = Date.now();
        var tick = function () {
            var t1 = Date.now(), p = Math.min(1.0, (t1 - t0) / duration);
            callback(easing(p));
            if (p < 1.0) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    };

    var ModelInWorker = (function () {
        function ModelInWorker(cols, rows, values) {
            var _this = this;
            this.cols = cols;
            this.rows = rows;
            this.didChange = new Signal();
            this.changes = [];
            this.lastChange = { born: [], survived: [], died: [] };
            this.pendingRequests = 0;
            var worker = new Worker('etsy-game-of-life/work.js');
            worker.onmessage = function (e) {
                var msg = e.data, changes = msg.changes, didChange = _this.didChange;
                for (var i = 0, n = changes.length; i < n; i++) {
                    if (_this.pendingRequests > 0) {
                        didChange.raise(changes[i]);
                        _this.pendingRequests--;
                        continue;
                    }
                    _this.changes.push(changes[i]);
                }
            };

            this.worker = worker;
            this.init(values);
        }
        ModelInWorker.prototype.init = function (values) {
            var worker = this.worker, cols = this.cols, rows = this.rows;

            worker.postMessage({
                type: life.InitLife,
                cols: cols,
                rows: rows,
                values: values
            });

            worker.postMessage({
                type: life.NeedSome,
                n: 20
            });
        };

        ModelInWorker.prototype.randomize = function () {
            var values = randomize(this.rows * this.cols, 0.1), lastChange = this.lastChange, died = lastChange.born.concat(lastChange.survived);

            this.changes = [{ born: [], survived: [], died: died }];

            this.init(values);
        };

        ModelInWorker.prototype.next = function () {
            var changes = this.changes, worker = this.worker;
            if (changes.length == 0) {
                this.pendingRequests++;
                return;
            }

            this.lastChange = changes.shift();
            this.didChange.raise(this.lastChange);

            if (changes.length <= 2) {
                worker.postMessage({
                    type: life.NeedSome,
                    n: 20
                });
            }
        };
        return ModelInWorker;
    })();

    var View = (function () {
        function View(root, model) {
            var _this = this;
            this.root = root;
            this.model = model;
            this.frameCount = 0;
            var rect = root.getBoundingClientRect(), scene = new THREE.Scene();

            this.initCamera(scene, rect.width, rect.height);
            this.initLights(scene);
            this.initAction(scene, model, function () {
                _this.render();
                _this.model.next();
            });

            var renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(rect.width, rect.height);

            renderer.shadowMapEnabled = true;
            renderer.shadowMapSoft = true;
            renderer.shadowMapType = THREE.PCFSoftShadowMap;

            root.appendChild(renderer.domElement);

            this.scene = scene;
            this.renderer = renderer;

            model.didChange.tap(function (changes) {
                _this.modelDidChange(changes);
            });
        }
        View.prototype.resize = function () {
            var rect = this.root.getBoundingClientRect(), scene = this.scene;
            scene.remove(this.camera);
            this.initCamera(scene, rect.width, rect.height);
            this.renderer.setSize(rect.width, rect.height);
            this.render();
        };

        View.prototype.render = function () {
            this.renderer.render(this.scene, this.camera);
        };

        View.prototype.meshFor = function (indices) {
            var locs = this.locs, cube = this.cube, y = View.CUBE_HEIGHT / 2 + View.CUBE_ELEVATION, geom = new THREE.Geometry();
            for (var i = 0, n = indices.length; i < n; i++) {
                var loc = locs[indices[i]];
                cube.position.x = loc.x;
                cube.position.z = loc.y;
                cube.position.y = y;
                THREE.GeometryUtils.merge(geom, cube);
            }
            var mesh = new THREE.Mesh(geom, cube.material);
            mesh.castShadow = true;
            return mesh;
        };

        View.prototype.transition = function () {
            var _this = this;
            var bornMesh = this.bornMesh, diedMesh = this.diedMesh, range = View.CUBE_HEIGHT + View.CUBE_ELEVATION * 2;
            transition(function (p) {
                bornMesh.position.y = (1 - p) * -range;
                diedMesh.position.y = p * -range;
                if (p >= 1) {
                    setTimeout(function () {
                        _this.model.next();
                    }, 0);
                }
                _this.render();
            }, 200, sigmoidEasing);
        };

        View.prototype.modelDidChange = function (changes) {
            var _this = this;
            var scene = this.scene, born = changes.born, died = changes.died, survived = changes.survived, bornMesh = this.bornMesh, survMesh = this.survMesh, diedMesh = this.diedMesh, range = View.CUBE_HEIGHT + View.CUBE_ELEVATION * 2, startedAt = Date.now();

            if (survMesh) {
                scene.remove(survMesh);
            }
            if (bornMesh) {
                scene.remove(bornMesh);
            }
            if (diedMesh) {
                scene.remove(diedMesh);
            }

            survMesh = this.meshFor(survived);
            bornMesh = this.meshFor(born);
            diedMesh = this.meshFor(died);

            bornMesh.position.y = -range;

            scene.add(survMesh);
            scene.add(bornMesh);
            scene.add(diedMesh);

            this.survMesh = survMesh;
            this.bornMesh = bornMesh;
            this.diedMesh = diedMesh;

            this.render();

            var frame = this.frameCount++, timeout = 100;
            if (frame == 1) {
                timeout = 1000;
            }

            setTimeout(function () {
                _this.transition();
            }, Math.max(0, timeout - Date.now() + startedAt));
        };

        View.prototype.initCamera = function (scene, width, height) {
            var camera = new THREE.CombinedCamera(width, height, 40, 1, 10000, -2000, 10000);

            camera.position.x = 50;
            camera.position.y = 700;
            camera.position.z = 850;
            camera.lookAt(new THREE.Vector3(0, 0, 0));
            scene.add(camera);
            this.camera = camera;
        };

        View.prototype.initLights = function (scene) {
            var ambient = new THREE.AmbientLight(0xff9900);
            scene.add(ambient);

            var directional = new THREE.DirectionalLight(0xff9900, 1);
            directional.position.set(100, 500, 0);
            directional.lookAt(new THREE.Vector3(0, 0, 0));
            directional.castShadow = true;
            directional.shadowDarkness = 0.4;
            directional.shadowCameraBottom = -1500;
            directional.shadowCameraTop = 1500;
            directional.shadowCameraLeft = 1500;
            directional.shadowCameraRight = -1500;
            scene.add(directional);
        };

        View.prototype.initAction = function (scene, model, didLoad) {
            var locs = [], width = 3000, depth = 3000, dx = width / model.cols, dy = depth / model.rows, cx = width / 2, cy = depth / 2, y = View.CUBE_HEIGHT / 2 + View.CUBE_ELEVATION;

            var plane = new THREE.Mesh(new THREE.PlaneGeometry(width, depth, 1, 1), new THREE.MeshBasicMaterial({
                color: 0xeeeeee
            }));
            plane.rotation.x = Math.PI / 2;
            plane.receiveShadow = true;
            plane.material.side = THREE.DoubleSide;
            scene.add(plane);

            var text = THREE.ImageUtils.loadTexture('etsy-game-of-life/img/cube.png', null, didLoad), cube = new THREE.Mesh(new THREE.CubeGeometry(dx, View.CUBE_HEIGHT, dy), new THREE.MeshLambertMaterial({
                shading: THREE.FlatShading,
                map: text,
                color: 0xff9900,
                ambient: 0xff9900,
                transparent: true
            }));

            cube.castShadow = true;

            for (var j = 0, m = model.rows; j < m; j++) {
                for (var i = 0, n = model.cols; i < n; i++) {
                    locs.push(new THREE.Vector2(-cx + i * dx, -cy + j * dy));
                }
            }

            this.cube = cube;
            this.locs = locs;
        };
        View.CUBE_HEIGHT = 20;

        View.CUBE_ELEVATION = 2;
        return View;
    })();

    var main = function () {
        if (location.href.indexOf('file:') == 0) {
            var warn = document.getElementById('warn');
            warn.style.display = 'block';
            setTimeout(function () {
                warn.style.opacity = "1.0";
            }, 0);
            return;
        }

        var size = 150, model = new ModelInWorker(size, size, life.etsyState()), view = new View(document.querySelector('#view'), model);

        window.addEventListener('resize', function (e) {
            view.resize();
        }, false);
    };

    main();
})(life || (life = {}));

$(function () {
  //
  // ### function resetEverything ()
  // Resets everything
  //
  function resetEverything() {
    $('#put-stuff-here').remove();
    $('#coc').show();

    $('body')
      .append('<section id="put-stuff-here">' +
                 '<div id="view">' +
                 '</div>' +
                 '<script src="etsy-game-of-life/life.js"></script>' +
              '</section>');

    setTimeout(function () {
      $('#coc').hide();
    }, 3000);
  }

  var iid = setInterval(resetEverything, 3 * 60 * 1000);
  resetEverything();
});

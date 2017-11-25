$(document).ready(function() {

  $('.overlay').hide();

  // Show portfolio image overlays
  $('.portfolio-item').hover(function() {
    $(this).children('.overlay').show();
  }, function() {
    $(this).children('.overlay').hide();
  }
);

});

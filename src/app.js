// const https = require('https');
console.log("Hey dude");


//   $('.overlay').hide();
//
//   // Show portfolio image overlays
//   $('.portfolio-item').hover(function() {
//     $(this).children('.overlay').show();
//   }, function() {
//     $(this).children('.overlay').hide();
//   }
// );

$.getJSON({
  url: "https://teamtreehouse.com/donmacarthur.json",
  context: document.body
}).done(function($response) {

  $values = Object.values($response.points);
  $keys = Object.keys($response.points);

  for($key in $keys) {

      console.log("I have earned " + $values[$key] + " points in " + $keys[$key]);

  }


});

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

  // Generate Random Index Number
  function getIndex($length) {
    $index = Math.floor(Math.random() * $length) + 1;
    return $index;
  }

  // Find 8 random Badges
  for(let i=1; i<=8; i++) {
    $index = getIndex($response.badges.length);
    console.log('Donatron was awarded the ' + $response.badges[$index].name + ' Badge in the ' + $response.badges[$index].courses[0].title + ' course.');
  }

  $values = Object.values($response.points);
  $keys = Object.keys($response.points);

  for($key in $keys) {
    // Filter out points less than 1000
    if($values[$key] > 1000 && $keys[$key] != 'total') {
      console.log("Donatron has earned " + $values[$key] + " points in " + $keys[$key]);
    }

  }


});

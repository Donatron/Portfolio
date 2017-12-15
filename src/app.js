//   $('.overlay').hide();
//
//   // Show portfolio image overlays
//   $('.portfolio-item').hover(function() {
//     $(this).children('.overlay').show();
//   }, function() {
//     $(this).children('.overlay').hide();
//   }
// );

function createBadgesHTML() {
  let html = '<div class="card col-6 col-md-3" style="width: 20rem;">';
  html += '<img class="card-img-top" src="https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png" alt="Card image cap">';
  html += '<div class="card-body">';
  html += '<h4 class="card-title">Here is my card</h4>';
  html += '<a href="#" class="btn btn-primary">Check it out</a>';
  html += '</div>';
  html += '</div>';

  return html;
}

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
    // console.log('Donatron was awarded the ' + $response.badges[$index].name + ' Badge in the ' + $response.badges[$index].courses[0].title + ' course.');

    $badgeHTML = createBadgesHTML();

    console.log($badgeHTML);
    $('#badges').append($badgeHTML);
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

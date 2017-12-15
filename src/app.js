//   $('.overlay').hide();
//
//   // Show portfolio image overlays
//   $('.portfolio-item').hover(function() {
//     $(this).children('.overlay').show();
//   }, function() {
//     $(this).children('.overlay').hide();
//   }
// );

function createBadgesHTML($badge, $name, $course, $url) {
  let html = '<div class="card col-6 col-md-3 badges" style="width: 20rem;">';

  html += '<img class="card-img-top treehouse-badge" ';
  html += 'src="' + $badge + '" ';
  html += 'alt="Image for Treehouse "' + $name + '" badge">';
  html += '<div class="card-body text-center">';
  html += '<h4 class="card-title">Badge Name:</h4>';
  html += '<p>' + $name + '</p>';
  html += '<h4>Course:</h4>';
  html += '<p>' + $course + '</p>';
  html += '</div>';
  html += '<a href="' + $url + '" target="_blank"';
  html += 'class="btn btn-outline-info btn-badges mb-5">View Course</a>';
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
    $badgeImage = $response.badges[$index].icon_url;
    $badgeName = $response.badges[$index].name;
    $course = $response.badges[$index].courses[0].title;
    $courseURL = $response.badges[$index].url;

    $badgeHTML = createBadgesHTML($badgeImage, $badgeName, $course, $courseURL);

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

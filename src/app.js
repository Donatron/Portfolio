
var date = new Date();
var year = date.getFullYear();

$('#date').append(year);

// Set portfolio image overlays to hidden
$('.overlay').hide();

function createBadgesHeadingHTML($total) {
  let $html = '<p class="col-12 text-center">';

  $html += 'These are some of the ' + $total + ' badges I have received for my achievements with ';
  $html += '<a href="https://teamtreehouse.com" class="treehouse-link">Team Treehouse</a> so far</p>';

  return $html;
}

function createBadgesHTML($badge, $name, $course, $url) {
  let $html = '<div class="card col-6 col-md-3 badges" style="width: 20rem;">';

  $html += '<img class="card-img-top treehouse-badge" ';
  $html += 'src="' + $badge + '" ';
  $html += 'alt="Image for Treehouse "' + $name + '" badge">';
  $html += '<div class="card-body text-center">';
  $html += '<h4 class="card-title">Badge Name:</h4>';
  $html += '<p>' + $name + '</p>';
  $html += '<h4>Course:</h4>';
  $html += '<p>' + $course + '</p>';
  $html += '</div>';
  $html += '<a href="' + $url + '" target="_blank"';
  $html += 'class="btn btn-outline-info btn-badges mb-5">View Course</a>';
  $html += '</div>';

  return $html;
}

function createPointsHTML($language, $points) {
  $html = '<div class="col-6 col-md-3 text-center mb-3">';
  $html += '<h4>' + $language + '</h4>';
  $html += '<p>' + $points + ' points</p>';
  $html += '</div>';

  return $html;
}

$.getJSON({
  url: "https://teamtreehouse.com/donmacarthur.json",
  context: document.body
}).done(function($response) {

  // Find total number of badges for output to section description
  $totalBadges = $response.badges.length;
  $headingHTML = createBadgesHeadingHTML($totalBadges);

  $('#badges-heading').append($headingHTML);

  // Generate Random Index Number for displaying random badges
  function getIndex($length) {
    $index = Math.floor(Math.random() * $length) + 1;
    return $index;
  }

  // Find and display 8 random Badges
  for(let i=1; i<=8; i++) {
    $index = getIndex($response.badges.length);

    // Declare variables for badge properties
    $badgeImage = $response.badges[$index].icon_url;
    $badgeName = $response.badges[$index].name;
    $course = $response.badges[$index].courses[0].title;
    $courseURL = $response.badges[$index].url;

    $badgeHTML = createBadgesHTML($badgeImage, $badgeName, $course, $courseURL);

    //Append badges to HTML div
    $('#badges').append($badgeHTML);
  }

  // Declare key/value pairs for Treehouse points earned
  $values = Object.values($response.points);
  $keys = Object.keys($response.points);
  $totalPoints = 0;

  for($key in $keys) {

    // Filter out points less than 1000
    if($values[$key] > 1000 && $keys[$key] != 'total') {

      // Declare points variables
      $language = $keys[$key];
      $points = $values[$key];

      // Append points earned details to HTML div
      $pointsHTML = createPointsHTML($language, $points);
      $('#points').append($pointsHTML);

    }

  }

});

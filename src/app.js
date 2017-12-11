const https = require('https');
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

try {
const request = https.get('https://teamtreehouse.com/donmacarthur.json', response => {
  if (response.statusCode === 200) {
                                    let body = "";
                                    // Read the data
                                    response.on('data', data => {
                                      body += data.toString();
                                    });

                                    response.on('end', () => {
                                      try {
                                        // Parse the data
                                        const profile = JSON.parse(body);
                                        // Print the data
                                        console.log(profile.badges.length);

for  (const points in profile.points.sum) {
  console.log(points);
}

                                      } catch (error){
                                        console.log(error);
                                      }
                                    });
                                  }

});
} catch (error) {
  console.log(error);
}

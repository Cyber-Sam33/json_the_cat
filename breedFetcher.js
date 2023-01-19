
const request = require('request');
// request('https://api.thecatapi.com/v1/breeds/search?q=sib', function(error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the homepage.
//   console.log(typeof body);
// });

// const data = JSON.parse(body);
// console.log(typeof data);
// console.log('First entry in the data array: ', data[0]['weight']);

args = process.argv.slice(2);
breed = args[0].slice(0, 3).toLowerCase();
console.log(breed);

request(`https://api.thecatapi.com/v1/breedsxxx/searc?q=${breed}`, function(error, response, body) {
  if (error) {
    return console.error('error:', error); // Print the error if one occurred
  }
  if (response.statusCode === 404) {
    const data = JSON.parse(body);
    console.log("Status Error Message ", data.message);
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the homepage.
  if (body.length <= 2) {
    console.log("Sorry, we don't have that breed.  Try another one please.");
  }
  console.log(body.length);

  console.error('error:', error);
});



// const data1 = JSON.parse(body);



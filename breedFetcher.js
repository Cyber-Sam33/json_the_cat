
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


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // if (response.statusCode === 404) {
    //   const data = JSON.parse(body);
    //   console.log("Status Error Message ", data.message);
    // }

    // if (body.length <= 2) {
    //   console.log("Sorry, we don't have that breed.  Try another one please.");
    // }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the homepage.
    const data = JSON.parse(body);

    callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };



// const data1 = JSON.parse(body);



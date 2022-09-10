const request = require('request'); //use the request library to make the HTTP request
const fs = require('fs'); //Use Node's fs (file system) module to write the file

let url = process.argv[2]; //command line first argument
let path = process.argv[3]; //command line second argument

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body', body); // Print the HTML for the url.
  
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  });
});

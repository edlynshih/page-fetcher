const request = require('request'); //use the request library to make the HTTP request
const fs = require('fs'); //Use Node's fs (file system) module to write the file

let url = process.argv[2]; //command line first argument
let path = process.argv[3]; //command line second argument

request(url, (error, _unused, body) => {
  if (error) {
    console.log('error:', error.message); // Print the error if one occurred
    return;
  }
  
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err.message);
      return;
    } 
    //file successfully written
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    
  });
});

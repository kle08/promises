/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
// I - filePath
// O - first file in the filepath
// C - O(1)
// E - none 
// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // gain access to the filepath and have a callback with 2 paramter of err and the data 
  fs.readFile(filePath, (err, data) => {
    // if there is an err return callback saying that there is an error 
    if(err) {
      callback(err)
    } else {
      // if the file exist retrive that file and return the file with a callback
      // since the data has multible files we have to convert to a string and split it by each time and return the first line
        callback(err, data.toString().split('\n')[0]);
    }
  });
 


};
// I - URL
// O - retive status code of GET request
// C - O(1)
// E - none 
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
// request url and callback
request(url, (err, response) => {
  if (err) {
    callback(err);
  } else {
    callback(null, response.statusCode)
  }
});
// if err (if the file doesnt exist )
// return err with a call back
// else if the file exist call back with the status code 
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

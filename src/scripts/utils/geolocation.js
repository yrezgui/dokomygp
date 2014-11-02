var Promise = require('es6-promise').Promise;

function getCurrentPosition(options) {

  return new Promise(function(resolve, reject) {

    navigator.geolocation.getCurrentPosition(
      function success(position) {
        resolve(position);
      },
      function fail(error) {
        reject(error);
      },
      options
    );
  });
}

module.exports = {
  getCurrentPosition: getCurrentPosition
};
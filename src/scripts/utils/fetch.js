var Promise = require('es6-promise').Promise;

function fetch(options) {

  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {

      if(xhr.getResponseHeader('content-type').search('application/json') >= 0) {
        try {
          var response = JSON.parse(xhr.responseText);
          return resolve(response);
        } catch(e) {
          return reject(e);
        }
      }

      if(xhr.status !== 200) {
        return reject();
      }

      resolve(xhr.responseText);
    };

    xhr.onerror = function(e) {
      reject(e);
    };

    xhr.open(options.method, options.url);
    xhr.send(options.body);
  });
}

module.exports = fetch;
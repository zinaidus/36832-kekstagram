'use strict';

var loadImages = function(url, callback) {
	window.JSONPCallback = function(data) {
  	callback(data);
  };

  var scriptEl = document.createElement('script');
  scriptEl.src = url + 'JSONPCallback';
  document.body.appendChild(scriptEl);
};

loadImages('http://localhost:1506/api/pictures?callback=', function(data) {
  window.pictures = data;
  console.log(data);
});

JSONPCallback(); // Сработает
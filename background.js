chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('dist/index.html', {
    'bounds': {
      'width': 320,
      'height': 480
    }
  });
});
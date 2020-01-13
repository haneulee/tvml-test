/**
 * App.onLaunch is the method that handles the entry point of the JavaScript. 
 * The TVApplicationController that was initialized in AppDelegate.swift 
 * will pass on its TVApplicationControllerContext here
 * inside client folder, python -m SimpleHTTPServer 9001
 */
App.onLaunch = function (options) {
  // 1
  var javascriptFiles = [
    `${options.BASEURL}js/Presenter.js`
  ];
  // 2
  evaluateScripts(javascriptFiles, function (success) {
    if (success) {
      var alert = createAlert("Hello World!", "");
      Presenter.modalDialogPresenter(alert);
    } else {
      // 3 Handle the error CHALLENGE!//inside else statement of evaluateScripts. 
      var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
      navigationDocument.presentModal(errorDoc);
    }
  });
}

// 2
var createAlert = function (title, description) {
  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>${title}</title>
        <description>${description}</description>
        <button>
          <text>OK</text>
        </button>
      </alertTemplate>
    </document>`
  var parser = new DOMParser();
  var alertDoc = parser.parseFromString(alertString, "application/xml");
  return alertDoc
}
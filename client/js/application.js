/**
 * App.onLaunch is the method that handles the entry point of the JavaScript. 
 * The TVApplicationController that was initialized in AppDelegate.swift 
 * will pass on its TVApplicationControllerContext here
 */
App.onLaunch = function (options) {
    // 1
    var alert = createAlert("Hello World", ""); //leaving 2nd parameter with an empty string
    navigationDocument.presentModal(alert);
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
/**
 * App.onLaunch is the method that handles the entry point of the JavaScript. 
 * The TVApplicationController that was initialized in AppDelegate.swift 
 * will pass on its TVApplicationControllerContext here
 * inside client folder, python -m SimpleHTTPServer 9001
 */

// 1
var resourceLoader;

App.onLaunch = function (options) {
  // 2
  var javascriptFiles = [
    `${options.BASEURL}js/ResourceLoader.js`,
    `${options.BASEURL}js/Presenter.js`
  ];

  evaluateScripts(javascriptFiles, function (success) {
    if (success) {
      // 3
      resourceLoader = new ResourceLoader(options.BASEURL);
      resourceLoader.loadResource(`${options.BASEURL}templates/RWDevConTemplate.xml.js`, function (resource) {
        var doc = Presenter.makeDocument(resource);

        // The addEventListener method is analogous to hooking a button to an @IBAction. 
        doc.addEventListener("select", Presenter.load.bind(Presenter)); //add this line
        Presenter.pushDocument(doc);
      });
    } else {
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
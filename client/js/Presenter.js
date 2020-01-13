/**
 * This class will be in charge of popping and pushing documents, 
 * and do event handling
 */
var Presenter = {
    // 1
    makeDocument: function (resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },
    // 2
    modalDialogPresenter: function (xml) {
        navigationDocument.presentModal(xml);
    },

    // 3
    pushDocument: function (xml) {
        navigationDocument.pushDocument(xml);
    },
}
!function($) {
    var populateform = require('populateform');
    $.ender({
        populateform: function(data) {
            return this.forEach(function (el) {
                populateform(el, data);
            });
        },
    }, true);
}(ender);

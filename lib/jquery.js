(function($) {
    $.fn.populateform = function(data) {
        return this.each(function() {
            populateform(this, data);
        });
    };

}(jQuery));

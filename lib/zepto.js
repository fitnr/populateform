!function($){
    $.extend($.fn, {
        populateform: function(data){
            $.each(this, function(key, element){
                populateform(element, data);
            });
            return this;
        }
  });
}(Zepto);

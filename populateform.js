/*!
    Populateform - Populate a form with data from a query string
    http://github.com/fitnr/populateform
    Copyright (C) 2014-2015 Neil Freeman
    License GPL v3
*/
! function(name, definition) {

    if (typeof module != 'undefined')
        module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object')
        define(definition);
    else
        this[name] = definition();

}('populateform', function() {

    function changeEvent() {
        var event;

        if (Event) {
            event = new Event('change', {
                'bubbles': true,
                'cancelable': true
            });
        }
        else if (document.createEvent) {
            event = document.createEvent("HTMLEvents");
            event.initEvent("change", true, true);
        } else if (document.createEventObject) {
            event = document.createEventObject();
            event.eventType = "change";

        }
        return event;
    }

    function trigger(elem, event) {
        if (elem.dispatchEvent) {
            elem.dispatchEvent(event);
        } else if (document.createEventObject) {
            element.fireEvent("on" + event.eventType, event);
        }
    }

    function parseData(data) {
        if (typeof data == 'string')
            return getQueryParams(data);

        if (typeof data == 'object')
            return data;

        throw 'wrong format';
    }

    function getQueryParams(querystring) {
        "use strict";
        // adapted from http://stackoverflow.com/questions/439463/how-to-get-get-and-post-variables-with-jquery
        var data = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;
        querystring = querystring.split("+").join(" ");
        while ((tokens = re.exec(querystring))) {
            data[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return data;
    }

    /**
     * Set a form field with a given value
     *
     * @param {DOMElement} The form to process
     * @param {fieldname} The field to address
     * @param {string} The value to set
     */
    function setupField(form, fieldname, value) {
        var fields = form.querySelectorAll('[name=' + fieldname + ']');

        if (fields.length < 0)
            return;

        var field = fields[0],
            type = field.getAttribute('type');

        if (type === 'radio') {

            field = Array.prototype.filter
                .call(fields, function(e) { return e.value == value; })
                .shift();

            field.checked = true;

        }
        else if (type === 'checkbox') {

            field.checked = !!value;

        } else {

            field.value = value;    

        }

        trigger(field, changeEvent());
    }

    /*
     * Populate a form with data, which can be either an object or a query string
    */
    return function(form, data) {
        try {
            data = parseData(data);

            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    setupField(form, key, data[key]);
                }
            }
        } catch (e) {
            // can't do anything
        }
        return form;
    };

});
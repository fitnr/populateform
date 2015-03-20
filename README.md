# Populateform

Populate a form with data from a query string. Super useful if you have a form as part of some dynamic content on your page, but don't need the weight of an entire library or framework.

Populateform is dependency-free, platform-agnostic and super-lightweight (< 1 KB).

## Basics

````html
<form action="" id="myForm">
    <input type="text" name="myField" type="text">
</form>

<script src="populateform.min.js"></script>
<script>
    var form = document.getElementById('myForm');
    var data = {'myField': 'Hello World'};

    // populate the form!
    populateform(form, data);
</script>
````

When the above is run, the text entry field will be populated with "Hello World".

The real fun is when you have a page with a query string, say: `http://example.com?my_field=Hello+World`.

````js
// the form will be populated. 
populateform(form, document.location.search)
````

Extra keys in the data will be ignored, and form fields not in the data aren't touched.

Populate form will try to fire a change event at the appropriate time, old browsers may have trouble with that.

## Use

Works great with Browserify:

````js
// src/my-form.js
populateform = require('populateform');

/* 
    some code that defines an element and data...
*/
populateform(elem, data);
````

Then do something like this (maybe you use Grunt or Gulp).

````
$ browserify src/my-form.js > build/my-form.min.js
`````

### jQuery, Zepto, Ender, whatever

If you prefer to run with a library, use `populateform.%.min.js`. If you use Ender, run `ender add populateform`).

Use it like so:

````javascript
// in real life, you would likely want to process and parse this.
var data = document.location.search;
$('#my_form').populateform(data);
````
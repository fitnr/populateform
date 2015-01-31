# Populateform

Populate a form with data from a query string. Super useful if have a form as part of some dynamic content on your page.

Populateform is dependency-free, platform-agnostic and super-lightweight (< 1 KB).

## Basics

````html
<form action="" id="my_form">
    <input type="text" name="my_field" type="text">
</form>

<script src="populateform.min.js"></script>
<script>
    var form = document.getElementById('my_form');
    var data = {'my_field': 'Hello World'};

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

Extra keys in the data will be ignored, and fields not in the data aren't touched.

Populate form will try to fire a change event at the appropriate time, old browsers may have trouble with that.

## jQuery, Zepto, Ender, whatever

If you prefer to run with a library, use `populateform.%.min.js`. If you use Ender, run `ender add populateform`).

Use it like so:

````javascript
// in real life, you would want to process this.
var data = document.location.search;
$('#my_form').populateform(data);
````

Works great with Browserify, too.

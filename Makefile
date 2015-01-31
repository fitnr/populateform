main = populateform

.PHONY: all
all: $(main).min.js $(main).jquery.min.js $(main).zepto.min.js

$(main).min.js: $(main).js
	node_modules/.bin/uglifyjs $^ -mc --screw-ie8 > $@

$(main).%.min.js: $(main).js lib/%.js
	node_modules/.bin/uglifyjs $^ -mc --screw-ie8 > $@

# Backbone mixins

This is an extension of Backbone library to add support for mixins.

About mixin pattern you can read here:
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript

Any pull request for optimisations and new additions is more than welcome.

# Installing backbone-mixins

```
npm install backbone-mixins
```

# Usage

```js
var Backbone = require('backbone');
require('backbone-mixins');

var mixin = {
    someMethod: function() {
        return 1;
    },
    otherMethod: function() {
        return 2;
    }
};

// mixins can be defined for views, models and collections
// mixins can be defined or passed as an option
var view = new Backbone.View({
    mixins: [mixin]
});
// view.someMethod() = 1;
// view.otherMethod() = 2;

var View = Backbone.View.extend({
    mixins: [mixin]
});
var view = new View();
// view.someMethod() = 1;
// view.otherMethod() = 2;
```
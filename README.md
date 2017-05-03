# Backbone mixins

This is an extension of the Backbone library to add support for mixins.

Some good documentation about the mixin pattern can be found here:
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript

Any pull request for optimisations and new additions are more than welcome.

# Installing backbone-mixins

```
npm install backbone-mixins
```

# Usage

Mixins can be defined for backbone views, models and collections.

Mixins can also be passed as an option to the backbone entity constructor.

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

// predefined
var view = new Backbone.View({
    mixins: [mixin]
});
// view.someMethod() = 1;
// view.otherMethod() = 2;

// passed as an option
var View = Backbone.View.extend({
    mixins: [mixin]
});
var view = new View();
// view.someMethod() = 1;
// view.otherMethod() = 2;
```
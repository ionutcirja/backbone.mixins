var Backbone = require('backbone');
var _ = require('underscore');

function augment(entity, mixin) {
    if (typeof mixin === 'object') {
        _.keys(mixin).forEach(function(key) {
            if (entity[key]) {
                throw new Error('There is already a property with name ' + key);
            }
            entity[key] = mixin[key];
        });
    }
}

function addMixins(entity, mixins) {
    mixins.forEach(function(mixin) {
        augment(entity, mixin);
    });
}

var extend = function(entity, options) {
    var mixins = entity.mixins || (options ? options.mixins : []) || [];
    if (mixins.length) {
        addMixins(entity, mixins);
    }
};

Backbone.View = (function(View) {
    return View.extend({
        constructor: function(options) {
            extend(this, options);
            View.apply(this, arguments);
        }
    });
})(Backbone.View);

Backbone.Model = (function(Model) {
    return Model.extend({
        constructor: function(attributes, options) {
            extend(this, options);
            Model.apply(this, arguments);
        }
    });
})(Backbone.Model);

Backbone.Collection = (function(Collection) {
    return Collection.extend({
        constructor: function(models, options) {
            extend(this, options);
            Collection.apply(this, arguments);
        }
    });
})(Backbone.Collection);

var Backbone = require('backbone');
var expect = require('chai').expect;
require('./');

describe('Backbone mixins', function() {
    it('should attach a mixin method if mixins prop is passed to a backbone entity constructor', function() {
        var Mixin = {
            mixinMethod: function() {
                return 1;
            }
        };

        var view = new Backbone.View({
            mixins: [Mixin]
        });

        var model = new Backbone.Model({}, {
            mixins: [Mixin]
        });

        var collection = new Backbone.Collection({}, {
            mixins: [Mixin]
        });

        expect(view.mixinMethod()).to.equal(1);
        expect(model.mixinMethod()).to.equal(1);
        expect(collection.mixinMethod()).to.equal(1);
    });

    it('should attach a mixin method if mixins prop is defined as a property', function() {
        var Mixin = {
            mixinMethod: function() {
                return 2;
            }
        };

        var View = Backbone.View.extend({
            mixins: [Mixin]
        });
        var view = new View();

        expect(view.mixinMethod()).to.equal(2);
    });

    it('should throw an error when a mixin method is already attached', function() {
        var Mixin = {
            mixinMethod: function() {
                return 1;
            }
        };
        var AnotherMixin = {
            mixinMethod: function() {
                return 2;
            }
        };

        expect(function() {
            new Backbone.View({
                mixins: [Mixin, AnotherMixin]
            });
        }).to.throw('There is already a property with name mixinMethod');
    });
});

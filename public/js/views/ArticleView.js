var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

module.exports = Backbone.View.extend({

  tagName: 'li',
  className: 'article',
  template: _.template('<%= title %>'),

  events: {
    'click': function() {
      this.model.read();
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
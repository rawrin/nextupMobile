var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

module.exports = Backbone.View.extend({

  // el: '<div class="content">Content</div>',
  template: _.template('<div><%= content %></div>'),

  initialize: function() {
    this.render();
  },

  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    return this.$el;
  }

});
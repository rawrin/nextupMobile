var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

module.exports = Backbone.View.extend({

  template: _.template('<li class="article"><%= title %></li>'),

  events: {
    'click .article': function() {
      // calls read function on model to switch unread to read and triggers "read"
      this.model.read();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
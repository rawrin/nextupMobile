var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

module.exports = Backbone.Model.extend({

  defaults: {
    'read': false,
    'content': "Please select an article from the right to begin reading!"
  },

  // Sets model to read
  read: function() {
    this.set('read', true);
    this.trigger('read', this);
  }

});

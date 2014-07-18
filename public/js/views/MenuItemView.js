var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

module.exports = Backbone.View.extend({

  tagName: 'li',
  template: _.template('<%= text %>'),

  render: function() {

  }

});
var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

var ArticleModel = require('../models/ArticleModel');

module.exports = Backbone.Collection.extend({

  model: ArticleModel,

  // API endpoint for fetching articles
  url: '/api/articles',

  fetch: function () {
    this.reset();
    $.get(this.url, function(arrayJSON){
      var arr = JSON.parse(arrayJSON);
      this.add(arr);
    }.bind(this));
  },

  // Fetches JSON on initialization and sets the models to collection
  initialize: function() {
    // this.fetch();
  }

});
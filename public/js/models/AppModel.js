var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

var ArticleModel = require('../models/ArticleModel');

module.exports = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentArticle', new ArticleModel());

    params.library.on('read', function(article) {
      this.set('currentArticle', article);
      // On read request, sends POST request to API and retrieves content + similar articles.
    }, this);
  }
});
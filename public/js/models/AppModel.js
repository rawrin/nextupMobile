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
      // Should renew collection with similar articles to currentArticle
      // params.library.fetch();
    }, this);
  }


});
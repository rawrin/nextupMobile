var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

var ArticleView = require('./ArticleView');

module.exports = Backbone.View.extend({

  tagName: 'ul',
  className: 'unreadContent',

  initialize: function() {
    this.collection.on("change", function(article){
      this.render();
    }, this);

    this.render();
  },

  render: function() {
    this.$el.children().detach();

    var viewArray = [];
    for (var i = 0; i < this.collection.length; i++) {
      if (!this.collection.at(i).attributes.read) {
        var miniArticle = new ArticleView({model: this.collection.at(i)});
        var miniArticleEl = miniArticle.render();
        viewArray.push(miniArticleEl);
      }
    }
    this.$el.append(viewArray);
    return this.$el;
  }

});
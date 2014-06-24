var $        = require('jquery');
var Backbone = require('backbone');
var _        = require('underscore');
Backbone.$   = $;

var ReadView           = require('./ReadView');
var UnreadView         = require('./UnreadView');
var CurrentArticleView = require('./CurrentArticleView');

module.exports = Backbone.View.extend({

  initialize: function() {
    this.model.on('change:currentArticle', function() {
      this.render();
    }, this);
  },

  render: function() {
    $('.read').html((new ReadView({collection: this.model.attributes.library})).$el);
    $('.unread').html((new UnreadView({collection: this.model.attributes.library})).$el);
    $('.content').html((new CurrentArticleView({model: this.model.get('currentArticle')})).$el);
  }
});
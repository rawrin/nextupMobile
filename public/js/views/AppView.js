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
    $('.readView').html((new ReadView({collection: this.model.attributes.library})).$el);
    $('.unreadView').html((new UnreadView({collection: this.model.attributes.library})).$el);
    $('.contentView').html((new ContentView({model: this.model.get('currentArticle')})).$el);
  }
});
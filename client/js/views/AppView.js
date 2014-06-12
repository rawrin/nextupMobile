var AppView = Backbone.View.extend({

  initialize: function() {
    this.readView = new ReadView({collection: this.model.attributes.library});
    this.unreadView = new UnreadView({collection: this.model.attributes.library});
    this.currentArticleView = new CurrentArticleView({model: this.model.get('currentArticle')});

    this.model.on('change:currentArticle', function(article) {
      this.currentArticleView.render(article);
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.readView.$el,
      this.unreadView.$el,
      this.currentArticleView.$el
    ]);
  }

});
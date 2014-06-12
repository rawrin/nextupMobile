var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentArticle', new ArticleModel());

    params.library.on('read', function(article) {
      this.set('currentArticle', article);
    }, this);
  }


});
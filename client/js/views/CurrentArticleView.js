var CurrentArticleView = Backbone.View.extend({

  el: '<div class="content">Content</div>',
  template: _.template('<div><%= content %></div>'),

  initialize: function() {
    this.render();
  },

  render: function(article) {
    if (article) {
      this.$el.html(this.template(article.get('currentArticle').attributes));
    }
    // $('.content').append(this.$el);
    return this.$el;
  }

});
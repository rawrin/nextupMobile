var UnreadView = Backbone.View.extend({

  el: '<ul class="unreadView"></ul>',

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
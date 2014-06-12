var Articles = Backbone.Collection.extend({

  model: ArticleModel,

  // API endpoint for fetching articles
  url: '/api/articles',

  fetch: function () {
    //this.empty();
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
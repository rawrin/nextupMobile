var ArticleModel = Backbone.Model.extend({

  defaults: {
    'read': false,
  },

  // Sets model to read
  read: function() {
    this.set('read', true);
    this.trigger('read', this);
  }

});

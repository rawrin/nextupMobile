var ArticleView = Backbone.View.extend({

  // tagname: 'li',

  template: _.template('<li class="article"><i><%= title %></i> <a href="<%= url %>">URL</a></li>'),

  events: {
    'click .article': function() {
      // calls read function on model to switch unread to read and triggers "read"
      this.model.read();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
var $        = require('jquery');
var Articles = require('./collections/Articles');
var AppModel = require('./models/AppModel');
var AppView  = require('./views/AppView');

$(function(){
  var library = new Articles(articleData);
  var app = new AppModel({library: library});
  var appView = new AppView({model: app});
  appView.render();
});
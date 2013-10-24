var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var ReviewController = new Controller();

ReviewController.main = function() {
  this.title = 'Locomotive'
  this.render('main');
}

module.exports = ReviewController;

var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var ReviewController = new Controller();

ReviewController.main = function() {
  this.title = 'Review Applicant';
  this.render('review');
};

module.exports = ReviewController;

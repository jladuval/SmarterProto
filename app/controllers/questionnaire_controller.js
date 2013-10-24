var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var QuestionnaireController = new Controller();

QuestionnaireController.main = function() {
  this.title = 'Locomotive'
  this.render('main');
}

module.exports = QuestionnaireController;

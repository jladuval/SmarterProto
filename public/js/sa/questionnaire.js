var Questionnaire = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

Questionnaire.Router.map(function () { 
    this.resource("start");
    this.resource("question");
});

Questionnaire.Question = Ember.Object.extend({
    number: 0,
    maxTime: 0,
    questionText: "",
});

var Questions = Ember.A([
        Questionnaire.Question.create({
            number: 1,
            questionText: "How old are you1?"
        }),
         Questionnaire.Question.create({
            number: 2,
            questionText: "How old are you2?"
        }), 
        Questionnaire.Question.create({
            number: 3,
            questionText: "How old are you3?"
        })]);

Questionnaire.QuestionController = Ember.Controller.extend({
    questions: Questions,
    currentQuestionNo : 0,
    currentQuestion: Questions[0],
    actions: {
        next: function() {
            this.set("currentQuestionNo", this.currentQuestionNo + 1);
            this.set("currentQuestion", this.questions[this.currentQuestionNo]);
        }
    }
});

(function(){
    window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia  = 
            navigator.getUserMedia 
            || navigator.webkitGetUserMedia 
            || navigator.mozGetUserMedia 
            || navigator.msGetUserMedia;
      var onFailSoHard = function(e) {
        console.log('Reeeejected!', e);
      };
    
      // Not showing vendor prefixes.
      navigator.getUserMedia({video: true, audio: false}, function(localMediaStream) {
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(localMediaStream);
    
        // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
        // See crbug.com/110938.
        video.onloadedmetadata = function(e) {
          // Ready to go. Do some stuff.
        };
      }, onFailSoHard);
})();
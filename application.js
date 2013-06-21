define(['render',
        'events',
        'class'],
function(render, Emitter, clazz) {
  
  function Application() {
    Application.super_.call(this);
    this.render = render;
    this.rootController = undefined;
  }
  clazz.inherits(Application, Emitter);
  
  Application.prototype.run = function() {
    this.willLaunch();
    this.launch();
    this.didLaunch();
    
    render.$(document).ready(function() {
      this.willDisplay();
      this.display();
      this.didDisplay();
    });
  };
  
  Application.prototype.launch = function() {};
  
  Application.prototype.display = function() {
    if (!this.rootController) throw new Error('No root controller initialized by application.');
    
    this.rootController.willAddEl();
    this.rootController.el.prependTo(document.body);
    this.rootController.didAddEl();
  };
  
  Application.prototype.willLaunch = function() {};
  Application.prototype.didLaunch = function() {};
  Application.prototype.willDisplay = function() {};
  Application.prototype.didDisplay = function() {};
  
  return Application;
});

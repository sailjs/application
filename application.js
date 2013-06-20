define(['events',
        'class'],
function(Emitter, clazz) {
  
  function Application() {
    Application.super_.call(this);
    this.rootController = undefined;
  }
  clazz.inherits(Application, Emitter);
  
  Application.prototype.run = function {
    this.willLaunch();
    this.launch();
    this.didLaunch();
  };
  
  Application.prototype.launch = function() {
    if (!this.rootController) throw new Error('No root controller initialized by application.');
    
    this.rootController.willAddEl();
    this.rootController.el.prependTo(document.body);
    this.rootController.didAddEl();
  };
  
  Application.prototype.willLaunch = function() {};
  Application.prototype.didLaunch = function() {};
  
  return Application;
});

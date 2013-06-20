define(['events',
        'class'],
function(Emitter, clazz) {
  
  function Application() {
    Application.super_.call(this);
  }
  clazz.inherits(Application, Emitter);
  
  return Application;
});

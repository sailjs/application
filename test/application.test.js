define(['application'],
function(Application) {

  describe("application", function() {
    
    it('should export constructor', function() {
      expect(Application).to.exist;
      expect(Application).to.be.a('function');
    });
    
  });
  
  return { name: "test.application" }
});

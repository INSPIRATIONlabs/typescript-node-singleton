var should = require('should');

describe('mySingletonMod', function() {

  describe('singleton check', function() {
    it('should initialize', function(done) {
      should.not.exist(require('../index.js')._instance);
      require('../index.js').getInstance();
      done();
    });

    it('should check if singleton', function(done) {
      //var cache = require('../index.js').mlcl_database_cache.getInstance();
      var cache = require('../index.js');
      cache._instance.should.be.an.instanceOf(Object);
      cache._instance.should.be.ok;
      done();
    });
  });
});

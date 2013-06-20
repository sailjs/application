require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'application', location: '../../../..', main: 'application' },
    { name: 'events' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);

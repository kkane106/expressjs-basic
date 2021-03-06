module.exports = function(grunt) {
    // Load plugins
  [
    'grunt-cafe-mocha',
    'grunt-contrib-jshint'
  ].forEach(function(task) {
    grunt.loadNPMTasks(task);
});

// Configure plugins
grunt.initConfig({
  cafemocha: {
    all: {
      src: 'qa/tests-*.js', options: {ui: 'tdd'},
    }
  },
  jshint: {
    app: ['meadolark.js',
          'public/js/**/*.js',
          'lib/**/*.js'],
    qa: ['Gruntfile.js',
         'public/qa/**/*.js',
         'qa/**/*.js'],
  }
});

// Register tasks
grunt.registerTask('default',
  ['cafemocha','jshint']);
};
    

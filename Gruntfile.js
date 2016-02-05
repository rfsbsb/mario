module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          noCache: true,
          style: 'nested',
          lineNumbers: true,
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      files: "./scss/**/*.scss",
      tasks: ["sass"]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sass: {
      options: {
        style: 'compressed'
      },
      styles: {
        src: 'src/scss/styles.scss',
        dest: 'htdocs/css/styles.min.css'
      }
    },
    uglify: {
      js: {
        src: 'src/js/scripts.js',
        dest: 'htdocs/js/scripts.min.js'
      }
    },
    watch: {
      sass: {
        files: '<%= sass.styles.src %>',
        tasks: 'sass'
      },
      js: {
        files: '<%= uglify.js.src %>',
        tasks: 'uglify'
      }
    }
  });

  grunt.registerTask('default', [ 'sass', 'uglify' ]);

};

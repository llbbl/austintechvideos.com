module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            copy: {
                main: {
                    files: [

                        // includes files within path and its sub-directories
                        {expand: true, flatten: true, src: ['bower_components/jquery/dist/*'], dest: 'js/vendor/'},
                        {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/js/*'], dest: 'js/vendor/'},
                        {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/css/*'], dest: 'css/vendor/'},
                        {expand: true, flatten: true, src: ['bower_components/fitvids/jquery.fitvids.js'], dest: 'js/vendor/'}

                    ]
                }
            }

    });

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);

};
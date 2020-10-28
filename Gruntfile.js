module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [

                ]
            }
        },

        less: {

            production: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/main.css": "css/main.less"
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['copy']);

};

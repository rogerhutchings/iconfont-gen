(function() {
 
    'use strict';
 
    // Main Grunt section ------------------------------------------------------
    module.exports = function(grunt) {
 
        // Load dependencies ---------------------------------------------------
        require('time-grunt')(grunt);
 
        // Project configuration -----------------------------------------------
        grunt.initConfig({
 
            pkg: grunt.file.readJSON('package.json'),
  
            compass: {
                compile: {
                    options: {
                    }
                }
            },
 
            webfont: {
                icons: {
                    src: 'svgs/*.svg',
                    dest: 'fonts/icons',
                    destCss: 'sass',
                    options: {
                        engine: 'node',
                        font: 'icons',
                        hashes: false,
                        htmlDemo: false,
                        template: 'template/template.css',
                        types: 'eot,woff,ttf,svg',
                        stylesheet: 'sass'
                    }
                }
            },

            sass: {
                compile: {
                    options: {
                        style: 'expanded'
                    },
                    files: {
                        'demo/main.css': 'sass/main.sass'
                    }
                }
            }
 
        });
 
        grunt.loadNpmTasks('grunt-webfont');
        grunt.loadNpmTasks('grunt-contrib-sass');
 
        // Tasks ---------------------------------------------------------------
        grunt.registerTask(
            'default',
            'Default task: build',
            ['build']
        );
 
        grunt.registerTask(
            'build',
            'Compiles the icon font and generates a Sass file with the icon mixins',
            ['webfont', 'sass']
        );
 
    };

})();
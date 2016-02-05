Super Mario World assets in CSS
===============================

This is an experiment I'm doing in order to reproduce, using only CSS and maybe a few Javascript, to reproduce assets of one of my favorites game ever!

The idea is to create it to practice and show my skills using CSS.
 
Project organization
====================

The project is organized in a fashion so it can be easy to test and develop. 
I've used SASS in order to make it easy to read the code, and it compiles to CSS. The folders are organized like:

* scss: the folder with all source, written using SASS. Each file in this folder will compile to a file with the same name in CSS folder
* html: all HTML files used to render objects are in this folder
* css: CSS files compiled form SASS folder

Building the project
====================

The project, as it is now on Github, is self contained and can be tested by opening the HTML files on a browser, but if you wish to change anything, I'd recommend using SASS and the source files in scss folder.
To compile the source you'll have to have Grunt and some other small libs installed.

First, install NodeJS form one source to your platform. Once NodeJS is installed, install the Grunt command line

    npm install -g grunt-cli
    
Then install all project dependencies, by going to the project folder using any command line terminal and running

    npm install
    
Then you can use any of the commands below to compile your code. The first one will just compile the source, the second one will watch any file you change and regenerate the CSS.

    grunt sass

or

    grunt watch


License
=======

MIT

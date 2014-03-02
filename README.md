Overview
========
This package is a plugin for nosetests which causes test results to be output into a nice HTML page.

The output HTML page is updated live as the tests run, and the logs for each test are written separately for each test, so
it's possible to see test logs before the tests finish running, and during the run.

Usage
-----
Run nosetests with the option --with-html-output:

    nosetests --with-html-output

The plugin will create a directory in the current working path, with the date and time as its name. The HTML page and the log
files will be created in this directory.

It is possible to specify --open-browser to open the default browser with the new HTML output page when the tests start running:

    nosetests --with-html-output --open-browser
    
It is also possible to specify --use-ajax to make the output page automatically update when tests are running with new test results.
For example:

    nosetests --with-html-output --use-ajax --open-browser

If --use-ajax is specified, the plugin will open a web server on the local host (port 16193), and the page will use AJAX
requests to update itself. When the tests finish running, the web server will close and the output page will become static.

Checking out the code
=====================

Run the following:

    easy_install -U infi.projector
    projector devenv build

Overview
========
This package is a plugin for nosetests which causes test results to be output into a nice HTML page.

The output HTML page is updated live as the tests run, and the logs for each test are written separately for each test, so
it's possible to see test logs before the tests finish running, and during the run.

Usage
-----
Run nosetests with the option --with-html-output:

    nosetests --with-html-output

It is possible to specify --open-browser to open the default browser with the new HTML output page when the tests start running:

    nosetests --with-html-output --open-browser

The plugin will create a directory in the current working path, with the date and time as its name. The HTML page and the log
files will be created in this directory.

Checking out the code
=====================

This project uses buildout and infi-projector, and git to generate setup.py and __version__.py.
In order to generate these, first get infi-projector:

    easy_install infi.projector

and then run in the project directory:

    projector devenv build

To use the plugin directly from the source, run:

    python setup.py develop


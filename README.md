supportedBrowser.js
========================
Check for supported browser and features

What it is
----------
A simple means to determine if a users browser is one that you've chosen to support. To obtain basic information about the browser.


What it isn't
-----------
This isn't the end all be all solution that can determine any browser on any platform like https://github.com/NielsLeenheer/WhichBrowser

This isn't comprehensive feature detection library like https://github.com/Modernizr/Modernizr

Why use this
-----------
We support certain browsers (the main ones) and would like to inform users gently that they arent supported and things may not work. This doesn't block access. This doesnt hinder the users expirience. Simply states that unless they move to a supported browser, we can't guarentee a good user expirience.

To Use
-----------
* include script
* configure which browsers you would like to support
* call console.log(browserInfo);

This will return a boolean if the browser/os combination is in your list of supported. Along with all the information it gathered.


Inspiration
-----------
* Initially borrowed from http://stackoverflow.com/a/21342122
* Which was borrowed from http://stackoverflow.com/a/18706818
* Also includes bits and pieces modernizer itself

supportedBrowser.js
========================
Check for supported browser and features

Demo
--------
http://thorst.github.io/Browser

What it is
----------
A simple means to determine if a users browser is one that you've chosen to support. To obtain basic information about the browser.


What it isn't
-----------
This isn't the end all be all solution that can determine any browser on any platform like https://github.com/NielsLeenheer/WhichBrowser

This isn't comprehensive feature detection library like https://github.com/Modernizr/Modernizr

Why use this
-----------
We support certain browsers (the main ones) and would like to inform users gently that they aren't supported and things may not work. 
This doesn't block access. This doesn't hinder the users experience. Simply states that unless they move to a supported browser, we 
can't guarantee a good user experience.

This helps manage expectations for users as well as aids in our support center in diagnosing issues.


What are the main ones
----------
Windows xp,vista,7,8
* Chrome
* Firefox
* Internet Explorer

OSX 10.8, 10.9
* Safari
* Chrome
* Firefox

Android
* Android Browser 2.3 (Gingerbread)
* Chrome 4.0 (IceCream Sandwhich), 4.1-4.3 (Jelly Bean), 4.4 (KitKat)
* Firefox 2.3 (Gingerbread), 4.0 (IceCream Sandwhich), 4.1-4.3 (Jelly Bean), 4.4 (KitKat)

iOS 6/7
* Safari

To Use
-----------
* include script
* configure which browsers you would like to support
* call console.log(browserInfo);

This will return a boolean if the browser/os combination is in your list of supported. Along with all the information it gathered.


Inspiration / Resources
-----------
* http://stackoverflow.com/a/21342122 from (http://stackoverflow.com/a/18706818)
* https://github.com/Modernizr/Modernizr
* https://github.com/bestiejs/platform.js
* https://github.com/codejoust/session.js/
* https://github.com/leopic/jquery.detectBrowser.js/tree/sans-jquery
* https://github.com/ded/bowser
* https://github.com/ded/bowser/blob/master/src/useragents.js
* http://www.useragentstring.com/pages/Browserlist/

;(function (window, document, undefined) {
    "use strict";
  
    window.supportedBrowser = function (settings) {
        var
            result = {
                os: false,
                osVersion: false,
                browser: false,
                browserVersion: false
            },
            os = {},
            browser = {}
        ;
        var i,
            browserInfo = window.browserInfo;

        // valid platform
        for (i = 0; i < settings.length; i++) {
            if (settings[i].os.toLowerCase().indexOf(browserInfo.os.name.toLowerCase()) === 0) {
                result.os = true;
                os = settings[i];
                break;
            }
        }
        if (!result.os) { return result };
       

        // valid platform version
        for (i = 0; i < os.versions.length; i++) {
            if (os.versions[i].toLowerCase().indexOf(browserInfo.os.versionString.toLowerCase()) === 0) {
                result.osVersion = true;
                break;
            }
        }
        if (!result.osVersion) { return result };


        // valid browser for platform
        for (i = 0; i < os.browsers.length; i++) {
            if (os.browsers[i].browser.toLowerCase().indexOf(browserInfo.browser.name.toLowerCase()) === 0) {
                result.browser = true;
                browser =os.browsers[i];
                break;
            }
        }
        if (!result.browser) { return result };


        // valid version of the browser
        if (browser.version <= browserInfo.browser.version) {
            result.browserVersion = true;
        }


        return result;
    };
})(window, document);
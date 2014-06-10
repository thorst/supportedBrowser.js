// list of current browsers
// http://fresh-browsers.com/
;(function (window, document, undefined) {
    "use strict";

    var
        getBrowser = function () {
            
            // initial values for checks
            var
                nAgt = navigator.userAgent,                         // store user agent [Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0]
                browser = navigator.appName,                        // browser string [Netscape]
                version = '' + parseFloat(navigator.appVersion),    // version string (5) [5.0 (Windows)]
                majorVersion = parseInt(navigator.appVersion, 10)   // version number (5) [5.0 (Windows)]
            ;
          
            var nameOffset, // used to detect other browsers name
                verOffset,  // used to trim out version
                ix          // used to trim string
            ;

            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                    version = nAgt.substring(verOffset + 8);
                }
          

                // MSIE
            } else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);


                //IE 11 no longer identifies itself as MS IE, so trap it
                //http://stackoverflow.com/questions/17907445/how-to-detect-ie11
            }  else if ((browser === 'Netscape') && (nAgt.indexOf('Trident/') !== -1)) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
                if ((verOffset = nAgt.indexOf('rv:')) !== -1) {
                    version = nAgt.substring(verOffset + 3);
                }
         

                // Chrome
            } else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);


                // Chrome on iPad identifies itself as Safari. However it does mention CriOS.
            } else if ((verOffset = nAgt.indexOf('CriOS')) !== -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 6);
                

                // Safari
            } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                    version = nAgt.substring(verOffset + 8);
                }


            // Firefox
            } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);


            // Other browsers
            } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() === browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }


            // trim the version string
            if ((ix = version.indexOf(';')) !== -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) !== -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) !== -1) version = version.substring(0, ix);


            // why is this here?
            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            return {
                name:browser,
                version:majorVersion,
                versionString: version
            };
        },
        getDevice = function () {
            var
                i,
                nVer = navigator.appVersion,
                nAgt = navigator.userAgent,
                tabletStrings = [
                     { s: 'iPad', r: /iPad/ },
                     { s: 'Samsung Galaxy', r: /SCH-I800/ },
                     { s: 'Motorola', r: /xoom/ },
                     { s: 'Kindle', r: /kindle/ }
                ],
                phoneStrings = [
                     { s: 'iPhone', r: /iPhone/ },
                     { s: 'iPod', r: /iPod/ },
                     { s: 'blackberry', r: /blackberry/ },
                     { s: 'android 0.5', r: /android 0.5/ },
                     { s: 'htc', r: /htc/ },
                     { s: 'lg', r: /lg/ },
                     { s: 'midp', r: /midp/ },
                     { s: 'mmp', r: /mmp/ },
                     { s: 'mobile', r: /mobile/ },
                     { s: 'nokia', r: /nokia/ },
                     { s: 'opera mini', r: /opera mini/ },
                     { s: 'palm', r: /palm|PalmSource/ },
                     { s: 'pocket', r: /pocket/ },
                     { s: 'psp', r: /psp|Playstation Portable/ },
                     { s: 'sgh', r: /sgh/ },
                     { s: 'smartphone', r: /smartphone/ },
                     { s: 'symbian', r: /symbian/ },
                     { s: 'treo mini', r: /treo mini/ },
                     { s: 'SonyEricsson', r: /SonyEricsson/ },
                     { s: 'Samsung', r: /Samsung/ },
                     { s: 'MobileExplorer', r: /MobileExplorer/ },
                     { s: 'Benq', r: /Benq/ },
                     { s: 'Windows Phone', r: /Windows Phone/ },
                     { s: 'Windows Mobile', r: /Windows Mobile/ },
                     { s: 'IEMobile', r: /IEMobile/ },
                     { s: 'Windows CE', r: /Windows CE/ },
                     { s: 'Nintendo Wii', r: /Nintendo Wii/ }
                ]
            ;


            var is_tablet= false,
                is_phone = false,
                device = "";

            for (i in tabletStrings) {
                if (tabletStrings[i].r.test(nAgt)) {
                    device = tabletStrings[i].s;
                    is_tablet = true;
                    break;
                }
            }
            if (device === "") {
                for (i in phoneStrings) {
                    if (phoneStrings[i].r.test(nAgt)) {
                        device = phoneStrings[i].s;
                        is_phone = true;
                        break;
                    }
                }
            }


            // if they are on tablet or phone
            var is_mobile = is_tablet || is_phone;
            if (!is_mobile) {
                is_mobile = /Mobile|mini|Fennec|Android/.test(nVer);
            }

            return {
                screen: {
                    width: screen.width,
                    height: screen.height
                },
                device: device,
                isTable: is_tablet,
                isMobile: is_mobile,
                isPhone: is_phone
            };
        },
        getOS = function () {
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var osVersion = "unknown";
            var os = "unknown";
            // system
        
            var clientStrings = [
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows ME', r: /Windows ME/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;

            }

            return {
                name: os,
                versionString: osVersion
            };
        },
            getBrowserFeatures = function () {
                
                // cookie support
                var cookieEnabled = false;
                try {
                    // Create cookie
                    document.cookie = 'cookietest=1';
                    var ret = document.cookie.indexOf('cookietest=') != -1;
                    // Delete cookie
                    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
                    cookieEnabled = ret;
                }
                catch (e) {
                }

                return {
                    window: {
                        width: window.innerWidth,
                        height : window.innerHeight
                    },
                    allowsCookies:cookieEnabled
                }
            }
        ;


  window.browserInfo = {
        userAgent: navigator.userAgent,
        browser: getBrowser(),
        browserFeatures: getBrowserFeatures(),
        device: getDevice(),
        os: getOS()
    };
})(window, document);

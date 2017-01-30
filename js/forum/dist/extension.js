'use strict';

System.register('flagrow/ads/main', ['flagrow/ads/addAdUnderHeader'], function (_export, _context) {
    "use strict";

    var addAdUnderHeader;
    return {
        setters: [function (_flagrowAdsAddAdUnderHeader) {
            addAdUnderHeader = _flagrowAdsAddAdUnderHeader.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-ads', function (app) {
                addAdUnderHeader();
            });
        }
    };
});;
'use strict';

System.register('flagrow/ads/addAdUnderHeader', [], function (_export, _context) {
    "use strict";

    _export('default', function () {
        var appElement = document.getElementsByClassName('App-content')[0];

        var adsElement = document.createElement('div');

        adsElement.className = 'Flagrow-Ads';

        appElement.parentNode.insertBefore(adsElement, appElement);
    });

    return {
        setters: [],
        execute: function () {}
    };
});
'use strict';

System.register('flagrow/ads/main', ['flarum/extend', 'flarum/app', 'flagrow/ads/addAdUnderHeader', 'flarum/components/HeaderPrimary'], function (_export, _context) {
    "use strict";

    var extend, app, addAdUnderHeader, HeaderPrimary;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flagrowAdsAddAdUnderHeader) {
            addAdUnderHeader = _flagrowAdsAddAdUnderHeader.default;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-ads', function (app) {
                extend(HeaderPrimary.prototype, 'items', function (items) {
                    addAdUnderHeader();
                });
            });
        }
    };
});;
'use strict';

System.register('flagrow/ads/addAdUnderHeader', [], function (_export, _context) {
    "use strict";

    _export('default', function () {
        var advertisement = app.forum.attribute('flagrow.ads.under-header');

        if (advertisement) {

            var appElement = document.getElementsByClassName('App-content')[0];

            var adsElement = document.createElement('div');

            adsElement.className = 'Flagrow-Ads';
            adsElement.innerHTML = advertisement;

            appElement.parentNode.insertBefore(adsElement, appElement);
        }
    });

    return {
        setters: [],
        execute: function () {}
    };
});
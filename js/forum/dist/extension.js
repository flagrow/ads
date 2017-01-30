'use strict';

System.register('flagrow/ads/main', ['flarum/extend', 'flarum/app', 'flagrow/ads/addAdUnderHeader', 'flagrow/ads/addAdUnderNavItems', 'flarum/components/HeaderPrimary'], function (_export, _context) {
    "use strict";

    var extend, app, addAdUnderHeader, addAdUnderNavItems, HeaderPrimary;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flagrowAdsAddAdUnderHeader) {
            addAdUnderHeader = _flagrowAdsAddAdUnderHeader.default;
        }, function (_flagrowAdsAddAdUnderNavItems) {
            addAdUnderNavItems = _flagrowAdsAddAdUnderNavItems.default;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-ads', function (app) {
                extend(HeaderPrimary.prototype, 'items', function (items) {
                    addAdUnderHeader();
                });
                addAdUnderNavItems();
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
});;
'use strict';

System.register('flagrow/ads/addAdUnderNavItems', ['flarum/extend', 'flarum/components/IndexPage'], function (_export, _context) {
    "use strict";

    var extend, IndexPage;

    _export('default', function () {
        extend(IndexPage.prototype, 'sidebarItems', function (items) {

            var advertisement = app.forum.attribute('flagrow.ads.under-nav-items');

            if (advertisement) {

                // set priority higher to move up
                items.add('flagrow-ad', m.trust(advertisement), -100);
            }
        });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage.default;
        }],
        execute: function () {}
    };
});
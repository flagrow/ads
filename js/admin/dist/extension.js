"use strict";

System.register("flagrow/ads/addAdsPane", ["flarum/extend", "flarum/components/AdminNav", "flarum/components/AdminLinkButton", "flagrow/ads/components/AdsPage"], function (_export, _context) {
    "use strict";

    var extend, AdminNav, AdminLinkButton, AdsPage;

    _export("default", function () {
        // create the route
        app.routes['flagrow-ads'] = { path: '/flagrow/ads', component: AdsPage.component() };

        // bind the route we created to the three dots settings button
        app.extensionSettings['flagrow-ads'] = function () {
            return m.route(app.route('flagrow-ads'));
        };

        extend(AdminNav.prototype, 'items', function (items) {
            items.add('flagrow-ads', AdminLinkButton.component({
                href: app.route('flagrow-ads'),
                icon: 'audio-description',
                children: 'Ads',
                description: app.translator.trans('flagrow-ads.admin.tab.description')
            }));
        });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsAdminNav) {
            AdminNav = _flarumComponentsAdminNav.default;
        }, function (_flarumComponentsAdminLinkButton) {
            AdminLinkButton = _flarumComponentsAdminLinkButton.default;
        }, function (_flagrowAdsComponentsAdsPage) {
            AdsPage = _flagrowAdsComponentsAdsPage.default;
        }],
        execute: function () {}
    };
});;
"use strict";

System.register("flagrow/ads/main", ["flarum/extend", "flarum/app", "flagrow/ads/addAdsPane"], function (_export, _context) {
    "use strict";

    var extend, app, addAdsPane;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flagrowAdsAddAdsPane) {
            addAdsPane = _flagrowAdsAddAdsPane.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-ads', function (app) {
                // add the admin pane
                addAdsPane();
            });
        }
    };
});;
"use strict";

System.register("flagrow/ads/components/AdsPage", ["flarum/Component", "flarum/components/Button", "flarum/utils/saveSettings", "flarum/components/Alert", "flarum/components/Select", "flarum/components/Switch"], function (_export, _context) {
    "use strict";

    var Component, Button, saveSettings, Alert, Select, Switch, UploadPage;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumUtilsSaveSettings) {
            saveSettings = _flarumUtilsSaveSettings.default;
        }, function (_flarumComponentsAlert) {
            Alert = _flarumComponentsAlert.default;
        }, function (_flarumComponentsSelect) {
            Select = _flarumComponentsSelect.default;
        }, function (_flarumComponentsSwitch) {
            Switch = _flarumComponentsSwitch.default;
        }],
        execute: function () {
            UploadPage = function (_Component) {
                babelHelpers.inherits(UploadPage, _Component);

                function UploadPage() {
                    babelHelpers.classCallCheck(this, UploadPage);
                    return babelHelpers.possibleConstructorReturn(this, (UploadPage.__proto__ || Object.getPrototypeOf(UploadPage)).apply(this, arguments));
                }

                babelHelpers.createClass(UploadPage, [{
                    key: "init",
                    value: function init() {}
                }, {
                    key: "view",
                    value: function view() {
                        return [];
                    }
                }, {
                    key: "onsubmit",
                    value: function onsubmit(e) {
                        // prevent the usual form submit behaviour
                        e.preventDefault();
                    }
                }]);
                return UploadPage;
            }(Component);

            _export("default", UploadPage);
        }
    };
});
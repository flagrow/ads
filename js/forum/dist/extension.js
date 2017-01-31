'use strict';

System.register('flagrow/ads/addAdBetweenPosts', ['flarum/extend', 'flarum/app', 'flarum/components/PostStream'], function (_export, _context) {
    "use strict";

    var extend, app, PostStream;

    _export('default', function () {
        extend(PostStream.prototype, 'posts', function (posts) {
            var advertisement = app.forum.attribute('flagrow.ads.between-posts');

            if (posts.length && advertisement) {
                var pointers, internal;
                var offset;

                (function () {
                    var between = parseInt(app.forum.attribute('flagrow.ads.between-n-posts') || 5);

                    pointers = [];
                    internal = 0;


                    posts.forEach(function (post, i) {
                        if (i > 0 && i < posts.length && post && post.number() && post.contentType() == 'comment') {
                            internal++;

                            if (internal === between) {
                                pointers.push(i);
                                internal = 0;
                            }
                        }
                    });

                    offset = 0;

                    pointers.forEach(function (number) {

                        var index = number + offset;

                        posts.splice(index, 0, app.store.createRecord('posts', { attributes: {
                                contentHtml: advertisement,
                                time: new Date(),
                                contentType: 'ad',
                                canReply: false,
                                canFlag: false,
                                canLike: false,
                                canDelete: false,
                                canApprove: false,
                                canEdit: false,
                                isApproved: true,
                                number: index
                            } }));

                        offset++;
                    });
                })();
            }
        });
        //
        // extend(PostStream.prototype, 'view', function(component) {
        //     const advertisement = app.forum.attribute('flagrow.ads.between-posts');
        //     const between = parseInt(app.forum.attribute('flagrow.ads.between-n-posts') || 5);
        //
        //     if (advertisement && component.children.length) {
        //         var pointers = [],
        //             internal = 0;
        //
        //         component.children.forEach((post, i) => {
        //             if (i > 0 && post.attrs['data-type'] == 'comment' && i != component.children.length) {
        //                 internal++;
        //
        //                 if (internal >= between) {
        //                     pointers.push(i);
        //                     internal = 0;
        //                 }
        //             }
        //         });
        //
        //         if (pointers.length) {
        //             // FiPo is the First Post.
        //             var FiPo = component.children[0];
        //             FiPo.children = [m('article', {className: 'Post EventPost AdPost'}, [
        //                 m('div', {className: 'Flagrow-Ads-between-posts EventPost-info'}, [
        //                     m.trust(advertisement)
        //                 ])
        //             ])];
        //             FiPo.attrs['data-type'] = 'ad';
        //             FiPo.attrs['data-id'] = null;
        //
        //             internal = 0;
        //
        //             pointers.forEach(index => {
        //                 // Increment the index to offset for already added ads.
        //                 var index = index + internal;
        //                 FiPo.attrs['data-index'] = index;
        //                 FiPo.attrs['data-number'] = index;
        //                 console.log(index, internal, FiPo.attrs);
        //                 component.children.splice(index, 0, FiPo);
        //                 internal++;
        //             });
        //         }
        //     }
        // });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsPostStream) {
            PostStream = _flarumComponentsPostStream.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('flagrow/ads/addAdUnderHeader', ['flarum/extend', 'flarum/components/HeaderPrimary'], function (_export, _context) {
    "use strict";

    var extend, HeaderPrimary;

    _export('default', function () {
        extend(HeaderPrimary.prototype, 'config', function (isInitialized, context) {

            if (isInitialized) {
                return;
            }

            if (document.getElementsByClassName('Flagrow-Ads-under-header').length) {
                return;
            }

            var advertisement = app.forum.attribute('flagrow.ads.under-header');

            if (advertisement) {

                var appElement = document.getElementsByClassName('App-content')[0];

                var adsElement = document.createElement('div');

                adsElement.className = 'Flagrow-Ads-under-header';
                adsElement.innerHTML = advertisement;

                appElement.parentNode.insertBefore(adsElement, appElement);
            }
        });
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }],
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
});;
"use strict";

System.register("flagrow/ads/components/AdPostType", ["flarum/components/EventPost", "flagrow/byobu/helpers/recipientsLabel"], function (_export, _context) {
    "use strict";

    var EventPost, recipientsLabel, AdPostType;
    return {
        setters: [function (_flarumComponentsEventPost) {
            EventPost = _flarumComponentsEventPost.default;
        }, function (_flagrowByobuHelpersRecipientsLabel) {
            recipientsLabel = _flagrowByobuHelpersRecipientsLabel.default;
        }],
        execute: function () {
            AdPostType = function (_EventPost) {
                babelHelpers.inherits(AdPostType, _EventPost);

                function AdPostType() {
                    babelHelpers.classCallCheck(this, AdPostType);
                    return babelHelpers.possibleConstructorReturn(this, (AdPostType.__proto__ || Object.getPrototypeOf(AdPostType)).apply(this, arguments));
                }

                babelHelpers.createClass(AdPostType, [{
                    key: "icon",
                    value: function icon() {
                        return 'audio-description';
                    }
                }, {
                    key: "content",
                    value: function content() {
                        return m('div', {
                            className: 'Flagrow-Ads-between-posts EventPost-info'
                        }, [m.trust(this.props.post.contentHtml())]);
                    }
                }]);
                return AdPostType;
            }(EventPost);

            _export("default", AdPostType);
        }
    };
});;
'use strict';

System.register('flagrow/ads/main', ['flarum/app', 'flagrow/ads/addAdUnderHeader', 'flagrow/ads/addAdUnderNavItems', 'flagrow/ads/addAdBetweenPosts', 'flagrow/ads/components/AdPostType'], function (_export, _context) {
    "use strict";

    var app, addAdUnderHeader, addAdUnderNavItems, addAdBetweenPosts, AdPostType;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flagrowAdsAddAdUnderHeader) {
            addAdUnderHeader = _flagrowAdsAddAdUnderHeader.default;
        }, function (_flagrowAdsAddAdUnderNavItems) {
            addAdUnderNavItems = _flagrowAdsAddAdUnderNavItems.default;
        }, function (_flagrowAdsAddAdBetweenPosts) {
            addAdBetweenPosts = _flagrowAdsAddAdBetweenPosts.default;
        }, function (_flagrowAdsComponentsAdPostType) {
            AdPostType = _flagrowAdsComponentsAdPostType.default;
        }],
        execute: function () {

            app.initializers.add('flagrow-ads', function (app) {
                app.postComponents.ad = AdPostType;

                addAdUnderHeader();
                addAdUnderNavItems();
                addAdBetweenPosts();
            });
        }
    };
});
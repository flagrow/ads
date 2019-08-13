import {extend} from 'flarum/extend';
import app from 'flarum/app';
import Page from 'flarum/components/Page';
import PostStream from 'flarum/components/PostStream';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
    extend(Page.prototype, 'config', function () {
        if ($(".adsbygoogle").length && window.adsbygoogle) {

            if (app.header_ad_active !== true) {
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                } catch {
                    return;
                }
                app.header_ad_active = true;
            }

            if (!app.ads_index) {
                app.ads_index = app.history.stack.length
            } else if (app.ads_index !== app.history.stack.length) {
                app.ads_index = app.history.stack.length;
                $(".adsbygoogle").each(function (i, e) {
                    $(e).html($(e).html())
                });
            }
        }
    });

    extend(PostStream.prototype, 'config', function () {
        if ($(".adsbygoogle").length && window.adsbygoogle) {
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch {
                return;
            }
        }
    });

    extend(IndexPage.prototype, 'config', function () {
        if ($(".adsbygoogle").length && window.adsbygoogle) {

            if (app.index_ad_active !== true && window.adsbygoogle.loaded !== true) {
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                } catch {
                    return;
                }
                app.index_ad_active = true;
            }

        }
    });
}

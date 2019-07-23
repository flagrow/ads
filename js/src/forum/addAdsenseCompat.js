import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Page from 'flarum/components/Page';
import PostStream from 'flarum/components/PostStream';
import IndexPage from 'flarum/components/IndexPage';

export default function() {
    extend(Page.prototype, 'config', function(component) {
        if ($(".adsbygoogle").length) {

            if (app.header_ad_active !== true) {
                (adsbygoogle = window.adsbygoogle || []).push({});
                app.header_ad_active = true;
            }

            if (!app.ads_index) {
                app.ads_index = app.history.stack.length
            } else if (app.ads_index !== app.history.stack.length) {
                app.ads_index = app.history.stack.length
                $(".adsbygoogle").each(function (i, e) {
                    $(e).html($(e).html())
                });
            }
        }
    });

    extend(PostStream.prototype, 'config', function() {
        if ($(".adsbygoogle").length) {

            if (app.cache[this.discussion.id() + 'ads_active'] !== true && app.previous !== undefined && window.adsbygoogle.loaded !== true) {
                (adsbygoogle = window.adsbygoogle || []).push({});
                app.cache[this.discussion.id() + 'ads_active'] = true;
            }

        }
    });

    extend(IndexPage.prototype, 'config', function() {
        if ($(".adsbygoogle").length) {

            if (app.index_ad_active !== true && window.adsbygoogle.loaded !== true) {
                (adsbygoogle = window.adsbygoogle || []).push({});
                app.index_ad_active = true;
            }

        }
    });
}

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Page from 'flarum/components/Page';

export default function() {
    extend(Page.prototype, 'config', function(component) {
            if ($(".adsbygoogle").length) {

                if (app.ads_active !== true) {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    app.ads_active = true;
                }

                if (!app.ads_index) {
                    app.ads_index = app.current.element.className
                    console.log('start');
                    console.log(app.ads_index);
                } else if (app.ads_index !== app.current.element.className) {
                    app.ads_index = app.history.stack.length
                    console.log('end');
                    console.log(app.ads_index);
                    $(".adsbygoogle").each(function (i, e) {
                        console.log('ran' + i);
                        $(e).html($(e).html())
                    });
                }
            }
    });
}

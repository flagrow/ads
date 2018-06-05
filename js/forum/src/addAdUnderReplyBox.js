import { extend } from 'flarum/extend';
import PostStream from 'flarum/components/PostStream';

export default function () {
    extend(PostStream.prototype, 'view', function(view) {

        const advertisement = app.forum.attribute('flagrow.ads.under-reply-box');

        if (advertisement) {
            view.children.push(
                m('div.Flagrow-Ads-under-reply-box', m.trust(advertisement))
            );
        }
    });
}

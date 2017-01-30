import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function() {
    extend(IndexPage.prototype, 'sidebarItems', function(items) {


        const advertisement = app.forum.attribute('flagrow.ads.under-nav-items');

        if (advertisement) {

            // set priority higher to move up
            items.add('flagrow-ad', m.trust(advertisement), -100);
        }
    });
}

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import addAdUnderHeader from 'flagrow/ads/addAdUnderHeader';
import addAdUnderNavItems from 'flagrow/ads/addAdUnderNavItems';
import HeaderPrimary from 'flarum/components/HeaderPrimary';

app.initializers.add('flagrow-ads', function(app) {
    extend(HeaderPrimary.prototype, 'items', items => {
        addAdUnderHeader();
    });
    addAdUnderNavItems();
});

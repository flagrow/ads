import app from 'flarum/app';
import addAdUnderHeader from 'flagrow/ads/addAdUnderHeader';
import addAdUnderNavItems from 'flagrow/ads/addAdUnderNavItems';
import addAdBetweenPosts from 'flagrow/ads/addAdBetweenPosts';
import AdPostType from 'flagrow/ads/components/AdPostType';

app.initializers.add('flagrow-ads', function(app) {
    app.postComponents.adPostType = AdPostType;

    addAdUnderHeader();
    addAdUnderNavItems();
    addAdBetweenPosts();
});

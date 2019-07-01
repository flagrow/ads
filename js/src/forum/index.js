import app from 'flarum/app';
import addAdUnderHeader from './addAdUnderHeader';
import addAdUnderNavItems from './addAdUnderNavItems';
import addAdBetweenPosts from './addAdBetweenPosts';
import addAdsenseCompat from './addAdsenseCompat';
import AdPostType from './components/AdPostType';

app.initializers.add('flagrow-ads', app => {
    app.postComponents.ad = AdPostType;

    addAdUnderHeader();
    addAdUnderNavItems();
    addAdBetweenPosts();
    addAdsenseCompat();
});

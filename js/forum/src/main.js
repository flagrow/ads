import addAdUnderHeader from 'flagrow/ads/addAdUnderHeader';

app.initializers.add('flagrow-ads', function(app) {
    addAdUnderHeader();
});

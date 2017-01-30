
export default function () {
    const advertisement = app.forum.attribute('flagrow.ads.under-header');

    if (advertisement) {

        var appElement = document.getElementsByClassName('App-content')[0];

        var adsElement = document.createElement('div');

        adsElement.className = 'Flagrow-Ads';
        adsElement.innerHTML = advertisement;

        appElement.parentNode.insertBefore(adsElement, appElement);
    }
}

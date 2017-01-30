
export default function () {
    var appElement = document.getElementsByClassName('App-content')[0];

    var adsElement = document.createElement('div');

    adsElement.className = 'Flagrow-Ads';

    appElement.parentNode.insertBefore(adsElement, appElement);
}

import {extend} from "flarum/extend";
import app from "flarum/app";
import addAdsPane from "flagrow/ads/addAdsPane";

app.initializers.add('flagrow-ads', app => {
    // add the admin pane
    addAdsPane();
});

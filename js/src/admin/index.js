import {extend} from "flarum/extend";
import app from "flarum/app";
import addAdsPane from "./addAdsPane";

app.initializers.add('flagrow-ads', () => {
    // add the admin pane
    addAdsPane();
});

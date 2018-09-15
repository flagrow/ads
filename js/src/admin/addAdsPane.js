import {extend} from "flarum/extend";
import AdminNav from "flarum/components/AdminNav";
import AdminLinkButton from "flarum/components/AdminLinkButton";
import AdsPage from './components/AdsPage';

export default function () {
    // create the route
    app.routes['flagrow-ads'] = {path: '/flagrow/ads', component: AdsPage.component()};

    // bind the route we created to the three dots settings button
    app.extensionSettings['flagrow-ads'] = () => m.route(app.route('flagrow-ads'));

    extend(AdminNav.prototype, 'items', items => {
        items.add('flagrow-ads', AdminLinkButton.component({
            href: app.route('flagrow-ads'),
            icon: 'fas fa-audio-description',
            children: 'Ads',
            description: app.translator.trans('flagrow-ads.admin.tab.description')
        }));
    });
}

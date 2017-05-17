import Component from "flarum/Component";
import Button from "flarum/components/Button";
import saveSettings from "flarum/utils/saveSettings";
import Alert from "flarum/components/Alert";

export default class UploadPage extends Component {

    init() {
        // get the saved settings from the database
        const settings = app.data.settings;

        this.values = {};

        // our package prefix (to be added to every field and checkbox in the setting table)
        this.settingsPrefix = 'flagrow.ads';

        this.positions = [
            'under-header',
            'between-posts',
            'under-nav-items'
        ];

        this.settings = [
    	    'start-from-post',
            'between-n-posts'
        ];

        // bind the values of the fields and checkboxes to the getter/setter functions
        this.positions.forEach(key =>
            this.values[key] = m.prop(settings[this.addPrefix(key)])
        );
        this.settings.forEach(key =>
            this.values[key] = m.prop(settings[this.addPrefix(key)])
        );
    }

    /**
     * Show the actual ImageUploadPage.
     *
     * @returns {*}
     */
    view() {
        return [
            m('div', {className: 'AdsPage'}, [
                m('form', {onsubmit: this.onsubmit.bind(this)},

                    m('fieldset', {className: 'AdsPage-settings'}, [
                        m('legend', {}, app.translator.trans('flagrow-ads.admin.settings.start-from-post')),
                        m('input', {
                            value: this.values['start-from-post']() || 1,
                            className: 'FormControl',
                            oninput: m.withAttr('value', this.values['start-from-post'])
                        })
                    ]),

                    m('fieldset', {className: 'AdsPage-settings'}, [
                        m('legend', {}, app.translator.trans('flagrow-ads.admin.settings.between-n-posts')),
                        m('input', {
                            value: this.values['between-n-posts']() || 5,
                            className: 'FormControl',
                            oninput: m.withAttr('value', this.values['between-n-posts'])
                        })
                    ]),

                    this.positions.map(position => {
                        return m('fieldset', {className: 'AdsPage-' + position}, [
                            m('legend', {}, app.translator.trans('flagrow-ads.admin.positions.' + position + '.title')),
                            m('textarea', {
                                value: this.values[position]() || null,
                                className: 'FormControl',
                                placeholder: app.translator.trans('flagrow-ads.admin.positions.' + position + '.placeholder'),
                                oninput: m.withAttr('value', this.values[position])
                            })
                        ])
                    }),

                    Button.component({
                        type: 'submit',
                        className: 'Button Button--primary',
                        children: app.translator.trans('flagrow-ads.admin.buttons.save'),
                        loading: this.loading,
                        disabled: !this.changed()
                    }),
                ),
            ])
        ];
    }

    /**
     * Checks if the values of the fields and checkboxes are different from
     * the ones stored in the database
     *
     * @returns boolean
     */
    changed() {
        var positionsChecked = this.positions.some(key => this.values[key]() !== app.data.settings[this.addPrefix(key)]);
        var settingsChecked = this.settings.some(key => this.values[key]() !== app.data.settings[this.addPrefix(key)]);
        return positionsChecked || settingsChecked;
    }

    /**
     * Saves the settings to the database and redraw the page
     *
     * @param e
     */
    onsubmit(e) {
        // prevent the usual form submit behaviour
        e.preventDefault();


        // if the page is already saving, do nothing
        if (this.loading) return;

        // prevents multiple savings
        this.loading = true;

        // remove previous success popup
        app.alerts.dismiss(this.successAlert);

        const settings = {};

        // gets all the values from the form
        this.positions.forEach(key => settings[this.addPrefix(key)] = this.values[key]());
        this.settings.forEach(key => settings[this.addPrefix(key)] = this.values[key]());

        // actually saves everything in the database
        saveSettings(settings)
            .then(() => {
                // on success, show popup
                app.alerts.show(this.successAlert = new Alert({
                    type: 'success',
                    children: app.translator.trans('core.admin.basics.saved_message')
                }));
            })
            .catch(() => {
            })
            .then(() => {
                // return to the initial state and redraw the page
                this.loading = false;
                m.redraw();
            });
    }

    addPrefix(key) {
        return this.settingsPrefix + '.' + key;
    }
}

import Component from "flarum/Component";
import Button from "flarum/components/Button";
import saveSettings from "flarum/utils/saveSettings";
import Alert from "flarum/components/Alert";
import Select from "flarum/components/Select";
import Switch from "flarum/components/Switch";

export default class UploadPage extends Component {

    init() {
    }

    /**
     * Show the actual ImageUploadPage.
     *
     * @returns {*}
     */
    view() {
        return [];
    }

    /**
     * Saves the settings to the database and redraw the page
     *
     * @param e
     */
    onsubmit(e) {
        // prevent the usual form submit behaviour
        e.preventDefault();


    }
}

import EventPost from "flarum/components/EventPost";
import recipientsLabel from "flagrow/byobu/helpers/recipientsLabel";

export default class AdPostType extends EventPost {

    icon() {
        return 'audio-description';
    }

    content() {
        return m('div', {
            className: 'Flagrow-Ads-between-posts EventPost-info'
        }, [
            m.trust(this.props.post.contentHtml())
        ]);
    }
}

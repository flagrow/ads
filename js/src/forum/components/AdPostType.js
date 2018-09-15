import EventPost from "flarum/components/EventPost";

export default class AdPostType extends EventPost {
    icon() {
        return 'fas fa-audio-description';
    }

    content() {
        return m('div', {
            className: 'Flagrow-Ads-between-posts EventPost-info'
        }, [
            m.trust(this.props.post.contentHtml())
        ]);
    }
}

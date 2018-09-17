import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostStream from 'flarum/components/PostStream';

export default function() {
    extend(PostStream.prototype, 'view', function(component) {
        const advertisement = app.forum.attribute('flagrow.ads.between-posts');

        if (advertisement && component.children.length) {
            const start = parseInt(app.forum.attribute('flagrow.ads.start-from-post') || 1);
            const between = parseInt(app.forum.attribute('flagrow.ads.between-n-posts') || 5);
            // We need to copy all comments first, otherwise there is no way to detect and jump the last comment
            const commentPosts = component.children.filter(post => post.attrs['data-type'] === 'comment');

            // Insert an inside every n comment
            commentPosts.forEach((post, i) => {
                if (i >= start && (i - start) % between === 0 && i < commentPosts.length - 1) {
                    post.children.push(
                        m('div.Flagrow-Ads-fake-poststream-item',
                            m('article.Post.EventPost',
                                m('div.Flagrow-Ads-between-posts.EventPost-info', m.trust(advertisement))
                            )
                        )
                    );
                }
            });
        }
    });
}

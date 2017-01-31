import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostStream from 'flarum/components/PostStream';

export default function() {
    extend(PostStream.prototype, 'posts', function(posts) {
        const advertisement = app.forum.attribute('flagrow.ads.between-posts');

        if (posts.length && advertisement) {
            const between = parseInt(app.forum.attribute('flagrow.ads.between-n-posts') || 5);

            var pointers = [],
                internal = 0;

            posts.forEach(post => {
                if (post && post.number() && post.contentType() == 'comment') {
                    internal++;

                    if (internal === between) {
                        pointers.push(post.number());
                        internal = 0;
                    }
                }
            });



            pointers.forEach(number => {
                posts.splice(number, 0, app.store.createRecord('posts', {attributes: {
                    contentHtml: advertisement,
                    time: new Date(),
                    contentType: 'ad',
                    canReply: false,
                    canFlag: false,
                    canLike: false,
                    canDelete: false,
                    canApprove: false,
                    canEdit: false,
                    isApproved: true,
                    number: number + 1
                }}));
            });

            posts.sort(function (a, b) {
                return a.number() - b.number();
            });
        }
    });
}

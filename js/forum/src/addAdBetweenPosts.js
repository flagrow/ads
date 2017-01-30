import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostStream from 'flarum/components/PostStream';

export default function() {
    extend(PostStream.prototype, 'posts', function(posts) {
        const advertisement = app.forum.attribute('flagrow.ads.between-posts');
        const between = parseInt(app.forum.attribute('flagrow.ads.between-n-posts') || 5);
        if (posts.length && advertisement) {

            var pointers = [];
            posts.forEach(post => {
                if (post.number() % between === 0) {
                    pointers.push(post.number());
                }
            });

            pointers.forEach(number => {
                posts.splice(number, 0, app.store.createRecord('posts', {attributes: {
                    contentHtml: advertisement,
                    time: new Date(),
                    contentType: 'adPostType',
                    canReply: false,
                    canFlag: false,
                    canLike: true,
                    canDelete: false,
                    canApprove: false,
                    canEdit: false,
                    isApproved: true,
                    number: number + 1
                }}));
            });

            posts.sort(function (a, b) {
                return a.number() > b.number();
            });

            console.log(posts);
        }
    });
}

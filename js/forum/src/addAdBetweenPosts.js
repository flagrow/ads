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

            posts.forEach((post, i) => {
                if (i > 0 && i < posts.length && post && post.number() && post.contentType() == 'comment') {
                    internal++;

                    if (internal === between) {
                        pointers.push(i);
                        internal = 0;
                    }
                }
            });


            var offset = 0;
            pointers.forEach(number => {

                var index = number + offset;

                posts.splice(index, 0, app.store.createRecord('posts', {attributes: {
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
                    number: index
                }}));

                offset++;
            });
        }
    });
    //
    // extend(PostStream.prototype, 'view', function(component) {
    //     const advertisement = app.forum.attribute('flagrow.ads.between-posts');
    //     const between = parseInt(app.forum.attribute('flagrow.ads.between-n-posts') || 5);
    //
    //     if (advertisement && component.children.length) {
    //         var pointers = [],
    //             internal = 0;
    //
    //         component.children.forEach((post, i) => {
    //             if (i > 0 && post.attrs['data-type'] == 'comment' && i != component.children.length) {
    //                 internal++;
    //
    //                 if (internal >= between) {
    //                     pointers.push(i);
    //                     internal = 0;
    //                 }
    //             }
    //         });
    //
    //         if (pointers.length) {
    //             // FiPo is the First Post.
    //             var FiPo = component.children[0];
    //             FiPo.children = [m('article', {className: 'Post EventPost AdPost'}, [
    //                 m('div', {className: 'Flagrow-Ads-between-posts EventPost-info'}, [
    //                     m.trust(advertisement)
    //                 ])
    //             ])];
    //             FiPo.attrs['data-type'] = 'ad';
    //             FiPo.attrs['data-id'] = null;
    //
    //             internal = 0;
    //
    //             pointers.forEach(index => {
    //                 // Increment the index to offset for already added ads.
    //                 var index = index + internal;
    //                 FiPo.attrs['data-index'] = index;
    //                 FiPo.attrs['data-number'] = index;
    //                 console.log(index, internal, FiPo.attrs);
    //                 component.children.splice(index, 0, FiPo);
    //                 internal++;
    //             });
    //         }
    //     }
    // });
}

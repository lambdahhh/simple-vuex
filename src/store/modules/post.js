export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            const posts = await response.json();
            ctx.commit('setPosts', posts);
        },
        addPost(ctx, newPost) {
            ctx.commit('addPost', newPost);
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        addPost(state, post) {
            state.posts.unshift(post);
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        countPosts(state) {
            return state.posts.length;
        }
    }
}
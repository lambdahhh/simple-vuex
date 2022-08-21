export default {
    actions: {},
    mutations: {},
    state: {
        posts: [
            {id: 1, title: 'PHP', body: 'fjjfjf jfjfj'},
            {id: 2, title: 'JS', body: 'GJGJGJG JGJGJG'},
        ]
    },
    getters: {
        allPosts(state) {
            return state.posts;
        }
    }
}
export default {
    actions:{
        async fetchPosts({commit}, limit = 7) {
            const response = await fetch( 'https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
            const posts = await response.json()

            commit('updatePosts', posts)
        }
    },
    mutations:{
        updatePosts(state, posts) {
            state.posts = posts;
        },
        addPost(state, newPost) {
            state.posts.unshift(newPost)
        }

    },
    state:{
        posts: []
    },
    getters:{
        allPosts(state) {
          return state.posts
        },
        postCounts(state, getters) {
            return getters.validPosts.length
        },
        validPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },

     }
}
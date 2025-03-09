import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        articles: [],
        comments: [],
    },
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles;
        },
        SET_COMMENTS(state, comments) {
            state.comments = comments;
        },
    },
    actions: {
        async fetchArticles({ commit }) {
            const response = await axios.get('http://localhost:3000/api/articles');
            commit('SET_ARTICLES', response.data);
        },
        async fetchCommentsByArticleId({ commit }, articleId) {
            const response = await axios.get(`http://localhost:3000/api/articles/${articleId}/comments`);
            commit('SET_COMMENTS', response.data);
        },
    },
    getters: {
        articles: (state) => state.articles,
        comments: (state) => state.comments,
    },
});
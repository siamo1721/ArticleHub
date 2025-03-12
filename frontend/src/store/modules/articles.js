import api from '@/services/api';

export default {
    namespaced: true,
    state: {
        articles: [],
        currentArticle: null,
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles;
        },
        setArticle(state, article) {
            state.currentArticle = article;
        },
        createArticle(state, article) {
            state.articles.push(article);
        },
        updateArticle(state, updatedArticle) {
            const index = state.articles.findIndex((a) => a.id === updatedArticle.id);
            if (index !== -1) {
                state.articles.splice(index, 1, updatedArticle);
            }
        },
        deleteArticle(state, id) {
            state.articles = state.articles.filter((a) => a.id !== id);
        },
    },
    actions: {
        async getArticles({ commit }) {
            const response = await api.getArticles();
            commit('setArticles', response.data);
        },
        async getArticle({ commit }, id) {
            const response = await api.getArticle(id);
            commit('setArticle', response.data);
        },
        async createArticle({ commit }, article) {
            const response = await api.createArticle(article);
            commit('createArticle', response.data);
        },
        async updateArticle({ commit }, { id, article }) {
            const response = await api.updateArticle(id, article);
            commit('updateArticle', response.data);
        },
        async deleteArticle({ commit }, id) {
            await api.deleteArticle(id);
            commit('deleteArticle', id);
        },
    },
};
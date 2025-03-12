import api from '@/services/api';

export default{
    state: {
        articles: [],
        currentArticle: null,
    },
    actions:{
        async getArticles({ commit }) {
            const response = await api.getArticles();
            commit('setArticles', response.data);
        },
        async getArticle({ commit }, id) {
            const response = await api.getArticle(id);
            commit('setArticle', response.data);
        },
        async createArticle({ commit }, article) {
            const response = await api.createArticle(article)
            commit('createArticle', response.data);
            },
        async updateArticle({ commit }, { id, article }){
            const response = await api.updateArticle(id, article)
             commit('updateArticle', { id, article });

        },
        async deleteArticle({ commit }, id) {
            const response = await api.deleteArticle(id)
            commit('deleteArticle', id);
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
            updateArticle(state, { id, article }) {
                state.articles.findIndex((a) => a.id === id);

            },
            deleteArticle(state, id) {
                state.articles = state.articles.filter((a) => a.id !== id);
            },
        },
    }
};
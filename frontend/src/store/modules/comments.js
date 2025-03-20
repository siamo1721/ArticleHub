import api from '@/services/api';

export default {
    namespaced: true,
    state: {
        comments: [],
        commentsByPeriod: [],
    },
    mutations: {
        setComments(state, comments) {
            state.comments = comments;
        },

        createComment(state, comment) {
            state.comments.push(comment);
        },

        updateComment(state, { id, commentId, comment }) {
            const index = state.comments.findIndex(
                (c) => c.id === commentId && c.ArticleId === id
            );
            if (index !== -1) {
                state.comments.splice(index, 1, comment);
            }
        },

        deleteComment(state, { id, commentId }) {
            state.comments = state.comments.filter(
                (c) => !(c.id === commentId && c.ArticleId === id)
            );
        },

        setCommentsByPeriod(state, commentsByPeriod) {
            state.commentsByPeriod = commentsByPeriod;
        },
    },
    actions: {
        async getComments({ commit }, articleId) {
            const response = await api.getComments(articleId);
            commit('setComments', response.data);
        },

        async createComment({ commit }, { id, comment }) {
            const response = await api.createComment(id, comment);
            commit('createComment', response.data);
        },

        async updateComment({ commit }, { id, commentId, comment }) {
            const response = await api.updateComment(id, commentId, comment);
            commit('updateComment', { id, commentId, comment: response.data });
        },

        async deleteComment({ commit }, { id, commentId }) {
            await api.deleteComment(id, commentId);
            commit('deleteComment', { id, commentId });
        },

        async getCommentsByPeriod({ commit }, { startDate, endDate }) {
            const response = await api.getCommentsByPeriod(startDate, endDate);
            commit('setCommentsByPeriod', response.data);
        },
    },
};
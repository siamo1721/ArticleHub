import api from '@/services/api';

export default{
    state: {
        comments: [],
        commentsByPeriod: [],
    },
  actions:{
     async getComments({commit}){
         const response = await api.getComments();
         commit('setComments', response.data);
     },
      async createComment({commit}, {id, comment}){
         const response = await api.createComment(id, comment);
         commit('createComment', response.data);
     },
      async updateComment({commit}, {id, commentId, comment}){
         const response = await api.updateComment(id, commentId, comment);
         commit('updateComment', response.data);
     },
      async deleteComment({commit}, {id, commentId}){
         const response = await api.deleteComment(id, commentId);
         commit('deleteComment', response.data);
     },
      async getCommentsByPeriod({commit}, {startDate, endDate}){
         const response = await api.getCommentsByPeriod(startDate, endDate);
         commit('setCommentsByPeriod', response.data);
     },
  },
    mutations: {
        setComments(state, comments){
            state.comments = comments;
        },
        createComment(state, comment){
            state.comments.push(comment);
        },
        updateComment(state, {id, commentId, comment}){
             state.comments.findIndex((c) => c.id === commentId && c.ArticleId === id);
             state.comments.splice(comment);

        },
        deleteComment(state, {id, commentId}){
            state.comments = state.comments.filter((c) => c.id!== commentId && c.ArticleId === id);
        },
        setCommentsByPeriod(state, commentsByPeriod){
            state.commentsByPeriod = commentsByPeriod;
        },
    },
};

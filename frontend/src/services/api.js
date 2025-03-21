import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
    'Content-Type': 'application/json',
    },
});
export default{
    getArticles: () => api.get('/articles'),
    getArticle: (id) => api.get(`/articles/${id}`),
    createArticle: (article) => api.post('/articles', article),
    updateArticle: (id, article) => api.patch(`/articles/${id}`, article),
    deleteArticle: (id) => api.delete(`/articles/${id}`),

    getComments: (id) => api.get(`/articles/${id}/comments`),
    createComment: (id, comment) => api.post(`/articles/${id}/comments`, { text: comment }),
    updateComment: (id, commentId, comment) => api.patch(`/articles/${id}/comments/${commentId}`, { text: comment }),
    deleteComment: (id, commentId) => api.delete(`/articles/${id}/comments/${commentId}`),
    getCommentsByPeriod: (startDate, endDate) => api.get(`/analytic/comments?startDate=${startDate}&endDate=${endDate}`),
}
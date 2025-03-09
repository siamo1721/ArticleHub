import { createRouter, createWebHistory } from 'vue-router';
import ArticleList from '@/views/ArticleList.vue';
import ArticleView from '@/views/ArticleView.vue';
import CommentAnalytics from '@/views/CommentAnalytics.vue';

const routes = [
    { path: '/', component: ArticleList },
    { path: '/article/:id', component: ArticleView },
    { path: '/analytics', component: CommentAnalytics },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
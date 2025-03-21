import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import CreateArticlePage from '@/pages/CreateArticlePage.vue';
import EditArticlePage from '@/pages/EditArticlePage.vue';
import CommentsPage from "@/pages/CommentsPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/create',
        component: CreateArticlePage,
    },
    {
        path: '/edit/:id',
        component: EditArticlePage,
    },
    {
        path: '/show/:id',
        component: CommentsPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
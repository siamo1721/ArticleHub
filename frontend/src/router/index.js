import ArticleList from "@/components/ArticleList.vue";
import ArticleForm from "@/components/ArticleForm.vue";
import {createRouter , createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: ArticleList
    },
    {
        path: '/create',
        component: ArticleForm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
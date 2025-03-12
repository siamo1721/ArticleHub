import { createStore } from 'vuex'
import articles from './modules/articles'
import comments from './modules/comments'

export default createStore({
    modules: {
        articles,
        comments,
    },
})
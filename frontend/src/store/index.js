import { createStore } from 'vuex'
import article from '/src/store/modules/articles'
import comments from '/src/store/modules/comments'

export default createStore({
    modules: {
        article,
        comments,
    },
})
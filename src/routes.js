import Vue from 'vue';
import Router from 'vue-router';
import BooksList from './components/BooksList.vue';
import MovieDetail from '@/components/BookDetail';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Books List',
            component: BooksList
        },
        {
            path: '/book/:id',
            name: 'Books Detail',
            component: MovieDetail
        }
    ]
})
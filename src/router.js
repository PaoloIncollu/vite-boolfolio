import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/projects',
            name: 'projects-index',
            component: ProjectsPage
        },
        {
            path: '/project/:slug',
            name: 'project-show',
            component: ProjectPage
        }
        ,
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };
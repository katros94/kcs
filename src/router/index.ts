import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ServicePage from '@/views/ServicePage.vue';
import PortfolioPage from '@/views/PorfolioPage.vue';

const routes = [
    {   path: '/', 
        name: 'Home', 
        component: HomePage,
        meta: { title: 'Hemsida - Professionell Webbutveckling' }
    },
    {   path: '/about', 
        name: 'About', 
        component: AboutPage,
        meta: { title: 'Om mig - Lite kort om mig själv' }
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicePage,
        meta: { title: 'Tjänst sida - Skräddarsydda E-handelslösningar, Innovativ UI/UX Design' }

    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioPage,
        meta: { title: 'Portfolio sida - Våra tidigare projekt' }

    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

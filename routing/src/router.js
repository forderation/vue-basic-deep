import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';

import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            path: '/teams',
            meta: {
                needsAuth: true
            },
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            alias: '/',
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                }, //teams/t1
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next){
                console.log(to);
                console.log(from);
                next();
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

router.beforeEach((to, _2, next) => {
    // guard any request
    if(to.meta && to.meta.needsAuth){
        next();
    }else{
        next();
    }
});

router.afterEach(() => {
    // log page or sending analytic data
    console.log('Global after each');
});

export default router;
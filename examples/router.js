import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'component',
        //使用vue的异步组件技术 , 可以实现按需加载 .
        component: resolve => require(['./play/home/index.vue'], resolve)
    },
    {
        path: '/docs',
        name: 'docs',
        component: resolve => require(['./play/docs/loading.md'], resolve)
    },
    {
        path: '/think',
        name: 'think',
        component: resolve => require(['./play/think/index.vue'], resolve)
    },
    {
        path: '/read',
        name: 'read',
        component: resolve => require(['./play/read/index.vue'], resolve)
    }
];

export default new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
});

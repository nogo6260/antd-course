export default {
    singular: true,
    //插件
    plugins: [
        ['umi-plugin-react',{
            antd:true //umi-plugin-react 中配置 antd 打开 antd 插件，antd 插件会帮你引入 antd 并实现按需编译。(Ant Design)
        }]
    ],
    //路由
    routes:[{
        path: '/',
        component: '../layout',
        routes:[
            {
                path: '/',
                component: 'HelloWorld',
            },
            {
                path:'/helloworld',
                component:'HelloWorld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
        ]
    }]
};
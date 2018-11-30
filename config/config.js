export default {
    history : 'browser',
    singular: true,
    //插件
    plugins: [
        ['umi-plugin-react',{
            antd:true, //umi-plugin-react 中配置 antd 打开 antd 插件，antd 插件会帮你引入 antd 并实现按需编译。(Ant Design)
            dva:true,
            locale: {
                enable: true,
            },
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
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
            { path: 'puzzlecards', component: './puzzlecards' },
        ],
    }],
    proxy: {
        '/dev': {
          target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
          changeOrigin: true,
        },
    },
};
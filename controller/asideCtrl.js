module.exports = {
    menu(req,res){
        data = {
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon:'s-home',
                url: 'Home/Home'
            },
            {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon:'video-play',
                url: 'MallManage/MallManage'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon:'user',
                url: 'UserManage/userManage'
            },
            {
                label: '其他',
                icon: 'location',
                children: {
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon:'setting',
                        url: 'other/Pageone'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon:'setting',
                        url: 'other/Pageotwo'
                    }
                }
            }
        }
        res.send(data)
    }
}
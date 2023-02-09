const token = require('../api/token');
module.exports = {
    menu(req,res){
        let tokenResult = token.checkToken(req.headers.token)
        data = [
            {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon:'s-goods',
                component: 'MallManageView'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon:'user',
                component: 'UserManageView'
            },
            {
                name: 'other',
                label: '其他',
                icon: 'more',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon:'setting',
                        component: 'PageoneView'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon:'setting',
                        component: 'PagetwoView'
                    }
                ]
            }
        ]
        res.send({data, msg:'成功'})
    }
}
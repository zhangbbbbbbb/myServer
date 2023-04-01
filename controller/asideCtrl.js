const data = {
    vip: [
        {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon:'user',
            component: 'UserView'
        },
        {
            name: 'vedio',
            label: '视频',
            icon: 'video-play',
            children: [
                {
                path: '/vedioManage',
                name: 'vedioManage',
                label: '管理',
                icon:'setting',
                component: {
                    view: 'manage',
                    type: 'vedio'
                }
                },
                {
                path: '/vedioCharts',
                name: 'vedioCharts',
                label: '数据',
                icon:'pie-chart',
                component: {
                    view: 'charts',
                    type: 'vedio'
                }
                }
            ]
        },
        {
            name: 'fans',
            label: '粉丝',
            icon: 'view',
            children: [
                {
                path: '/fansManage',
                name: 'fansManage',
                label: '管理',
                icon:'setting',
                component: {
                    view: 'manage',
                    type: 'fans'
                }
                },
                {
                path: '/fansCharts',
                name: 'fansCharts',
                label: '数据',
                icon:'pie-chart',
                component: {
                    view: 'charts',
                    type: 'fans'
                }
                }
            ]
        }
    ],
    normal: [
        {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon:'user',
            component: 'UserView'
        },
        {
            name: 'vedio',
            label: '视频',
            icon: 'video-play',
            children: [
                {
                    path: '/vedioManage',
                    name: 'vedioManage',
                    label: '管理',
                    icon:'setting',
                    component: {
                        view: 'manage',
                        type: 'vedio'
                    }
                },
                {
                    path: '/vedioCharts',
                    name: 'vedioCharts',
                    label: '数据',
                    icon:'pie-chart',
                    component: {
                        view: 'charts',
                        type: 'vedio'
                    },
                    disabled: true
                }
            ]
        },
        {
            name: 'fans',
            label: '粉丝',
            icon: 'view',
            children: [
                {
                    path: '/fansManage',
                    name: 'fansManage',
                    label: '管理',
                    icon:'setting',
                    component: {
                        view: 'manage',
                        type: 'fans'
                    }
                },
                {
                    path: '/fansCharts',
                    name: 'fansCharts',
                    label: '数据',
                    icon:'pie-chart',
                    component: {
                        view: 'charts',
                        type: 'fans'
                    },
                    disabled: true
                }
            ]
        }
    ],
    visitor: []
}

module.exports = {
    getMenu(req, res){        
        res.send({data: data[req.tokenResult.status], msg:'成功'})
    }
}
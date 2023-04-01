const data = {
    fansData: [
        {
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            sex: "男",
            tags: ['focus'],
            likes: 100,
            comments: 10,
            retransmission: 9,
            status: ['禁言']
        }, 
        {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            sex: "男",
            tags: ['specialFocus'],
            likes: 110,
            comments: 11,
            retransmission: 8,
            status: []
        }, 
        {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            sex: "女",
            tags: ['specialFocus'],
            likes: 100,
            comments: 11,
            retransmission: 7,
            status: []
        }, 
        {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            sex: "女",
            tags: ['specialFocus'],
            likes: 140,
            comments: 9,
            retransmission: 6,
            status: []
        },
        {
            id: 5,
            date: '2016-05-02',
            name: '王小虎',
            sex: "女",
            tags: ['focus'],
            likes: 120,
            comments: 18,
            retransmission: 7,
            status: []
        }
    ],
    vedioData: [
        {
            id: 6,
            date: '2016-05-02 10:00:00',
            label: 'asdfghjkl',
            tags: ['movie'],
            likes: 1010,
            comments: 50,
            retransmission: 19,
            status: []
        }, {
            id: 7,
            date: '2016-05-04 10:00:00',
            label: 'asdfghjkl',
            tags: ['life', 'skill'],
            likes: 3030,
            comments: 20,
            retransmission: 9,
            status: []
        }, {
            id: 8,
            date: '2016-05-01 10:00:00',
            label: 'asdfghjkl',
            tags: ['technology', 'science', 'life'],
            likes: 1010,
            comments: 100,
            retransmission: 29,
            status: []
        }, {
            id: 9,
            date: '2016-05-02 10:00:00',
            label: 'asdfghjkl',
            tags: ['movie'],
            likes: 4040,
            comments: 70,
            retransmission: 19,
            status: []
        }, {
            id: 10,
            date: '2016-05-04 10:00:00',
            label: 'asdfghjkl',
            tags: ['life', 'skill'],
            likes: 5050,
            comments: 70,
            retransmission: 19,
            status: []
        }
    ],
    fansTags: [
        {
            value: 'focus',
            text: '关注'
        },
        {
            value: 'specialFocus',
            text: '特别关注'
        }
    ],
    vedioTags: [
        {
            value: 'movie',
            text: '影视'
        },
        {
            value: 'life',
            text: '生活'
        },
        {
            value: 'technology',
            text: '技术'
        },
        {
            value: 'skill',
            text: '才艺'
        },
        {
            value: 'science',
            text: '科学'
        }
    ]
}

// 没有数据库，判断id为1返回数据，其余返回空
function getData(obj) {
    console.log(obj)
    if(obj.userId == '1') {
        return data[`${obj.type}Data`]
    }
    return []
}

module.exports = {
    getVedio(req,res){
        let option = req.query
        option.userId = req.tokenResult.userId
        option.type = 'vedio'
        
        res.send({data:getData(option), msg:'成功'})
    },
    getFans(req,res){
        let option = req.query
        option.userId = req.tokenResult.userId
        option.type = 'fans'
        
        res.send({data:getData(option), msg:'成功'})
    },
    getTags(req,res) {
        if(req.tokenResult.userId = '1') {
            res.send({data:data[`${req.params.type}Tags`], msg:'成功'})
        }
        res.send({msg:'成功'})
    }
}
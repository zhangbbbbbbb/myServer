const prot = 80; // 端口号
const hostName = '127.0.0.1'; //代理服务器主机名
const express = require('express');
const morgan = require('morgan'); //日志模块
const myserver = express(); //以express构建服务器
const indexRouter = require('./routers/indexRouter');//路由层文件  用做判断处理请求对象然后分发给controller层
const asideRouter = require('./routers/asideRouter');

myserver.use(express.json()); //将其解析为json格式
myserver.use(express.urlencoded({extended:false})); //挂载配置post解析bodym模块
myserver.use(indexRouter);  //挂载路由
myserver.use(asideRouter);
myserver.use(morgan('dev')); //挂载日志模块
myserver.use(express.static(__dirname+'/src')); //查找src目录

myserver.listen(prot,hostName,()=>{
   console.log(`server running.... at ${hostName}:${prot}`)
})

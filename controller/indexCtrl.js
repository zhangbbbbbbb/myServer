module.exports = {
    login(req,res){
        let username = req.body.username;
        let pwd = req.body.pwd;
        let data = {
            state:200,
            success:true,
            message:'登陆成功'
        }
    
        if (username == 'admin'&& pwd == 'admin'){
            res.send(data)
        }else {
            data.state = -1;
            data.success = false;
            data.message='登陆失败';
            res.send(data)
        }
    }
}

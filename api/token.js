const jwt = require('jsonwebtoken');
let secret = 'test';  //签名
module.exports = {
  checkToken(token) {
    let tokenRes = {
      userId: token.slice(0, 1)
    }
    if(token[token.length-1] == '1') {
      tokenRes.status = 'vip'
    }else if(token[token.length-1] == '2') {
      tokenRes.status = 'normal'
    }else{
      tokenRes.status = 'visitor'
    }
    return tokenRes
  },
  //生成token
  generateToken(data) {
    let token = jwt.sign(data,secret);
    return token;
  },
  //解密token
  getDecryptToken(token){
    let data = jwt.verify(token,secret);
    return data;
  }
}

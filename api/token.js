const jwt = require('jsonwebtoken');
let secret = 'test';  //签名
module.exports = {
  checkToken(token) {
    return true
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

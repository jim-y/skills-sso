import * as crypto from 'crypto';

const tokenPwd = crypto.randomBytes(12).toString('hex');
const tokenKey = crypto.scryptSync(tokenPwd, 'salt', 24);
const tokenIv = new Buffer(crypto.randomBytes(16)).toString('hex').slice(0, 16);

export default {
    user: [{
        id: 0,
        email: 'john.doe@myapp.com',
        password: 'Password1!'
    }, {
        id: 1,
        email: 'a@b.com',
        password: 'x'
    }],

    token: {
        algorithm: 'aes-192-cbc',
        key: tokenKey,
        iv: tokenIv
    }
}

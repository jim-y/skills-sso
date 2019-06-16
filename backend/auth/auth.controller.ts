import * as express from 'express';
import tokenService from '../token/token.service';

// Mock DB
import db from '../database';

export class AuthController {

    login(req, res) {
        console.log('In login');
        
        const email = req.body.email;
        const password = req.body.password;
        const user = db.user.find(user => user.email === email && user.password === password);
        
        if (user == null) {
            res.status(401).send('Unauthorized');
            return;
        }

        const token = tokenService.createToken(user);
        res.redirect(`/?access_token=${token}`);
    }

}

export default new AuthController();
import * as crypto from 'crypto';
import db from '../database';

const { algorithm, key, iv } = db.token;

export class TokenService {
    createToken(payload: any) {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    decryptToken(token: string) {
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(token, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

export default new TokenService();
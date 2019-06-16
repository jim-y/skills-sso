import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import authController from './auth.controller';

const auth = express();

auth.use(bodyParser.urlencoded({ extended: false }))
auth.use(bodyParser.json())
auth.use(express.static(path.resolve(__dirname, '.')));

auth.post('/', authController.login.bind(authController));

export default auth;
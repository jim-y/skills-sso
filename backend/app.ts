import * as express from 'express';
import * as path from 'path';
import * as bearerToken from 'express-bearer-token';
import authApp from './auth/auth';

const app = express();
const appFiles = path.resolve(__dirname, '../../frontend/dist');

app.use(bearerToken());
app.use('/login', authApp);
app.use('*', (req, res, next) => {
    if (req.token == null) {
        res.redirect('/login');
        return;
    }
    next();
});
app.use(express.static(appFiles));

app.listen(8000);
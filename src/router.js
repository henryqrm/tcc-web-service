import envConfig from './config/environment';
import product from './api/product';
import user from './api/user';
import local from './api/local';
import command from './api/command';

export default (app) => {
    app.use('/api/product', product);
    app.use('/api/user', user);
    app.use('/api/local', local);
    app.use('/api/command', command);

    // All other routes should redirect to the index.html
    app.get('/*', (req, res) => {
        res.sendFile(`${envConfig.root}/src/public/index.html`);
    });
};
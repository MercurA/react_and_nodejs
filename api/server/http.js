const express = require('express');
const morgan = require('morgan');

exports = module.exports = (errorHandler, handleUser, config, auth, handleComment) => {
    let PORT = config.http.port;
    let HOST = config.http.host;

    let api = express();

    api.use(morgan('tiny'))

    api.use(express.urlencoded({ extended: true }));
    api.use(express.json());

    api.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    api.post('/login', handleUser.findUser);
    api.get('/get', auth.validate, handleUser.getUser);
    console.log()
    // api.post('/addComment', auth.validate, handleComment.saveComment);
    api.post('/signup', handleUser.saveUser);


    api.use(errorHandler.getError);

    return {
        start() {
            api.listen(PORT, () => console.log(`Server is up on ${HOST}:${PORT}`));
        }
    }

};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = [
    'middleware/errorHandler',
    'handler/user/handleUser',
    'config/settings',
    'middleware/tokenValidation',
    'handler/comments/handleComments',
];
const express = require('express');
const morgan = require('morgan');
exports = module.exports = (errorHandler, handleUser, config, auth, handleComment, handlerBook) => {
	let PORT = config.http.port;
	let HOST = config.http.host;

	let api = express();

	api.use(morgan('tiny'));

	api.use(express.urlencoded({ extended: true }));
	api.use(express.json());

	api.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});

	// User endpoints
	api.post('/login', handleUser.findUser);
	api.get('/get', auth.validate, handleUser.getUser);
	api.post('/signup', handleUser.saveUser);

	//Comments endpoints
	api.post('/addComment', auth.validate, handleComment.saveComment);
	api.delete('/removeComment/:id', auth.validate, handleComment.removeComment);
	api.get('/findCommentByUser', auth.validate, handleComment.findByUser);

	// Books endpoints
	api.post('/admin/addBook', auth.validate, handlerBook.addBook);
	api.get('/admin/books', auth.validate, handlerBook.getBooks);
	api.delete('/admin/removeBook/:id', auth.validate, handlerBook.removeBook);


	api.use(errorHandler.getError);

	return {
		start() {
			// eslint-disable-next-line no-console
			api.listen(PORT, () => console.log(`Server is up on ${HOST}:${PORT}`));
		}
	};

};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = [
	'middleware/errorHandler',
	'handler/user/handleUser',
	'config/settings',
	'middleware/tokenValidation',
	'handler/comments/handleComments',
	'handler/books/handlerBook'
];
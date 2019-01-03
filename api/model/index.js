const mongoose = require('mongoose');

exports = module.exports = (config, userSchema, commentSchema, booksSchema) => {
	mongoose.connect(config.db.path, { useNewUrlParser: true });
	mongoose.Promise = global.Promise;

	let db = mongoose.connection;
	// eslint-disable-next-line no-console
	db.on('error', console.log.bind(console, 'Mongodb is Down'))
	// eslint-disable-next-line no-console
		.once('open', console.log.bind(console, 'MongoDB is connected'));


	return {
		userModel: mongoose.model('User', userSchema),
		commentModel: mongoose.model('Comment', commentSchema),
		booksModel: mongoose.model('Book', booksSchema)
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['config/settings', 'config/schemas/userSchema', 'config/schemas/commentSchema', 'config/schemas/booksSchema'];
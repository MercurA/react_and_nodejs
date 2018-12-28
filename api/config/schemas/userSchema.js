const mongoose = require('mongoose');

exports = module.exports = () => {
	return new mongoose.Schema({
		userName: String,
		lastName: String,
		email: String,
		admin: Boolean
	});
};

exports['@singleton'] = true;
exports['@async'] = false;

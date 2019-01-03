const mongoose = require('mongoose');

exports = module.exports = () => {
	return new mongoose.Schema({
		ISBN: String,
		Title: String,
		Author: String,
		Description: String,
		NrOfCopies: Number,
		NrOfCopiesAvailable: Number,
		Publisher: String,
	});
};

exports['@singleton'] = true;
exports['@async'] = false;
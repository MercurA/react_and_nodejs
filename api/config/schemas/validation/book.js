const Joi = require('joi');

exports = module.exports = () => {
	return {
		ISBN: Joi.string(),
		Title: Joi.string(),
		Author: Joi.string(),
		Description: Joi.string(),
		NrOfCopies: Joi.number(),
		NrOfCopiesAvailable: Joi.number(),
		Publisher: Joi.string(),
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
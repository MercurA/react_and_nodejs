const Joi = require('joi');

exports = module.exports = () => {

	return {
		comment: Joi.object().keys({
			user: Joi.string().required(),
			comment: Joi.string().required(),
			timeStamp: Joi.string().required(),
			tag: Joi.string()
		})

	};
};

exports['@singleton'] = true;
exports['@async'] = false;
const Joi = require('joi');

exports = module.exports = () => {

	return {
		user: Joi.object().keys({
			userName: Joi.string().required(),
			lastName: Joi.string().required(),
			email: Joi.string().email().required(),
			admin: Joi.boolean().required(),
		}),
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
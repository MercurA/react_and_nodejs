const jwt = require('jsonwebtoken');

exports = module.exports = () => {

	return {
		validate(req, res, next) {
			let token = req.headers.authorization.slice(7);
			let email = req.headers.email;
			try {
				jwt.verify(token, email);
				next();
			} catch (error) {
				next(error);
			}
		}
	};

};

exports['@singleton'] = true;
exports['@async'] = false;

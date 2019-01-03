const jwt = require('jsonwebtoken');

exports = module.exports = () => {
	return {
		async createToken(user) {
			let token = jwt.sign(
				{
					id: user._id,
				},
				user.email,
				{
					expiresIn: 60 * 60,
				}
			);
			return token;
		}
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
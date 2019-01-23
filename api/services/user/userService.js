const Joi = require('joi');

exports = module.exports = (userModel, schemaValidation, auth,response) => {

	return {

		async findUser(user) {
			let userFound = await userModel.findUserByEmail(user);
			if(userFound){
				let token = await auth.createToken(userFound);
				
				return response.onSuccess({
					admin: userFound.admin,
					firstName: userFound.userName,
					lastName: userFound.lastName,
					email: userFound.email,
					token: token
				});
			} else {
				return response.onFailure('No user please signup');
			}

		},

		async insertUser(body) {
			const validateUserSchema = Joi.validate(body, schemaValidation.user);

			if (validateUserSchema.error === null) {
				return await userModel.insertUser(body);
			} else {
				return await 'Object invalid.';
			}
		},

		async getUser() {
			let user;

			try {
				user = await userModel.findUser();

				return user;
			} catch (error) {
				return error;
			}
		}
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/user/userModel', 'config/schemas/validation/user', 'lib/authorization','lib/responseTypes'];
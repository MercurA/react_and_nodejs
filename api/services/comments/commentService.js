const Joi = require('joi');

exports = module.exports = (commentModel, schemaValidation, userModel) => {

	return {

		async saveComment(body) {
			if (body !== undefined) {
				const validateCommentSchema = Joi.validate(body, schemaValidation.comment);

				if (validateCommentSchema.error === null) {
					return await commentModel.insertComment(body);
				} else {
					return await 'Object invalid.';
				}
			} else {
				return 'No Comment posted';
			}
		},

		async removeComment(id) {
			if (id) {
				return await commentModel.removeComment(id);
			} else {
				return 'Nothing Removed';
			}
		},

		async findByUser(user) {
			let email = await userModel.findUserByEmail(user);
			if (email) {
				return await commentModel.findByUser(email);
			} else {
				return 'User couldn\'t be found';
			}
		}
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/comments/commentModel', 'config/schemas/validation/comment', 'model/user/userModel'];
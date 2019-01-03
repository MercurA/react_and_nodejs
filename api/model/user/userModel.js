exports = module.exports = (db) => {

	return {

		async insertUser(userData) {
			let user = new db.userModel(userData);

			return await user.save();
		},

		async findUserByEmail(user) {
			let findUser = await db.userModel.find({ email: user.email });

			return findUser[0];
		},

		async findUser() {
			return await db.userModel.find({});
		}
	};

};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/index'];
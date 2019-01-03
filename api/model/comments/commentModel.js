exports = module.exports = (db) => {

	return {

		async insertComment(comment) {

			let comm = new db.commentModel(comment);

			return await comm.save();
		},

		async findComment() {
			return await db.commentModel.find({});
		},

		async removeComment(id) {
			return await db.commentModel.findByIdAndRemove({ _id: id });
		},
		async findByUser() {
			return await db.commentModel.find({});
		}

	};

};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/index'];
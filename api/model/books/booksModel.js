exports = module.exports = (db) => {
	return {
		async insertBook(book) {
			let b = new db.booksModel(book);

			return await b.save();
		},

		async getAllBooks() {
			return await db.booksModel.find({});
		},

		async removeOneBookById(id) {
			return await db.booksModel.findByIdAndRemove({ _id: id });
		}
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/index'];
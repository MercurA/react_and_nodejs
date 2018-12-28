exports = module.exports = (response, bookService) => {
	return {
		async addBook(req, res, next) {
			const book = req.body.book;
			let  newBook;

			try {
				newBook = await bookService.addBook(book);

				res.send(response.onSuccess(newBook));
			} catch (error) {
				next(response.onFailure(error));
			}
		},

		async getBooks(req, res, next) {
			let books;

			try {
				books = await bookService.getAllBooks();

				res.send(response.onSuccess(books));
			} catch (error) {
				next(response.onFailure(error));
			}
		},

		async removeBook(req, res, next) {
			let book;
			const bookId = req.params.id;

			try {
				book = await bookService.removeBook(bookId);

				res.send(response.onSuccess(book));
			} catch (error) {
				next(response.onFailure(error));
			}
		}
	};
};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/responseTypes', 'services/books/bookService'];
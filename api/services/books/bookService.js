exports = module.exports = (booksModel) => {
    
    return {
        async addBook(book) {
            if(book !== void 0 || book !== null) {
                return await booksModel.insertBook(book);
            } else {
                return await new Error('Invalid format');
            }
        },
        async getAllBooks() {
            const books = await booksModel.getAllBooks();

            if(books !== void 0 || books !== null) {
                return books;
            } else {
                return await new Error('No book exists');
            }
        },

        async removeBook(id) {
            if(typeof id === 'string') {
                return await booksModel.removeOneBookById(id);
            } else {
                return await new Error('id doesn\'t match');
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/books/booksModel'];
exports = module.exports = (response, commService) => {

	return {
		async saveComment(req, res, next) {
			let comm;
			const body = req.body.comments;

			try {
				comm = await commService.saveComment(body);

				return res.send(response.onSuccess(comm));
			} catch (error) {
				next(response.onFailure(error));
			}
		},
		async removeComment(req, res, next) {
			let param = req.params.id;
			let commRemove;

			try {
				commRemove = await commService.removeComment(param);

				return res.send(response.onSuccess(commRemove));
			} catch (error) {
				next(response.onFailure(error));
			}
		},
		async findByUser(req, res, next) {
			let user = req.headers.email;
			let comm;

			try {
				comm = await commService.findByUser(user);

				return res.send(response.onSuccess(comm));
			} catch (error) {
				next(response.onFailure(error));
			}
		}
	};

};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/responseTypes', 'services/comments/commentService'];
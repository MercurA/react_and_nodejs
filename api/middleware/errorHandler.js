exports = module.exports = (response) => {
	return {
		getError(err, req, res, next) {
			if (!err.statusCode) res.status(500).send(response.onFailure(err.message));
			res.status(err.statusCode).send(response.onFailure(err.message));
		}
	};

};

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/responseTypes'];
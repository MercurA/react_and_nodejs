exports = module.exports = (response,comments) => {

    return {
        async saveComment(req, res, next){
            const comm;
            const body = req.body.comments;
            try {
                comm = await comments.saveComment(body);

                return res.send(response.onSuccess(comm));
            } catch (error) {
                next(error);
            }
        }
    }

}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] ['lib/responseTypes','services/comments/commentService'];
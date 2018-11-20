exports = module.exports = (response) => {
    return {
        getError(err,req,res,next){
            if(!err.statusCode) err.statusCode = 500;
            res.status(err.statusCode).send(response.onFailure(err.message));
        }
    }

}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/responseTypes']

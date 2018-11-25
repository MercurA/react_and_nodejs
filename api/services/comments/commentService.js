const Joi = require('joi');

exports = module.exports = (commentModel,schemaValidation) => {

    return {

        async saveComment(body){
            const validateCommentSchema = Joi.validate(body, schemaValidation.comment);

            if(validateCommentSchema.error === null){
                return await commentModel.insertComment(body)
            } else {
                return await 'Object invalid.';
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/comments/commentModel','config/schemas/validation/user'];
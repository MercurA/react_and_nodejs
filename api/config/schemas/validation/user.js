const Joi = require('joi');

exports = module.exports = () => {
    
    return {
        user: Joi.object().keys({
           userName: Joi.string(),
           lastName: Joi.string(),
           email: Joi.string().email(),
           admin: Joi.boolean()
       }),
       comment: Joi.object().keys({
           user: Joi.string(),
           comment: Joi.string(),
           timeStamp: Joi.string(),
           tag: Joi.string()
       })
        
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
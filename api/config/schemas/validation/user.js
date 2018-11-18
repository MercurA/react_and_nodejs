const Joi = require('joi');

exports = module.exports = () => {
    
    return {
        user: Joi.object().keys({
           userName: Joi.string(),
           lastName: Joi.string(),
           email: Joi.string().email(),
           admin: Joi.boolean()
       })
        
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
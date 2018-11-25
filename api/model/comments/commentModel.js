const mongoose = require('mongoose');


exports = module.exports = (db) =>{

    return {
        
        async insertComment(comment) {
            let user = new db.commentModel(comment);

            return await user.save();
        },

        async findComment(){
            const comment;
            comment = await db.commentModel.find({}); 
            
            return comment; 
        }
    }

}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['model/index'];
const mongoose = require('mongoose');

exports = module.exports = (config,userSchema) => {
    mongoose.connect(config.db.path,{useNewUrlParser: true});
    mongoose.Promise = global.Promise;

    let db = mongoose.connection;

    db.on('error',console.log.bind(console,'Mongodb is Down'))
        .once('open',console.log.bind(console,'MongoDB is connected'));

    
    return {
        userModel: mongoose.model('User', userSchema)
    }


}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['config/settings','config/schemas/userSchema'];
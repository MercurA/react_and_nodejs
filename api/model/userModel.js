const mongoose = require('mongoose');


exports = module.exports = (config,userSchema)=>{
    mongoose.connect(config.db.path,{useNewUrlParser: true});
    mongoose.Promise = global.Promise;

    let db = mongoose.connection;

    db.on('error',console.log.bind(console,'Mongodb is Down'))
        .once('open',console.log.bind(console,'MongoDB is connected'));

    let UserModel = mongoose.model('User', userSchema);

    return {

        async findUserByEmail(user){
            let findUser = await UserModel.find({email: user.email});

            return findUser[0];
        },

        async insertUser(userData) {
            let user = new UserModel(userData);

            return await user.save();
        },

        async findUser(){
            return await UserModel.find({});
        }
    }

}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['config/settings','config/schemas/userSchema'];
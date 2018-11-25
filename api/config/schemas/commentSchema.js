const mongoose = require('mongoose');

exports = module.exports = () => {
    return new mongoose.Schema({
        user: String,
        comment: String,
        timeStamp: String,
        tag: String
    });
}

exports['@singleton'] = true;
exports['@async'] = false;
exports = module.exports = ()=>{

    return {
        onSuccess(data){
            return {
                success: true,
                data: data
            }
        },

        onFailure(message){
            return {
                success: false,
                message: message
            }
        }

    }
}

exports['@singleton'] = true;
exports['@async'] = false;
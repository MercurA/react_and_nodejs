exports = module.exports = (userService,response) => {

    return {

        async findUser(req,res,next){
            const user = {
                email: req.body.email,
                password: req.body.password
            }
            let userFound;

            try {
                userFound = await userService.findUser(user);

                return res.send(response.onSuccess(userFound));
            } catch (error) {
                next(error);
            }

        },

        async saveUser(req, res, next) {
            let newUser;
            let body = req.body;
            try {
                newUser = await userService.insertUser(body);

                return res.send(newUser)
            } catch (error) {
                next(error);
            }
        },

        async getUser(req, res, next) {
            let user;

            try {
                user = await userService.getUser();

                return res.send(response.onSuccess(user))
            } catch (error) {
                next(error);
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['services/user/userService','lib/responseTypes'];
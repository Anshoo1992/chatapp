const userModel = require('../model/loginSchema').LoginUser;
const nodemailer = require('nodemailer');
const resHandler = require('../controllers/responseHandlingCtrl');
class UserCtrl {
    constructor() { }

    /**
     * @name createUser
     * @param {*} req 
     * @param {*} res 
     * @description function to create new user in db (Singup)
     */
    async createUser(req, res) {
        let userData = req.body.data;
        try {
            if (!userData) resHandler.throwError(400, 'incorrect request')()
            const result = await userModel
                .create(userData)
                .then(
                    resHandler.throwIf(r => !r, 400, 'not found', 'User not found'),
                    resHandler.throwError(500, 'sequelize error')
                )
            sendSuccess(result, 'successfull')
        } catch (error) {
            resHandler.sendError(res)(error);
        }
    }

    async loginUser(req, res) {
        let userData = { email: req.body.email, password: req.body.password };
        try {
            if (!userData) resHandler.throwError(400, 'incorrect request')()
            const result = await userModel
                .findOne(userData)
                .then(
                    resHandler.throwIf(r => !r, 400, 'not found', 'User not found'),
                    resHandler.throwError(500, 'sequelize error')
                )
            sendSuccess(result, 'successfull');
        } catch (error) {
            resHandler.sendError(res)(error);
        }
    }

    /**
     * @name getParams
     * @description function to get params 
     * @param {*} queryparams 
     */
    getParams(queryparams) {
        let result;
        switch (queryparams.param) {
            case 'id':
                result = { '_id': queryparams.value };
                break;
            case 'email':
                result = { 'email': queryparams.value }
                break;
            case 'phone':
                result = { 'phone': queryparams.value };
                break;
            default:
                break;

        }
        return result;
    }
    /**
        * @name getUserDetails
        * @description function to get user details 
        * @param {*} req 
        * @param {*} res 
        */
    async getUserDetails(req, res) {
        let userData = this.getParams(JSON.parse(req.query.updates));
        try {
            if (!userData) resHandler.throwError(400, 'incorrect request')()
            const result = await userModel
                .find(userData)
                .then(
                    resHandler.throwIf(r => !r, 400, 'not found', 'User not found'),
                    resHandler.throwError(500, 'sequelize error')
                )
            sendSuccess(result, 'successfull');
        } catch (error) {
            resHandler.sendError(res)(error);
        }

    }

    async updateUserDetails(req, res) {
        let userId = req.body.id;
        let userData = req.body.updateData;
        try {
            if (!userData || !userId) resHandler.throwError(400, 'incorrect request')()
            const result = await userModel
                .findOneAndUpdate({ '_id': userId }, userData, { new: true })
                .then(
                    resHandler.throwIf(r => !r, 400, 'not found', 'User not found'),
                    resHandler.throwError(500, 'sequelize error')
                )
            sendSuccess(result, 'successfull');
        } catch (error) {
            resHandler.sendError(res)(error);
        }


    }

    async deleteUser(req, res) {
        let userId = req.body.id;
        try {
            if (!userId) resHandler.throwError(400, 'incorrect request')()
            const result = await userModel
                .findOneAndRemove({ '_id': userId })
                .then(
                    resHandler.throwIf(r => !r, 400, 'not found', 'User not found'),
                    resHandler.throwError(500, 'sequelize error')
                )
            sendSuccess(result, 'successfull');
        } catch (error) {
            resHandler.sendError(res)(error);
        }
    }

    sendEmailVerification(req, res) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'anshoopandey.akp@gmail.com',
                pass: 'may@nshoo1'
            }
        });

        var mailOptions = {
            from: 'anshoopandey.akp@gmail.com',
            to: 'dharmendra.mishra1989@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                res.send('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = new UserCtrl();
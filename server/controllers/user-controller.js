import { tokenModel, usersModel } from "../index.js";
import userService from "../service/user-service.js";

class UserController {
    async registration (req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.registartion(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 3600 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            console.log(error);
        }
    };

    async login (req, res, next) {
        try {
            
        } catch (error) {
            console.log(error);
        }
    };
    
    async logout (req, res, next) {
        try {
            
        } catch (error) {
            console.log(error);
        }
    };

    // async activate (req, res, next) {
    //     try {
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    async refresh (req, res, next) {
        try {
            
        } catch (error) {
            console.log(error);
        }
    };

    async getUsers (req, res, next) {
        try {
            res.json([usersModel, tokenModel]);
        } catch (error) {
            console.log(error);
        }
    };
};

export default new UserController();
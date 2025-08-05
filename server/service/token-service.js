import jwt from 'jsonwebtoken'
import { tokenModel } from '../index.js'

class tokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});

        return {
            accessToken,
            refreshToken
        };
    };

    async saveToken(userId, refreshToken) {
        // const tokenData = await tokenModel.findOne({user: userId});
        // if (tokenData) {
        //     tokenData.refreshToken = refreshToken;
        //     return tokenData.save();
        // }

        tokenModel.forEach(element => {
            //если пользователь есть, то перезаписываем refreshToken
            if(element.userId === userId) {
                element.refreshToken = refreshToken;
                // console.log(element);
            }
        });

        //если нет значит пользователя надо добавить ему tokenModel
        // const token = await tokenModel.create({user: userId, refreshToken});

        const token = tokenModel.push({userId, refreshToken}); 
        return token;
    };
};

export default new tokenService();
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import mailService from './mail-service.js'
import tokenService from './token-service.js'
import { UserDto } from '../dto/user-dto.js'
import { usersModel } from '../index.js'



class UserService {
    async registartion(email, password) {
        // const candidate = await usersModel.findOne({email});
        const candidate = usersModel.some((user) => {user.email === email});
        if (candidate) {
            throw new Error(`Пользователь с адресом ${email} уже существует`);
        }

        const id = usersModel.length;
        const hashPassword = await bcrypt.hash(password, 3);
        const isActivated = 'false'; // изначально не активирована всегда
        const activateLink = uuidv4();

        // const user = await usersModel.push({email, password: hashPassword, activateLink});
        const user = {
            id, 
            email, 
            password: hashPassword, 
            isActivated, 
            activateLink
        };
        usersModel.push(user);
        // console.log('user: ', user);
        
        //отправка письма со своей почте -> новому пользователю
        // await mailService.sendActivationMail(email, activateLink);

        const userDto = new UserDto(user); // id, email,  isActivated;

        const tokens = tokenService.generateToken({...userDto});
        // await tokenService.saveToken(userDto.id, tokens.refreshToken);
        // console.log(userDto.id);
        tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto }
    };
};

export default new UserService();
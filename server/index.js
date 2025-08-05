import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './router/index.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

export const usersModel = [
    {
        id: 0,
        email: 'admin@inno.tech',
        password: 'admin',
        isActivated: 'true',
        activateLink: 'activateLink'
    },
];

export const tokenModel = [
    {
        userId: 0,
        accessToken: 'old accessToken',
        refreshToken: 'old refreshToken',
    },
];

const start = async () => {
    try {
        // тут могло быть подключение к БД
        console.log(usersModel);
        console.log(tokenModel);
        app.listen(PORT, () => { console.log(`server started on PORT = ${PORT}`); })
    } catch (error) {
        console.log(error);
    };
};

start();
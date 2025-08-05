import type { IUser } from "../IUser";

export interface AuthResponse {
    accessToken: 'old accessToken',
    refreshToken: 'old refreshToken',
    user: IUser,

};
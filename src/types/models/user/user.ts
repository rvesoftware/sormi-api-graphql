export interface User {
    _id:  string | unknown;
    uuid: string;
    name: string;
    username: string;
    email: string;
    ranking: number;
    password: string;
    phone: string;
    photo: string;
    gender: string;
    status: number;
    balance: number;
    verification_code: number;
    last_login: Date;
    location: string;
    notifications: boolean;
    pin: string;
}
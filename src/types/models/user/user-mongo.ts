import { Schema } from "mongoose";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>({
    uuid: {type: String, unique:true, required:true},
    name: {type: String},
    username: {type: String, trim:true, unique:true},
    email: {type: String, trim:true, unique:true, required:false},
    ranking: {type: Number},
    password: {type: String, trim:true},
    phone: {type: String, trim:true, unique:true},
    photo: {type: String, trim:true},
    gender: {type: String},
    balance: {type: Number, default: 50},
    pin: {type: String},
}, {
    versionKey: false,
    timestamps: true
});
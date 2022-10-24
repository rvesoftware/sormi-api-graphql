import {Collection, getModel} from '../../constant-definitions' 
import {User, UserSchemaMongo} from '../../types'
import bcrypt from 'bcrypt'
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';

type PartialUser = Partial<User>;
export const userSignup = async ({name, username, phone, password}: PartialUser): Promise<any> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)

    const user = await model.findOne({username: username});

    if(user){
         throw new Error("El usuario ya esta registrado");
    }else{
        const uuid = uuidv4(); 
        if(password){password = bcrypt.hashSync(password, 10);}
        const email = username + '@gmail.com'
        const user = new model({
            uuid,
            name,
            username,
            phone,
            password,
            email
        });


        await user.save();
        console.log(user)

        const token = jwt.sign({uuid: uuid, name: name, username: username, phone:phone}, process.env.JWT_SIGNIN_KEY || "", {expiresIn: "24h"});

        return {
            token,
            name: user.name,
            username: user.username,
            phone: user.phone,
            uuid: user.uuid,
            createdAt: user.createdAt
        };
        
    }
}
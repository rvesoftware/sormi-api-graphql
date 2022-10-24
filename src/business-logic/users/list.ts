import {Collection, getModel} from '../../constant-definitions' 
import {User, UserSchemaMongo} from '../../types'
import bcrypt from 'bcrypt'

export const allUsers = async (): Promise<User[] | Error> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo);
    const users: User[] = await model.find({});
    return users;
}
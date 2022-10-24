import {Collection, getModel} from '../../constant-definitions' 
import {User, UserSchemaMongo} from '../../types'
import bcrypt from 'bcrypt'

export const getUserById = async (uuid: string | undefined): Promise<User | Error> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo);
    const user = await model.findOne({uuid: uuid});
    return user?._doc;
}
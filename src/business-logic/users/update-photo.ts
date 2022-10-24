import { Collection, getModel } from "../../constant-definitions";
import { User, UserSchemaMongo } from "../../types";

export const updateUserPhoto = async (uuid: string, file: string): Promise<any | Error> => {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    
    const user = await model.findOne({uuid: uuid});

    try{
        if(user){
            user.photo = file;
            await user.save();
            return {
                status: true,
                photo: file
            };
        }
    }catch(err){
        console.log(err)
    }

    return {status: false}
        
}
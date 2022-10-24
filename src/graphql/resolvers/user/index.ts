import { getUserById } from "../../../business-logic/users/get-by-id";
import { allUsers } from "../../../business-logic/users/list";
import { userSignin } from "../../../business-logic/users/signin";
import { userSignup } from "../../../business-logic/users/signup";
import { updateUserPhoto } from "../../../business-logic/users/update-photo";
import { User } from "../../../types";

type PartialUser = Partial<User>;

interface UserPhoto {
  uuid: string;
  file: string;
}

export default {
  Query: {
    async allUsers(_: any, {}, context: any) {
        const users = await allUsers();
        return users;
    },
    async getUserById(_: any, {uuid}:PartialUser, context: any) {
      const user = await getUserById(uuid);
      return user;
  },
  },

  Mutation: {
    async userSignin(_: any, {username, password}: User, context: any) {
        const user = await userSignin({username, password});
        return user;
    },

    async userSignup(_:any, {name, username, phone, password}: User, context: any) {
        const user = await userSignup({name, username, phone, password});
        return user;
    },

    async updateUserPhoto(_: any, {uuid, file}: UserPhoto, context: any) {
      const user = await updateUserPhoto(uuid, file);
      return user;
  },
  },
};

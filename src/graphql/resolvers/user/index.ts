import { userSignin } from "../../../business-logic/users/signin";
import { userSignup } from "../../../business-logic/users/signup";
import { User } from "../../../types";

export default {
  Mutation: {
    async userSignin(_: any, {username, password}: User, context: any) {
        const user = await userSignin({username, password});
        return user;
    },

    async userSignup(_:any, {name, username, phone, password}: User, context: any) {
        const user = await userSignup({name, username, phone, password});
        return user;
    },
  },
};

import users from './user'
import roads from './road'

export default {
  
    Query: {
       ...roads.Query,
       ...users.Query
    },

    Mutation: {
        ...users.Mutation,
        ...roads.Mutation
    }
}
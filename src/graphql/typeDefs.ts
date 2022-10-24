const typeDefts =  `

type Query{
    allRoads: [Road]
    allUsers: [User]
    getUserById(uuid:String): User
}

type User{
    _id: ID
    uuid: String
    name: String
    username: String
    photo: String
    token: String
    balance: Int
}


type Road{
    _id: ID
    uuid: String
    user: String
    save_road: Boolean
    day: String
    time: String
    chairs: Int
    price: Int
    to_start: Boolean
    to_house: Boolean
    to_way: Boolean

}

input RoadInput {
    user: String
    save_road: Boolean
    day: String
    time: String
    chairs: Int
    price: Int
    to_start: Boolean
    to_house: Boolean
    to_way: Boolean
}

type Photo{
    status: Boolean
    photo: String
}
type Mutation {
    userSignin(username: String, password: String): User
    userSignup(name: String, username: String, phone: String, password: String): User
    createRoad( user: String
        save_road: Boolean
        day: String
        time: String
        chairs: Int
        price: Int
        to_start: Boolean
        to_house: Boolean
        to_way: Boolean): Road

    updateUserPhoto(uuid: String, file: String): Photo

}

`;

export default typeDefts;
import {Collection, getModel} from '../../constant-definitions' 
import {User, UserSchemaMongo} from '../../types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Road, RoadSchemaMongo } from '../../types/models/road'

export const allRoads = async (): Promise<Road[] | Error> => {
    const model = await getModel(Collection.ROADS, RoadSchemaMongo);
    const roads: Road[] = await model.find({});
    return roads;
}
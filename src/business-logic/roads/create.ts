import {Collection, getModel} from '../../constant-definitions' 
import {User, UserSchemaMongo} from '../../types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {v4 as UUID} from 'uuid'
import { Road, RoadSchemaMongo } from '../../types/models/road'

type PartialRoad = Partial<Road>;

export const createRoad = async (data: PartialRoad): Promise<Road | Error> => {
    const model = await getModel(Collection.ROADS, RoadSchemaMongo);
    const uuid = UUID();
    const road = new model({...data, uuid});
    await road.save();
    return road._doc;
}
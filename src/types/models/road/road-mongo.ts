import { Schema } from "mongoose";
import { Road } from "./road";

export const RoadSchemaMongo = new Schema<Road>({
    uuid: {type: String, unique:true, required:true},
    user: {type: String},
    save_road: {type: Boolean},
    day: {type: String},
    time: {type: String},
    chairs: {type: Number},
    price: {type: Number},
    to_start: {type: Boolean},
    to_way: {type: Boolean},
    to_house: {type: Boolean},
}, {
    versionKey: false,
    timestamps: true
});
import { createRoad } from "../../../business-logic/roads/create";
import { allRoads } from "../../../business-logic/roads/list";
import { Road } from "../../../types/models/road";

type PartialRoad = Partial<Road>;

export default {
  Query: {
    async allRoads(_: any, {}, context: any) {
        const roads = await allRoads();
        return roads;
    },
  },

  Mutation: {
    async createRoad(_: any, { user, save_road, day, time, chairs, price, to_start, to_house, to_way}: PartialRoad, context: any) {
      const road = await createRoad({user, save_road, day, time, chairs, price, to_start, to_house, to_way});
      console.log(road)
      return road;
  },
  }
};

export interface Road {
    _id:  string | unknown;
    uuid: string;
    user: string;
    save_road: boolean;
    day: string;
    time: string;
    chairs: number;
    price: number;
    to_start: boolean;
    to_house: boolean;
    to_way: boolean;
}
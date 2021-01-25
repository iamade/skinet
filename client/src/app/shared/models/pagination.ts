import { IProduct } from "./product";

export interface IPagniation {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProduct[]
}
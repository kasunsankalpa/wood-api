import { Img } from "./Img.entity";
import { Feture } from "./Feture.entity";
import { Com } from "./com.entity";
export declare class Product {
    id: number;
    name: string;
    itemcode: string;
    imgurl: string;
    fulldetsils: string;
    detais2: string;
    images: Img[];
    fetures: Feture[];
    com: Com[];
}

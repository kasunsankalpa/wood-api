import { FeturesService } from './fetures.service';
export declare class FeturesController {
    private fetureservice;
    constructor(fetureservice: FeturesService);
    getOne(id: any): Promise<import("../entity/Feture.entity").Feture[]>;
    getfeturesbyproductid(productId: number): Promise<import("../entity/Feture.entity").Feture[]>;
}

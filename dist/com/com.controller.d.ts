import { ComService } from './com.service';
export declare class ComController {
    private comservise;
    constructor(comservise: ComService);
    create(com: any): Promise<import("../entity/com.entity").Com>;
    getfeturesbyproductid(productId: number): Promise<import("../entity/com.entity").Com[]>;
}

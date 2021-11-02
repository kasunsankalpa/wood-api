import { ImgService } from './img.service';
export declare class ImgController {
    private imgService;
    constructor(imgService: ImgService);
    getOne(productId: any): Promise<import("../entity/Img.entity").Img[]>;
    getfeturesbyproductid(productId: number): Promise<import("../entity/Img.entity").Img[]>;
}

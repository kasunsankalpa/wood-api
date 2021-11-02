import { CtypeService } from './ctype.service';
export declare class CtypeController {
    private ctypeService;
    constructor(ctypeService: CtypeService);
    all(): Promise<import("../entity/ctype.entity").Ctype[]>;
    create(ctype: string): Promise<import("../entity/ctype.entity").Ctype>;
    get(id: number): Promise<import("../entity/ctype.entity").Ctype>;
    update(id: number, ctype: string): Promise<any>;
    delete(id: number): Promise<any>;
}

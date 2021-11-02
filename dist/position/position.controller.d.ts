import { PageService } from 'src/page/page.service';
import { PositionService } from './position.service';
export declare class PositionController {
    private positionService;
    private pageService;
    constructor(positionService: PositionService, pageService: PageService);
    create(pid: number, position: string): Promise<import("../entity/position.entity").Position>;
    all(): Promise<import("../entity/position.entity").Position[]>;
}

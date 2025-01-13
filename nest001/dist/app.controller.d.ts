import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getNewEndpoint(): string;
    getCategory({ categoryId, productId }: {
        categoryId: any;
        productId: any;
    }): string;
    getProducts(limit: number, offset: number, brand: string): string;
}

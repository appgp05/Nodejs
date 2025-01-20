export declare class ProductsController {
    getProduct(productId: string): string;
    getProducts2(limit: number, offset: number, brand: string): string;
    create(payload: any): {
        message: string;
        payload: {
            name: any;
            price: any;
        };
    };
    update(id: number, payload: any): {
        id: number;
        payload: any;
    };
}

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products/products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(): Promise<import("../../typescript/pelicula").Pelicula[]>;
    getProductss(nombre: any): Promise<import("../../typescript/pelicula").Pelicula[]>;
    getProducts2(limit: number, offset: number, brand: string): string;
    getProduct(productId: String): import("../../typescript/pelicula").Pelicula;
    create(newProduct: CreateProductDto): any;
    update(id: number, payload: UpdateProductDto): string;
}

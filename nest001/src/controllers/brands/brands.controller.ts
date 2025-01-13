import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get('products/:productId')
    getProduct(@Param('productId') productId: string) {
    // http://localhost:3000/products/1
    return `product ${productId}`;
    }
}

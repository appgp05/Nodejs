import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  /*@Get(':productId')
  getProduct1(@Param() { productId }) {
    return `product ${productId}`;
  }*/

  @Get('')
  getProducts2(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }
}


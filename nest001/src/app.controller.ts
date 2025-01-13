import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-point')
  getNewEndpoint(): string{
    return "New endpoint";
  }


  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    // @Param('productId') productId: string
    return `Product ${productId}, Category ${categoryId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }


}

import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService:ProductsService){}
  @Get('products')
  getProducts(){
    return this.productService.findAll();
  }
  @Get('pornombre/:nombre')
  getProductss(@Param('nombre') nombre){
    return this.productService.findByName(nombre);
  }

  /*@Get(':productId')
  getProduct1(@Param() { productId }) {
    return `product ${productId}`;
  }*/
  @Get('products')
  getProducts2(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: String) {
    // return `product ${productId}`;
    return this.productService.findOne(+productId);
  }

  @Post()
    create(@Body() newProduct: CreateProductDto) {
      // return {
      //   message: 'acción de crear',
      //   payload: { name :payload.name, price: payload.price }
      // };
      return this.productService.create(newProduct);
    }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productService.update(+id, payload);
  }
}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CancionesController } from './controllers/canciones/canciones.controller';
import { CommonController } from './controllers/common/common.controller';
import { ThreadsController } from './controllers/threads/threads.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, BrandsController, CancionesController, CommonController, ThreadsController],
  providers: [AppService],
})
export class AppModule {}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Product } from 'src/entities/product.entity';

// @Injectable() // Anotación inyectable --> Inyección de dependencias
// export class ProductsService {
//   private counterId = 1;
//   private products: Product[] = [
//     {
//       id: 1,
//       name: 'Producto 1',
//       description: 'lorem lorem',
//       price: 10000,
//       stock: 300,
//       image: 'https://i.imgur.com/U4iGx1j.jpeg',
//     },
//   ];

//   findAll(){
//     return this.products;
//   }
//   findOne(id:number){
//     const product = this.products.find((item) => item.id === id)
//     if(!product){
//         const message = `${id} not found`
//         console.log(message);
//         throw new NotFoundException(`Product ${id} not found`);
//     }

//     return product;
//   }
//   create(newProducto: any) {
//     this.counterId += 1;
//     const newProduct = {
//       id: this.counterId,
//       ...newProducto,
//     };
//     this.products.push(newProduct);
//     return newProduct;
//   }
//   update(id: number, payload: any) {
//     const productFound = this.findOne(id);
//     let message = '';
//     if (productFound != null) {
//         const index = this.products.findIndex((item) => item.id === id);
//       // Hacer un merge entre los dos
//       // Haz esta prueba si te da tiempo
//         // this.products[index] = payload;
//       this.products[index] = {
//             ...productFound,
//             ...payload,
//       }
//       message = 'Product updated';
//     } else {
//       message = 'Product not found';
//     }
//     return message;
//   }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { Pelicula } from 'src/typescript/pelicula';
import { PeliculaDAO } from 'src/typescript/pelicula.dao';
import { PeliculaDAOImpl } from 'src/typescript/pelicula.dao.impl';

@Injectable() // Anotación inyectable --> Inyección de dependencias
export class ProductsService {
  constructor(private peliculaDAOImpl:PeliculaDAOImpl){}
  private counterId = 1;
  private peliculas: Pelicula[] = [
    {
      id: 1,
      nombre: 'Marvel 1',
      descripcion: 'asdasdd',
    },
  ];

  findAll(){
    return this.peliculaDAOImpl.obtenerTodos();
  }
  findByName(name: String){
    return this.peliculaDAOImpl.obtenerTodosByName(name);
  }
  findOne(id:number){
    const product = this.peliculas.find((item) => item.id === id)
    if(!product){
        const message = `${id} not found`
        console.log(message);
        throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }
  create(newProducto: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...newProducto,
    };
    this.peliculas.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: any) {
    const productFound = this.findOne(id);
    let message = '';
    if (productFound != null) {
        const index = this.peliculas.findIndex((item) => item.id === id);
      // Hacer un merge entre los dos
      // Haz esta prueba si te da tiempo
        // this.products[index] = payload;
      this.peliculas[index] = {
            ...productFound,
            ...payload,
      }
      message = 'Product updated';
    } else {
      message = 'Product not found';
    }
    return message;
  }
}

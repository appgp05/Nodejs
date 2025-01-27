"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const pelicula_dao_impl_1 = require("../../typescript/pelicula.dao.impl");
let ProductsService = class ProductsService {
    constructor(peliculaDAOImpl) {
        this.peliculaDAOImpl = peliculaDAOImpl;
        this.counterId = 1;
        this.peliculas = [
            {
                id: 1,
                nombre: 'Marvel 1',
                descripcion: 'asdasdd',
            },
        ];
    }
    findAll() {
        return this.peliculaDAOImpl.obtenerTodos();
    }
    findByName(name) {
        return this.peliculaDAOImpl.obtenerTodosByName(name);
    }
    findOne(id) {
        const product = this.peliculas.find((item) => item.id === id);
        if (!product) {
            const message = `${id} not found`;
            console.log(message);
            throw new common_1.NotFoundException(`Product ${id} not found`);
        }
        return product;
    }
    create(newProducto) {
        this.counterId += 1;
        const newProduct = {
            id: this.counterId,
            ...newProducto,
        };
        this.peliculas.push(newProduct);
        return newProduct;
    }
    update(id, payload) {
        const productFound = this.findOne(id);
        let message = '';
        if (productFound != null) {
            const index = this.peliculas.findIndex((item) => item.id === id);
            this.peliculas[index] = {
                ...productFound,
                ...payload,
            };
            message = 'Product updated';
        }
        else {
            message = 'Product not found';
        }
        return message;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pelicula_dao_impl_1.PeliculaDAOImpl])
], ProductsService);
//# sourceMappingURL=products.service.js.map
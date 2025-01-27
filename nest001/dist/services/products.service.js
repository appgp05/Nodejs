"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.counterId = 1;
        this.products = [
            {
                id: 1,
                name: 'Producto 1',
                description: 'lorem lorem',
                price: 10000,
                stock: 300,
                image: 'https://i.imgur.com/U4iGx1j.jpeg',
            },
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((item) => item.id === id);
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
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, payload) {
        const productFound = this.findOne(id);
        let message = '';
        if (productFound != null) {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] = {
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
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map
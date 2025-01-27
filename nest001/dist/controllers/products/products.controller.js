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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_dtos_1 = require("../../dtos/products.dtos");
const products_service_1 = require("../../services/products/products.service");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts() {
        return this.productService.findAll();
    }
    getProductss(nombre) {
        return this.productService.findByName(nombre);
    }
    getProducts2(limit = 100, offset = 0, brand) {
        return `products limit=> ${limit}`;
    }
    getProduct(productId) {
        return this.productService.findOne(+productId);
    }
    create(newProduct) {
        return this.productService.create(newProduct);
    }
    update(id, payload) {
        return this.productService.update(+id, payload);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('pornombre/:nombre'),
    __param(0, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductss", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('offset')),
    __param(2, (0, common_1.Query)('brand')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts2", null);
__decorate([
    (0, common_1.Get)(':productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_dtos_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, products_dtos_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_controller_1 = require("./controllers/products/products.controller");
const categories_controller_1 = require("./controllers/categories/categories.controller");
const brands_controller_1 = require("./controllers/brands/brands.controller");
const canciones_controller_1 = require("./controllers/canciones/canciones.controller");
const common_controller_1 = require("./controllers/common/common.controller");
const threads_controller_1 = require("./controllers/threads/threads.controller");
const products_service_1 = require("./services/products/products.service");
const pelicula_dao_impl_1 = require("./typescript/pelicula.dao.impl");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, products_controller_1.ProductsController, categories_controller_1.CategoriesController, brands_controller_1.BrandsController, canciones_controller_1.CancionesController, common_controller_1.CommonController, threads_controller_1.ThreadsController],
        providers: [app_service_1.AppService, products_service_1.ProductsService, pelicula_dao_impl_1.PeliculaDAOImpl],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
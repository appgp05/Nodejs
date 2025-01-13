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
exports.CancionesController = void 0;
const common_1 = require("@nestjs/common");
let CancionesController = class CancionesController {
    getListaCanciones() {
        return `Ésta es la lista de canciones`;
    }
    getCancionId(cancionId) {
        return `Cancion ${cancionId}`;
    }
    getCancionTittle(title) {
        return `Nombre de la cancion: ${title}`;
    }
    deleteCancionId(cancionId) {
        return `Cancion ${cancionId} eliminada`;
    }
    putCancionId(cancionId) {
        return `Cancion ${cancionId} insertada`;
    }
    postCancionTitleCategory({ title, category }) {
        return `Cancion ${title} con la categoria ${category}`;
    }
};
exports.CancionesController = CancionesController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "getListaCanciones", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "getCancionId", null);
__decorate([
    (0, common_1.Get)('?title'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "getCancionTittle", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "deleteCancionId", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "putCancionId", null);
__decorate([
    (0, common_1.Post)('/:title/:category'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "postCancionTitleCategory", null);
exports.CancionesController = CancionesController = __decorate([
    (0, common_1.Controller)('canciones')
], CancionesController);
//# sourceMappingURL=canciones.controller.js.map
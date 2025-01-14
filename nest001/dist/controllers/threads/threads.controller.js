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
exports.ThreadsController = void 0;
const common_1 = require("@nestjs/common");
let ThreadsController = class ThreadsController {
    processTask(taskId) {
        const start = Date.now();
        while (Date.now() - start < 2000) {
        }
        return `Task ${taskId} completed`;
    }
    async processTaskP(taskId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Task ${taskId} completed`);
            }, 2000);
        });
    }
    async getListaPeliculas() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const listaDePeliculas = ['Pelicula 1', 'Pelicula 2', 'Pelicula 3', 'Pelicula 4', 'Pelicula 5'];
                resolve(`La lista de peliculas es la siguiente: ${listaDePeliculas}`);
            }, 3000);
        });
    }
    printListaPelicula(text) {
        console.log(text);
    }
    async parallel2Execution() {
        const response = await this.getListaPeliculas();
        this.printListaPelicula(response);
        return response;
    }
    sequentialExecution() {
        const results = [];
        results.push(this.processTask(1));
        results.push(this.processTask(2));
        results.push(this.processTask(3));
        return results;
    }
    async parallelExecution() {
        const task1 = this.processTaskP(1);
        const task2 = this.processTaskP(2);
        const task3 = this.processTaskP(3);
        const results = await Promise.all([task1, task2, task3]);
        return results;
    }
};
exports.ThreadsController = ThreadsController;
__decorate([
    (0, common_1.Get)('parallel2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThreadsController.prototype, "parallel2Execution", null);
__decorate([
    (0, common_1.Get)('conflict'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ThreadsController.prototype, "sequentialExecution", null);
__decorate([
    (0, common_1.Get)('parallel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThreadsController.prototype, "parallelExecution", null);
exports.ThreadsController = ThreadsController = __decorate([
    (0, common_1.Controller)('threads')
], ThreadsController);
//# sourceMappingURL=threads.controller.js.map
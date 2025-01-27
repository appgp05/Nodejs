"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculaDAOImpl = void 0;
class PeliculaDAOImpl {
    constructor() {
        this.peliculas = [
            { id: 1, nombre: 'Marvel', descripcion: 'afddsfdsf' },
            { id: 1, nombre: 'Marvel', descripcion: 'afddsfdsf' },
            { id: 2, nombre: 'Marvel 2', descripcion: 'sdfdettryrty' }
        ];
    }
    async obtenerTodos() {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.peliculas), 1000);
        });
    }
    obtenerTodosByName(nombre) {
        return new Promise(resolve => {
            setTimeout(() => {
                const pelicula = this.peliculas.filter(pelicula => pelicula.nombre === nombre) || null;
                resolve(pelicula);
            }, 1000);
        });
    }
    async obtenerPorId(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                const usuario = this.peliculas.find(usuario => usuario.id === id) || null;
                resolve(usuario);
            }, 1000);
        });
    }
    async crear(pelicula) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.peliculas.push(pelicula);
                resolve(pelicula);
            }, 1000);
        });
    }
    async actualizar(usuario) {
        return new Promise(resolve => {
            setTimeout(() => {
                const index = this.peliculas.findIndex(u => u.id === usuario.id);
                if (index !== -1) {
                    this.peliculas[index] = usuario;
                }
                resolve(usuario);
            }, 1000);
        });
    }
    async eliminar(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.peliculas = this.peliculas.filter(usuario => usuario.id !== id);
                resolve();
            }, 1000);
        });
    }
}
exports.PeliculaDAOImpl = PeliculaDAOImpl;
//# sourceMappingURL=pelicula.dao.impl.js.map
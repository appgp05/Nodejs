"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDAOImpl = void 0;
class UsuarioDAOImpl {
    constructor() {
        this.usuarios = [
            { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
            { id: 2, nombre: 'Ana Gómez', email: 'ana@example.com' }
        ];
    }
    async obtenerTodos() {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.usuarios), 1000);
        });
    }
    async obtenerPorId(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                const usuario = this.usuarios.find(usuario => usuario.id === id) || null;
                resolve(usuario);
            }, 1000);
        });
    }
    async crear(usuario) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.usuarios.push(usuario);
                resolve(usuario);
            }, 1000);
        });
    }
    async actualizar(usuario) {
        return new Promise(resolve => {
            setTimeout(() => {
                const index = this.usuarios.findIndex(u => u.id === usuario.id);
                if (index !== -1) {
                    this.usuarios[index] = usuario;
                }
                resolve(usuario);
            }, 1000);
        });
    }
    async eliminar(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
                resolve();
            }, 1000);
        });
    }
}
exports.UsuarioDAOImpl = UsuarioDAOImpl;
//# sourceMappingURL=usuario.dao.impl.js.map
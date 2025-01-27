"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_dao_impl_1 = require("./typescript/usuario.dao.impl");
const usuarioDAO = new usuario_dao_impl_1.UsuarioDAOImpl();
async function trabajarConUsuarios() {
    const usuarios = await usuarioDAO.obtenerTodos();
    console.log('Usuarios:', usuarios);
    const usuario = await usuarioDAO.obtenerPorId(1);
    console.log('Usuario encontrado:', usuario);
    const nuevoUsuario = await usuarioDAO.crear({ id: 3, nombre: 'Laura Martínez', email: 'laura@example.com' });
    console.log('Nuevo usuario:', nuevoUsuario);
    const usuarioActualizado = await usuarioDAO.actualizar({ id: 3, nombre: 'Laura Martínez', email: 'laura.mtz@example.com' });
    console.log('Usuario actualizado:', usuarioActualizado);
    await usuarioDAO.eliminar(3);
    console.log('Usuario eliminado');
    const usuariosRestantes = await usuarioDAO.obtenerTodos();
    console.log('Usuarios restantes:', usuariosRestantes);
}
trabajarConUsuarios();
//# sourceMappingURL=main2.js.map
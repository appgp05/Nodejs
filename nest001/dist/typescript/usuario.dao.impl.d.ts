import { Usuario } from "./usuario";
import { UsuarioDAO } from "./usuario.dao";
export declare class UsuarioDAOImpl implements UsuarioDAO {
    private usuarios;
    obtenerTodos(): Promise<Usuario[]>;
    obtenerPorId(id: number): Promise<Usuario | null>;
    crear(usuario: Usuario): Promise<Usuario>;
    actualizar(usuario: Usuario): Promise<Usuario>;
    eliminar(id: number): Promise<void>;
}

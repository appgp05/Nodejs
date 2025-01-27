import { Pelicula } from "./pelicula";
import { PeliculaDAO } from "./pelicula.dao";
export declare class PeliculaDAOImpl implements PeliculaDAO {
    private peliculas;
    obtenerTodos(): Promise<Pelicula[]>;
    obtenerTodosByName(nombre: String): Promise<Pelicula[]>;
    obtenerPorId(id: number): Promise<Pelicula | null>;
    crear(pelicula: Pelicula): Promise<Pelicula>;
    actualizar(usuario: Pelicula): Promise<Pelicula>;
    eliminar(id: number): Promise<void>;
}

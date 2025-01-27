import { DAO } from "./dao";
import { Pelicula } from "./pelicula";
export interface PeliculaDAO extends DAO<Pelicula> {
    obtenerTodosByName(nombre: String): Promise<Pelicula[]>;
}

import { Pelicula } from "./pelicula";
import { PeliculaDAO } from "./pelicula.dao";
import { Usuario } from "./usuario";

export class PeliculaDAOImpl implements PeliculaDAO{
    private peliculas: Pelicula[] = [
    { id: 1, nombre: 'Marvel', descripcion: 'afddsfdsf' },
    { id: 1, nombre: 'Marvel', descripcion: 'afddsfdsf' },
    { id: 2, nombre: 'Marvel 2', descripcion: 'sdfdettryrty' }
    ];

    async obtenerTodos(): Promise<Pelicula[]> {
    // Simulamos una operación asincrónica, como una consulta a la base de datos.
    return new Promise(resolve => {
        setTimeout(() => resolve(this.peliculas), 1000);
    });
    }

    obtenerTodosByName(nombre: String): Promise<Pelicula[]> {
        return new Promise(resolve => {
            setTimeout(() => {
            const pelicula = this.peliculas.filter(pelicula => pelicula.nombre === nombre) || null;
            resolve(pelicula);
            }, 1000);
        });

    }

    async obtenerPorId(id: number): Promise<Pelicula | null> {
    // Simulamos una operación asincrónica.
    return new Promise(resolve => {
        setTimeout(() => {
        const usuario = this.peliculas.find(usuario => usuario.id === id) || null;
        resolve(usuario);
        }, 1000);
    });
    }

    async crear(pelicula: Pelicula): Promise<Pelicula> {
    // Simulamos una operación asincrónica.
    return new Promise(resolve => {
        setTimeout(() => {
        this.peliculas.push(pelicula);
        resolve(pelicula);
        }, 1000);
    });
    }

    async actualizar(usuario: Pelicula): Promise<Pelicula> {
    // Simulamos una operación asincrónica.
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

    async eliminar(id: number): Promise<void> {
    // Simulamos una operación asincrónica.
    return new Promise(resolve => {
        setTimeout(() => {
        this.peliculas = this.peliculas.filter(usuario => usuario.id !== id);
        resolve();
        }, 1000);
    });
    }
}
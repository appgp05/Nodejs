import { Pelicula } from 'src/typescript/pelicula';
import { PeliculaDAOImpl } from 'src/typescript/pelicula.dao.impl';
export declare class ProductsService {
    private peliculaDAOImpl;
    constructor(peliculaDAOImpl: PeliculaDAOImpl);
    private counterId;
    private peliculas;
    findAll(): Promise<Pelicula[]>;
    findByName(name: String): Promise<Pelicula[]>;
    findOne(id: number): Pelicula;
    create(newProducto: any): any;
    update(id: number, payload: any): string;
}

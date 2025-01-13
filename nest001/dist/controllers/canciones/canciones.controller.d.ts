export declare class CancionesController {
    getListaCanciones(): string;
    getCancionId(cancionId: string): string;
    getCancionTittle(title: string): string;
    deleteCancionId(cancionId: string): string;
    putCancionId(cancionId: string): string;
    postCancionTitleCategory({ title, category }: {
        title: any;
        category: any;
    }): string;
}

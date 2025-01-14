export declare class ThreadsController {
    private processTask;
    private processTaskP;
    private getListaPeliculas;
    private printListaPelicula;
    parallel2Execution(): Promise<String>;
    sequentialExecution(): string[];
    parallelExecution(): Promise<string[]>;
}

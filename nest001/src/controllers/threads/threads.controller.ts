import { Controller, Get } from '@nestjs/common';

@Controller('threads')
export class ThreadsController {
    private processTask(taskId: number): string {
        // Simulación de una operación "bloqueante" (sincrónica)
        const start = Date.now();
        while (Date.now() - start < 2000) {
          // Simula una tarea que bloquea el hilo durante 2 segundos
        }
        return `Task ${taskId} completed`;
      }

    private async processTaskP(taskId: number): Promise<string> {
    // Simulación de una operación asincrónica con retraso de 2 segundos
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Task ${taskId} completed`);
        }, 2000);
    });
    }

    private async getListaPeliculas(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const listaDePeliculas = ['Pelicula 1', 'Pelicula 2', 'Pelicula 3', 'Pelicula 4', 'Pelicula 5'];
            resolve(`La lista de peliculas es la siguiente: ${listaDePeliculas}`);
        }, 3000);
    });
    }

    private printListaPelicula(text: String){
        console.log(text);
    }

@Get('parallel2')
        async parallel2Execution(): Promise<String> {
            const response = await this.getListaPeliculas();
            this.printListaPelicula(response);
            // Espera a que todas las promesas se resuelvan
            // const results = await Promise.all([response]);

        return response;
    }


@Get('conflict')
      sequentialExecution(): string[] {
        const results: string[] = [];
        // Las tareas se ejecutan una tras otra, bloqueando el hilo
            results.push(this.processTask(1));
            results.push(this.processTask(2));
            results.push(this.processTask(3));
    
        return results;
      }

@Get('parallel')
      async parallelExecution(): Promise<string[]> {
        // Las tareas se inician simultáneamente
        const task1 = this.processTaskP(1);
        const task2 = this.processTaskP(2);
        const task3 = this.processTaskP(3);

        // Espera a que todas las promesas se resuelvan
        const results = await Promise.all([task1, task2, task3]);

        return results;
      }
}

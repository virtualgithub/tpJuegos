import { Juego } from './juego';

export class AdivinaNumero extends Juego {
    pista: string;

    constructor() {
        super();
        this.id = 1;
        this.vidas = 6;
    }

    generarSolucion(){
        this.solucion = Math.floor(Math.random() * 100);//del 0 al 99
        console.info("Solución: ", this.solucion);
    }

    generarPista(){
        if(this.respuesta > this.solucion){
            this.pista = 'Intentá un número más chico';
        }
        else{
            this.pista = 'Intentá un número más grande';
        }
    }

    verificar(){
        this.vidas--;
        if (this.respuesta == this.solucion) {
            this.puntos = this.vidas + 1;
            return 'gano';
        }
        else if(this.vidas === 0) {
            return 'perdio';
        }
        else {
            return 'continua';
        }
    }
}
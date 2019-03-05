
import {Articulo} from './articulo';
export class Abarrote implements Articulo {

    public nombre : string;
    public precio : number;
    public categoria : string;

    constructor() {

        this.categoria='abarrote';
    }

    public imprimir(): string {
        let nombre: string= 'categoria';
        return nombre + ': ' + this.categoria;
    }

    public esAbarrotes(): boolean {

        return true;
    }
}

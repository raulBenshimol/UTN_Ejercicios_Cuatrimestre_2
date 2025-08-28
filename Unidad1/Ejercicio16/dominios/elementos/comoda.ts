import Elemento from "./elemento";

export default class Comoda extends Elemento {

    private _superficie: number;
    private _cantidadCajones: number;

    constructor(
        descripcion: string,
        dimensiones: string,
        numeroIdentidad: string,
        superficie: number,
        cantidadCajones: number){
            super(descripcion, dimensiones, numeroIdentidad);
            this._superficie = superficie;
            this._cantidadCajones = cantidadCajones;
        }

    public get superficie(){
        return this._superficie;
    }
    public get cantidadCajones(){
        return this._cantidadCajones;
    }    

}

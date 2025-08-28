import Elemento from "./elemento";

export default class Bicicleta extends Elemento {

    private _diametroRodado: number;
    private _esElectrica: boolean;
    private _cantidadCambios: number;

    constructor(
        descripcion: string,
        dimensiones: string,
        numeroIdentidad: string,
        diametroRodado: number,
        esElectrica: boolean,
        cantidadCambios: number){
            super(descripcion, dimensiones, numeroIdentidad);
            this._diametroRodado = diametroRodado;
            this._esElectrica = esElectrica;
            this._cantidadCambios = cantidadCambios;
        }

    public get diametroRodado(){
        return this._diametroRodado;
    }
    public get esElectrica(){
        return this._esElectrica;
    }
    public get cantidadCambios(){
        return this._cantidadCambios;
    }        
        
}

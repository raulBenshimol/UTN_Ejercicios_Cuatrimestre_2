import Elemento from "./elemento";

export default class Lavarropa extends Elemento {
    private _voltaje: number;
    private _carga: number;
    private _revolucionesCentrifugado: number;

    constructor(
        descripcion: string,
        dimensiones: string,
        numeroIdentidad: string,
        voltaje: number,
        carga: number,
        revolucionesCentrifugado: number) {
            super(descripcion, dimensiones, numeroIdentidad);
            this._voltaje = voltaje;
            this._carga = carga;
            this._revolucionesCentrifugado = revolucionesCentrifugado;    
    }
    public get voltaje(){
        return this._voltaje;
    }
    public get carga(){
        return this._carga;
    }
    public get revolucionesCentrifugado(){
        return this._revolucionesCentrifugado;
    }
}

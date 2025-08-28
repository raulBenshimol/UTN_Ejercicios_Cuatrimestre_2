import Elemento from "./elemento";

export default class Heladera extends Elemento {
    private _voltaje: number;
    private _poseeFreezer: boolean;
    
    constructor(
    descripcion: string,
    dimensiones: string,
    numeroIdentidad: string,
    voltaje: number,
    poseeFreezer: boolean) {
        super(descripcion, dimensiones, numeroIdentidad);
        this._voltaje = voltaje;
        this._poseeFreezer = poseeFreezer;
    }
    public get voltaje(){
        return this._voltaje;
    }
    public get poseeFreezer(){
        return this._poseeFreezer;
    }
}

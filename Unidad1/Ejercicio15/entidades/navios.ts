export default abstract class Navios{
    private _nombre: string;
    private _velocidadCrucero: number;
    private _flotavilidad: number;
    private _estabilidad: string;
    private _solidez: number;


    public constructor(nombre: string, velocidadCrucero: number, flotavilidad: number, estabilidad: string, solidez: number){
        this._nombre = nombre;
        this._velocidadCrucero = velocidadCrucero;
        this._flotavilidad = flotavilidad;
        this._estabilidad = estabilidad;
        this._solidez = solidez;
 
    }
    public get nombre(){
        return this._nombre;
    }
    public get velocidadCrucero(){
        return this._velocidadCrucero;
    }
    public get flotavilidad(){
        return this._flotavilidad;
    }
    public get estabilidad(){
        return this._estabilidad;
    }
    public get solidez(){
        return this._solidez;
    }
    abstract mostrarDatos(): string;
}
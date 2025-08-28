export default abstract class Lanchas{
    private _nombre: string;
    private _flotabilidad: number;
    private _estabilidad: string;
    private _maniobrabilidad: string;
    private _capacidadCarga: number;

    public constructor(nombre: string, flotabilidad: number, estabilidad: string, maniobrabilidad: string, capicidadCarga: number){
        this._nombre = nombre;
        this._flotabilidad = flotabilidad;
        this._estabilidad = estabilidad;
        this._maniobrabilidad = maniobrabilidad;
        this._capacidadCarga = capicidadCarga;
    }
    public get nombre(){
        return this._nombre;
    }
    public get flotabilidad(){
        return this._flotabilidad;
    }
    public get estabilidad(){
        return this._estabilidad;
    }
    public get manibrabilidad(){
        return this._maniobrabilidad;
    }
    public get capacidadCarga(){
        return this._capacidadCarga;
    }
    abstract mostrarDatos(): string;
}
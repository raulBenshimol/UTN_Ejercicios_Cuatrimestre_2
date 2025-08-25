// Crear una clase Ninja con las variables privadas arteMarcial, arma, fuerza (entero) y salto 
// (entero).
export default class Ninja{
    private _arteMarcial: string;
    private _arma: string;
    private _fuerza: number;
    private _salto: number;

    constructor(arteMarcial: string = "", arma: string = "", fuerza: number = 0, salto = 0){
        this._arteMarcial = arteMarcial;
        this._arma = arma;
        this._fuerza = fuerza;
        this._salto = salto;
    }

    // ● Crear setters y getters manualmente.
    public get arteMarcial(){
        return this._arteMarcial;
    }
    public get arma(){
        return this._arma;
    }
    public get fuerza(){
        return this._fuerza;
    }
    public get salto(){
        return this._salto;
    }
    public set arteMarcial(value: string){
        this._arteMarcial = value;
    }
    public set arma(value: string){
        this._arma = value;
    }
    public set fuerza(value: number){
        this._fuerza = value;
    }
    public set salto(value: number){
        this._salto = value;
    }
    // ● Crear una función saltar() que reciba un parámetro multiplicador (entero); imprimir 
    // por consola salto x parámetro. 
    public saltar(distancia: number, ninja: Ninja): void {
        console.log("El ninja salta " + distancia * ninja.salto + "metros");
    }

    // ● Crear la función ataque() que imprima por consola el arma que usa el ninja y el 
    // arte marcial. 
    public ataque(ninja: Ninja){
        console.log("El arma es " + ninja.arma + ", y el arte marcial es " + ninja.arteMarcial)
    }
}
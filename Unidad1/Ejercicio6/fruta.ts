// Crear una clase Fruta con variables privadas color, peso, esEstacional. 
// ● Crear setters y getters. 
// ● Escribir una función llamada esComestible() que devuelva verdadero cuando la 
// fruta pesa menos de 200 gr y es de estación, y falso en cualquier otro caso. 
// ● Definir dos constructores de modo tal que la fruta pueda crearse con los valores 
// color, peso y estacional al momento de instanciarse, o bien crearse sin valores 
// iniciales. 

export default class Fruta{
    private _color: string;
    private _peso: number;
    private _esEstacional: boolean;


    // ● Definir dos constructores de modo tal que la fruta pueda crearse con los valores 
    // color, peso y estacional al momento de instanciarse, o bien crearse sin valores 
    // iniciales.
    public constructor(color: string = "", peso: number = 0.00, esEstacional: boolean = false){
        this._color = color;
        this._peso = peso;
        this._esEstacional = esEstacional;
    } 
    // ● Crear setters y getters.
    public get color(){
        return this._color;
    } 
    public get peso(){
        return this._peso;
    }
    public get esEstacional(){
        return this._esEstacional;
    }
    public set color(value: string){
        this._color = value;
    }
    public set peso(value: number){
        this._peso = value;
    }
    public set esEstacional(value: boolean){
        this._esEstacional = value;
    }
        
    // ● Escribir una función llamada esComestible() que devuelva verdadero cuando la 
    // fruta pesa menos de 200 gr y es de estación, y falso en cualquier otro caso.
    public esComestible(fruta: Fruta){
        if((fruta.peso < 200) && (fruta.esEstacional == true)){
            return true;
        }
        else{
            return false;
        }
    }
}
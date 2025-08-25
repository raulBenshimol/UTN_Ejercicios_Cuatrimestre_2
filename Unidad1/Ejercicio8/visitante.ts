// Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y 
// getters. 
// ● Crear una clase llamada Visitante con los mismos atributos. 
// ● Crear una clase Guardia con los mismos atributos. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores.

export default class Visitante{
    private _nombre: string;
    private _apellido: string;

    public constructor(nombre: string = "", apellido: string = ""){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    public get nombre(){
        return this._nombre;
    }
    public get apellido(){
        return this._apellido;
    }
    public set nombre(value: string){
        this._nombre = value;
    }
    public set apellido(value: string){
        this._apellido = value;
    }
}
// Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Agregar en Persona el método presentarse() que devuelva nombre y apellido de la 
// persona. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Sobreescribir el método presentarse() en la clase Guardia de modo tal que devuelva el 
// siguiente mensaje “Hola, mi nombre es <nombre y apellido> y soy el guardia.” Donde 
// <nombre y apellido> debe ser reemplazado por el nombre y apellido del guardia. 
// 4 
// ● Mostrar por pantalla el resultado de invocar el método presentarse() y advertir que la 
// implementación en la clase Guardia tiene precedencia sobre la de su padre. 

export default class Persona {
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
    // ● Agregar en Persona el método presentarse() que devuelva nombre y apellido de la 
    // persona. 
    public presentarse(): string {
        return `El nombre de la persona es ${this.nombre} ${this.apellido}`;
    }
}
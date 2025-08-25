// Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Agregar en Visitante el atributo privado dni (numérico) con sus setters y getters 
// correspondientes. 
// ● Agregar en Guardia el método público controlarDocumento() que reciba como 
// parámetro el dni de la persona y devuelva el mensaje “Adelante persona con dni <dni>” 
// donde <dni> es el valor recibido por parámetro. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores.

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
    public presentarse(): string {
        return `El nombre de la persona es ${this.nombre} ${this.apellido}`;
    }
}
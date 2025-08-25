//  Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Modificar la clase Guardia para que el método público controlarDocumento() devuelva 
// el mensaje “Adelante <nombre completo del visitante> con dni <dni>” reemplazando 
// respectivamente con el nombre completo del visitante y su dni. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Analizar si es posible pasar un único parámetro al método controlarDocumento() y 
// estudiar las ventas y desventajas que tendría asociado. 

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
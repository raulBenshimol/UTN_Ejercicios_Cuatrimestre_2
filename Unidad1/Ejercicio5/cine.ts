// Crear una clase Cine que tenga los atributos privados película y horario. 
// ● Crear métodos públicos para la asignación y recuperación de valores. 
// ● Crear una instancia y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Crear una segunda instancia y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Cambiar los valores de la primera instancia. 
// ● Mostrar en pantalla los valores de ambas instancias; concluir que la instrucción new crea 
// objetos distintos. 

export default class Cine{
    private _pelicula: string;
    private _horario: string;

    // ● Creamos el constructor vacio...
    constructor(pelicula: string = "", horario: string = ""){
        this._pelicula = pelicula;
        this._horario = horario;
    }
    // ● Crear métodos públicos para la asignación y recuperación de valores...
    public get nombrePelicula(){
        return this._pelicula;
    }
    public set nombrePelicula(value: string){
        this._pelicula = value;
    }
    public get horario(){
        return this._horario;
    }
    public set horario(value: string){
        this._horario = value;
    }
}
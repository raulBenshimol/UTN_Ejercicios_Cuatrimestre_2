// Crear una clase Cine que tenga los atributos privados película y horario: 
// ● Crear métodos públicos para la asignación y recuperación de valores. 
// ● Crear un método público obtenerCartelera() que devuelva el nombre 
//   de la película y el horario. 
// ● Crear una instancia y asignarle valores. 
// ● Mostrar por pantalla los valores. 

export default class Cine{
    private _pelicula: string;
    private _horario: string;

    //Creamos el constructor...
    constructor(pelicula: string, horario: string){
        this._pelicula = pelicula;
        this._horario = horario;
    }

    //Creamos property para el set y el get...
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

    //Metodo para la obtener cartelera cartelera...
    public obtenerCartelera(){
        console.log(`La pelicula es: ${this.nombrePelicula}`);
        console.log(`Hora de funcion: ${this.horario}`);
    }

}
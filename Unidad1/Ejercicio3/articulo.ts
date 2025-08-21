// Crear una clase Articulo que tenga 
// los atributos privados marca y modelo. 
// ● Crear métodos públicos para la asignación de valores. 
// ● Crear una instancia y asignarle valores. 
// ● Notar que no es posible mostrar los valores 
//   por pantalla y analizar el motivo por lo que esto ocurre. 


export default class Articulo {
    //Creamos los atributos privados...
    private _marca: string;
    private _modelo: string;
    //Creamos el constructor que se pueda 
    // instanciar el objeto vacio...
    constructor(marca: string = "", modelo: string = "") {
        this._marca = marca;
        this._modelo = modelo;
    }
    //Creamos metodos o property public para set
    // los atributos _marca; _modelo;
    public set modelo(value: string){
        this._modelo = value;
    }
    public set marca(value: string){
        this._marca = value;
    }
        //Metodo mostrar por pantalla...
    public mostrarPorPantalla(){
        console.log(`La marca es: ${this._marca}`)
        console.log(`El modelo es: ${this._modelo}`)
    }
}
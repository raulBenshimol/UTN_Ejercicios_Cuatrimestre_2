
const greeting: string = 'Hello, TypeScript!'; 
console.log(greeting);

// Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado 
// patente. 
// ● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible 
// para la asignación de valores. 
// ● Mostrar por pantalla los valores asignados.

class Vehiculo {
    private _marca: string;
    private _modelo: string;
    private _patente: string;
    //Constructor vacio...
    constructor(marca: string = "", modelo: string = "", patente: string = "" ){
        this._marca = marca;
        this._modelo = modelo;
        this._patente = patente;
    }
    //Property for reading and writeng the mark...
    public get marca(): string{
        return this._marca;
    }
    public set marca(value: string){
        if(value.trim.length > 0)
            this._marca = value;
        console.log("No puede crear marca vacia....")
    }
    //Property for reading and writing the model...
    public get modelo(): string{
        return this._modelo;
    }
    public set modelo(value: string){
        this._modelo = value;
    }
    //Metodo mostrar por pantalla...
    public mostrarPorPantalla(){
        console.log(`La marca es: ${this.marca}`)
        console.log(`El modelo es: ${this.modelo}`)
        console.log(`La patente es: ${this._patente}`)
    }
}
function main(): void {
    const vehiculo1 = new Vehiculo("Chevrolet", "Corsa", "AF069CP")
    console.log(vehiculo1.modelo);
    vehiculo1.mostrarPorPantalla();
}
main();
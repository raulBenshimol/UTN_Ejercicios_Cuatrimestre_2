import Articulo from "./articulo";

// Crear una clase Articulo que tenga los atributos privados marca y modelo. 
//     ● Crear métodos públicos para la asignación de valores. 
//     ● Crear una instancia y asignarle valores. 
//     ● Notar que no es posible mostrar los valores por pantalla y analizar el motivo por lo que 
//       esto ocurre. 

function main(): void{
    //Crear una instancia y asignarle valores.
    const articulo1 = new Articulo()
    articulo1.marca = "SAmsumg";
    articulo1.modelo = "S25Pro"
    console.log(articulo1.modelo);
    articulo1.mostrarPorPantalla();
}
main();

//No muestra el objeto en:     articulo1.marca = "SAmsumg";  
//                             articulo1.modelo = "S25Pro";
// porque no tengo una property para leerlo y el atributo
// se encuentra private....
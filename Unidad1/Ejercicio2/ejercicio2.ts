import Vehiculo from "./vehiculo";

// Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado 
// patente. 
// ● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible 
// para la asignación de valores. 
// ● Mostrar por pantalla los valores asignados.


function main(): void {
    const vehiculo1 = new Vehiculo("Chevrolet", "Corsa", "AF069CP")
    console.log(vehiculo1.modelo);
    vehiculo1.mostrarPorPantalla();
}
main();
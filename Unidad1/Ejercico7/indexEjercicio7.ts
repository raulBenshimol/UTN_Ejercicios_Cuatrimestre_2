// Crear una clase Ninja con las variables privadas arteMarcial, arma, fuerza (entero) y salto 
// (entero). 
// ● Crear setters y getters manualmente. 
// ● Crear una función saltar() que reciba un parámetro multiplicador (entero); imprimir 
// por consola salto x parámetro. 
// ● Crear la función ataque() que imprima por consola el arma que usa el ninja y el 
// arte marcial. 
// ● Crear dos instancias de Ninja, asignar distintos valores para cada uno de los 
// atributos e invocar las funciones saltar() y ataque(). 

import Ninja from "./ninja";

const ninja1 = new Ninja("Karate-do", "Palo", 25, 5)
const ninja2 = new Ninja("taekwondo", "Cuchillo", 28, 7)

ninja1.saltar(5, ninja1);
ninja2.saltar(8, ninja2);
ninja1.ataque(ninja1);
ninja2.ataque(ninja2);


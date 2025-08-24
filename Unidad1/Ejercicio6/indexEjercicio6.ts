// Crear una clase Fruta con variables privadas color, peso, esEstacional. 
// ● Crear setters y getters. 
// ● Escribir una función llamada esComestible() que devuelva verdadero cuando la 
// fruta pesa menos de 200 gr y es de estación, y falso en cualquier otro caso. 
// ● Definir dos constructores de modo tal que la fruta pueda crearse con los valores 
// color, peso y estacional al momento de instanciarse, o bien crearse sin valores 
// iniciales. 

import Fruta from "./fruta";    

const fruta1 = new Fruta()
fruta1.color = "amarilla";
fruta1.peso = 100;
fruta1.esEstacional = false;
const fruta2 = new Fruta("roja", 199, true)

if (fruta2.esComestible(fruta2)){
    console.log("Es comestible...")
}
else{
    console.log("No es comestible...")
}

if (fruta1.esComestible(fruta1)){
    console.log("Es comestible...")
}
else{
    console.log("No es comestible...")
}
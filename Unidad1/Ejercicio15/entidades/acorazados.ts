import Navios from "./navios";
import UsoMilitar from "./usoMilitar";

export default class Acorazados extends Navios implements UsoMilitar{
    private _blindaje: string;
    private _potenciaFuego: string;

    public constructor(
        nombre: string, 
        velocidadCrucero: number, 
        flotabilidad: number, 
        estabilidad: string, 
        solidez: number, 
        blindaje: string, 
        potenciaFuego: string){
        super(nombre, velocidadCrucero, flotabilidad, estabilidad, solidez)
        this._blindaje = blindaje;
        this._potenciaFuego = potenciaFuego;
    }
    public mostrarDatos(): string {
                return `El destrucctor: ${this.nombre}, 
                Solidez: ${this.solidez} %, Blindaje: ${this._blindaje}, 
                Flotabilidad: ${this.flotavilidad} %, Estabilidad: ${this.estabilidad},
                Potencia de fuego: ${this._potenciaFuego}, Velocidad Crucero: ${this.velocidadCrucero} nudos.`;
    }
    public mostrarInfo(): string {
                return `Barco de uso bélico.`;
    }
} 

import Navios from "./navios";
import UsoMilitar from "./usoMilitar";

export default class Destructores extends Navios implements UsoMilitar{
    private _maniobrabilidad: string;
    private _potenciaFuego: string;

    public constructor(
        nombre: string, 
        velocidadCrucero: number, 
        flotabilidad: number, 
        estabilidad: string, 
        solidez: number, 
        maniobrabilidad: string, 
        potenciaFuego: string){
        super(nombre, velocidadCrucero, flotabilidad, estabilidad, solidez)
        this._maniobrabilidad = maniobrabilidad;
        this._potenciaFuego = potenciaFuego;
    }
    public mostrarDatos(): string {
        return `El destrucctor: ${this.nombre}, Velocidad Crucero: ${this.velocidadCrucero}, 
                Flotabilidad: ${this.flotavilidad}, Estabilidad: ${this.estabilidad},
                Solidez: ${this.solidez}, Maniobrabilidad: ${this._maniobrabilidad}, 
                Potencia de fuego: ${this._potenciaFuego}`;
    }
    public mostrarInfo(): string {
        return `Barco de uso bélico, Los destructores se caracterizan por la potencia de fuego y
                altos índices de maniobrabilidad y estabilidad cuando alcanza su velocidad máxima`;
    }
} 
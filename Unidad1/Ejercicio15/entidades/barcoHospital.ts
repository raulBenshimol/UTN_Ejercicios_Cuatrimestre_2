import Navios from "./navios";
import UsoMedico from "./usoMedico";

export default class BarcoHospital extends Navios implements UsoMedico{

    private _capacidadCarga: number;

    public constructor(velocidadCrucero: number, flotabilidad: number, estabilidad: string, solidez: number, capacidadCarga: number){
        super("Sibelancia", velocidadCrucero, flotabilidad, estabilidad, solidez)
        this._capacidadCarga = capacidadCarga;
    }
    public get capacidadCarga(){
        return this._capacidadCarga;
    }
    public mostrarDatos(): string {
        return `Barco: ${this.nombre}, Velocidad crucero: ${this.velocidadCrucero} nudos, 
                Flotabilidad: ${this.flotavilidad}%, Estabilidad: ${this.estabilidad}, 
                Solidez: ${this.solidez}%, Capacidad de carga: ${this._capacidadCarga}%.`;
    }
    public mostrarInfo(): string {
        return `Barco Hospital, con excelente flotabilidad y una 
                estabilidad extrema que la hace ideal para su trabajo, 
                posee una capacidad de carga que le permite brindar 
                servicios a setenta y cinco pacientes.`;
    }
}
import Lanchas from "./lanchas";
import UsoMedico from "./usoMedico";

export default class Gaucho extends Lanchas implements UsoMedico{
    
    public constructor(flotabilidad: number, estabilidad: string, maniobrabilidad: string, capacidadCarga: number) {
    super("Gaucho", flotabilidad, estabilidad, maniobrabilidad, capacidadCarga);
    }
    public mostrarDatos(): string {
        return `Lancha: ${this.nombre}, Flotabilidad: ${this.flotabilidad}, Estabilidad: ${this.estabilidad}, Maniobrabilidad: ${this.manibrabilidad}, Capacidad de Carga: ${this.capacidadCarga}`;
    }

    public mostrarInfo(): string {
        return `La lancha Gaucho, hermana de Gaucha, está equipada para uso médico, se 
                emplean para salvatajes rápidos; poseen motor fuera de borda,  
                posee una grúa pequeña que les permite subir 
                y/o arriar objetos de hasta trescientos kilos.`;
    }
}
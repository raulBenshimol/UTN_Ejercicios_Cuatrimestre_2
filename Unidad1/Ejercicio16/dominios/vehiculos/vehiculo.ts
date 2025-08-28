import Elemento from "../elementos/elemento";

export default abstract class Vehiculo {

    protected carga: Elemento[] = [];

    constructor(protected capacidadMaxima: number) {}

    abstract cargar(item: Elemento): void;

    abstract listarItems(): void;
}

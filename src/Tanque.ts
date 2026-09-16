export class Tanque {
    constructor(
        private _nombre: string,
        private _salud: number,
    ) {}
    getNombre(): string {
        return this._nombre;
    }
    getSalud(): number {
        return this._salud;
    }
}
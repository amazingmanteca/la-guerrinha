export class Soldado {
    constructor(
        private _id: string,
        private _salud: number,
    ) {}

    getId(): string {
        return this._id;
    }

    getSalud(): number {
        return this._salud;
    }

}
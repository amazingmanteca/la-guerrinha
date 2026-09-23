export class Soldado {
    private _id: string
    private _vida: number = 0 ;
    constructor(
        id: string
    ) {this._id = id; this._vida = 100;}

    getId(): string {
        return this._id;
    }
    get vida(): number {
        return this._vida;
    }
    set vida(nuevaVida: number) {
        this._vida = nuevaVida;
    }


    public recibirDisparo(): string {
        this.vida = this.vida - 1;
        return "Disparo recibido";
    }
    public disparar(objetivo: Soldado): string {
        objetivo.recibirDisparo();
        return "Disparo realizado";
    }
    public get estaVivo(): boolean {
        return this.vida > 0;
    }

}
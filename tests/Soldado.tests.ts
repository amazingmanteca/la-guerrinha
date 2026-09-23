import { describe, expect, test } from "vitest";
import { Soldado } from "../src/Soldado";

describe (Soldado, () => {
    test("debe crear un soldado con id", () => {
        var S01 = new Soldado("S01");
        var S02 = new Soldado("S02");
        expect(S01.getId()).toBe("S01");
        expect(S02.getId()).toBe("S02");
    });
    test("debe disparar", () => {
        var S01 = new Soldado("S01");
        var S02 = new Soldado("S02");
        S01.disparar(S02);
        expect(S01.disparar(S02)).toBe("Disparo realizado");
        expect(S02.recibirDisparo()).toBe("Disparo recibido");
    })
});
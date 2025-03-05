class Cachorro extends Mamifero {
    constructor(especie, dieta, raca,) {
        super(especie, dieta);
        this.raca = raca;
    }

    exibirRaca() {
        console.log("Raça: " + this.raca);
    }
}
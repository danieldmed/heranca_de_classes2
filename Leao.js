class Leao extends Mamifero {
    constructor(especie, dieta, docil) {
        super(especie, dieta);
        this.docil = docil;
    }

    exibirDocil() {
        console.log("Dócil: " + this.docil);
    }
}
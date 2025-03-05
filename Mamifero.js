class Mamifero {
    constructor(especie, dieta) {
        this.especie = especie;
        this.dieta = dieta;
    }

    exibirInformacoes() {
        console.log('Espécie: ' + this.especie + ", Dieta: " + this.dieta);
    }
}
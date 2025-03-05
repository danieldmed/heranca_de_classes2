class Humano extends Mamifero {
    constructor(especie, dieta, nome, id) {
        super(especie, dieta);
        this.nome = nome;
        this.id = id;
    }

    exibirNomeId() {
        console.log("Nome: " + this.nome + ", ID: " + this.id);
    }
}
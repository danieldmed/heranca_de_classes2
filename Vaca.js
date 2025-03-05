class Vaca extends Mamifero {
    constructor(especie, dieta, sexo) {
    super(especie, dieta);
    this.sexo = sexo;
    }

    exibirSexo() {
        console.log("Sexo: " + this.sexo);
    }
}
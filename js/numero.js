const maiorValor = 100
const menorValor = 1
const numeroAleatorio = gerarNumero()
const elementoMenorValor = document.getElementById("menor-valor")
const elementoMaiorValor = document.getElementById("maior-valor")

function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroAleatorio)
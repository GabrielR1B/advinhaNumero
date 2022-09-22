function verificaChute(chute) {
    const numero = +chute

    if (verificaNumeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Invalido<div>'
        return
    }
    
    if (numeroForaPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor Invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}<div>`
        return
    }
    if (numero == numeroAleatorio) {
        document.body.innerHTML = `<h2>Você acertou!<h2>
                  <h3> O numero secreto era ${numeroAleatorio}
                     <button id = "jogar-novamente" class = "btn-jogar">Jogar Novamente</button> `

    }

    else if (numero < numeroAleatorio) {
        elementoChute.innerHTML += `<div> o numero secreto e maior <i class = "fa-solid fa-up-long"></i></div>`
    }
    else {
        elementoChute.innerHTML += `<div> o numero secreto e menor <i class = "fa-solid fa-down-long"></i></div>`
    }
    
}

function verificaNumeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        atualizaEstatistica(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca);
        manipulaContador(evento.target.dataset.controle, evento.target.parentNode);
    })
})

function atualizaEstatistica(operacao, controle, peca) {
    const contador = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        if (contador.value > 0) {
            estatisticas.forEach((elemento) => {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
            })
        }
    } else {
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
    }
}

function manipulaContador(operacao, controle) {
    const contador = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        if (contador.value > 0) {
            contador.value = parseInt(contador.value) - 1;
        }
    } else {
        contador.value = parseInt(contador.value) + 1;
    }
}
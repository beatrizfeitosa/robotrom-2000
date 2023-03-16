const lista = document.querySelector(".lista")
const mostrar = document.querySelector("#botaoMostrar")
const esconder = document.querySelector("#botaoEsconder")

//utilizei o data-attributes pra decidir quando ocultar ou não algum elemento
mostrar.addEventListener("click", () => {
    lista.setAttribute("data-view", "mostrar");
    esconder.setAttribute("data-view", "mostrar");
    mostrar.setAttribute("data-view", "esconder");
})

esconder.addEventListener("click", () => {
    lista.setAttribute("data-view", "esconder");
    esconder.setAttribute("data-view", "esconder");
    mostrar.setAttribute("data-view", "mostrar");
})
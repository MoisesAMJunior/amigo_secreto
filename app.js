//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let campoNomeAmigo = document.querySelector("input");

function validarEntrada() {
    let nomeAmigo = campoNomeAmigo.value.trim(); // Pega o valor atualizado do campo
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido");
    } else {
        amigos.push(nomeAmigo);
        atualizarAmigos();
        limparEntrada(); // Limpa a entrada após adicionar
    }
}

function limparEntrada() {
    campoNomeAmigo.value = ""; // Limpa o campo de entrada na interface
}

function adicionarAmigo() {
    validarEntrada(); // Validar e adicionar
}

function atualizarAmigos() {
    let lista = document.getElementById("resultado");
    lista.innerHTML = ""; // Limpa a lista atual
    for (let i = 0; i < amigos.length; i++) {
        let novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigos[i];
        lista.appendChild(novoAmigo); // Adiciona o novo amigo à lista
    }
}

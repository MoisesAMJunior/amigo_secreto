// O principal objetivo deste desafio é fortalecer habilidades em lógica de programação.
// Lógica do jogo de amigo secreto
let amigos = [];
const campoNomeAmigo = document.querySelector("input");
const lista = document.getElementById("resultado"); // Elemento para exibir a lista de amigos

// Valida a entrada, adiciona amigo e atualiza a lista
function adicionarAmigo() {
    const nomeAmigo = campoNomeAmigo.value.trim(); // Remove espaços desnecessários

    if (nomeAmigo === "") { // Verifica se o campo está vazio
        alert("Por favor, insira um nome válido.");
        return; // Sai da função se a condição for verdadeira
    }

    if (amigos.includes(nomeAmigo)) { // Verifica duplicatas
        alert("Esse nome já foi adicionado à lista.");
        return; // Sai da função se a condição for verdadeira
    }

    // Adiciona o nome ao array
    amigos.push(nomeAmigo);
    atualizarAmigos(); // Atualiza a lista exibida
    limparEntrada(); // Limpa o campo de entrada
}

// Limpa o campo de entrada do nome do Amigo
function limparEntrada() {
    campoNomeAmigo.value = "";
}

// Atualiza a lista exibida na página
function atualizarAmigos() {
    lista.innerHTML = ""; // Limpa a lista antes de recriá-la

    amigos.forEach((amigo) => { // Loop otimizado com forEach
        const novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigo;
        lista.appendChild(novoAmigo);
    });
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há amigos na lista
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de realizar o sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatório
    const amigoSorteado = amigos[indiceAleatorio]; // Nome correspondente

    // Atualiza a exibição do sorteio no elemento "resultado"
    lista.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`; 
}

// Inicia um novo jogo
function novoJogo() {
    amigos = []; // Limpa o array de amigos
    lista.innerHTML = ""; // Limpa a lista
    limparEntrada(); // Limpa o campo de entrada
}

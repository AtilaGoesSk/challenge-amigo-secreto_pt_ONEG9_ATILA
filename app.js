//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosSorteio = [];
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    const nomeMinusculo = nome.toLowerCase();
    if (amigosSorteio.some(amigo => amigo.toLowerCase() === nomeMinusculo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    if (nome.length > 30) {
        alert('O nome deve ter no máximo 30 caracteres!');
        return;
    }

    amigosSorteio.push(nome);
    inputAmigo.value = '';
    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);
}

function filtrarInput(event) { //validação para aceitar apenas letras (com ou sem acentos) e espaços utilizando regex
    const input = event.target;
    const regex = /^[a-zA-Zà-ÿ\s]*$/;
    if (!regex.test(input.value)) {
        input.value = input.value.replace(/[^a-zA-Zà-ÿ\s]/g, '');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('input', filtrarInput);
});
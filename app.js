//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosSorteio = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        inputAmigo.focus(); 
        return;
    }

    const nomeMinusculo = nome.toLowerCase();
    if (amigosSorteio.some(amigo => amigo.toLowerCase() === nomeMinusculo)) {
        alert('Este nome já foi adicionado! Digite outro.');
        inputAmigo.focus();
        return;
    }

    if (nome.length > 30) {
        alert('O nome deve ter no máximo 30 caracteres!');
        inputAmigo.focus();
        return;
    }

    amigosSorteio.push(nome);
    inputAmigo.value = '';
    inputAmigo.focus();

    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);
}
function filtrarInput(event) {
    const input = event.target;
    const regex = /^[a-zA-Zà-ÿ\s]*$/; //utiliza regex pra filtrar
    if (!regex.test(input.value)) {
        input.value = input.value.replace(/[^a-zA-Zà-ÿ\s]/g, '');
    }
}

function sortearAmigo() {
    if (amigosSorteio.length === 0) {
        alert('Adicione pelo menos um amigo à lista antes de sortear!');
        document.getElementById('amigo').focus();
        return;
    }
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    // Seleciona um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigosSorteio.length);
    const amigoSorteado = amigosSorteio[indiceAleatorio];

    const novoItem = document.createElement('li');
    novoItem.textContent = `O amigo secreto sorteado é: ${amigoSorteado}!`;
    novoItem.style.textAlign = 'center';
    resultadoLista.appendChild(novoItem);
    resultadoLista.scrollIntoView({ behavior: 'smooth' });//scroll
}

function limparLista() {
    const confirmacao = confirm('Tem certeza que deseja limpar a lista de amigos? Isso removerá todos os nomes adicionados.');
    
    if (confirmacao) {
        amigosSorteio = [];
        
        const listaAmigos = document.getElementById('listaAmigos');
        const resultadoLista = document.getElementById('resultado');
        listaAmigos.innerHTML = '';
        resultadoLista.innerHTML = '';
        
        const inputAmigo = document.getElementById('amigo');
        inputAmigo.focus();
   
        alert('Lista limpa com sucesso! Adicione novos amigos.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('input', filtrarInput);
    inputAmigo.focus(); // Foca no input ao carregar a página
});
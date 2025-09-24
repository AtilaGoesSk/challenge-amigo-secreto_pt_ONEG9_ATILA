# Amigo Secreto

![Amigo Secreto Banner](assets/amigo-secreto.png)  
*Uma aplicação web simples e divertida para organizar sorteios de amigo secreto!*

## Descrição

Este projeto é uma aplicação web interativa que permite aos usuários adicionar nomes de amigos a uma lista e realizar um sorteio aleatório para escolher o "amigo secreto". É ideal para festas, eventos ou brincadeiras em grupo. A interface é clean e responsiva, com validações para evitar erros comuns, como nomes duplicados ou vazios.

O app é construído com tecnologias básicas da web: HTML para estrutura, CSS para estilização e JavaScript para a lógica interativa. Não requer servidor ou dependências externas – basta abrir o arquivo `index.html` no navegador!

## Funcionalidades

- **Adicionar Nomes**: Digite um nome no campo de texto e clique em "Adicionar". Os nomes são exibidos em uma lista visível.
- **Validações**:
  - Campo vazio: Exibe um alerta solicitando um nome válido.
  - Nomes duplicados: Impede adição de nomes iguais (ignora maiúsculas/minúsculas).
  - Caracteres inválidos: Aceita apenas letras (com ou sem acentos) e espaços, removendo outros em tempo real.
  - Limite de caracteres: Máximo de 30 caracteres por nome.
- **Sorteio Aleatório**: Clique em "Sortear Amigo" para selecionar um nome da lista de forma randômica. O resultado é exibido em destaque (em verde).
- **Limpar Lista**: Um botão para resetar tudo, com confirmação para evitar acidentes. Remove nomes da lista, limpa o array e o resultado anterior.
- **Acessibilidade**: Inclui `aria-label` e `aria-live` para leitores de tela, e foco automático no input para melhor usabilidade.
- **Visual**: Design moderno com gradientes, fontes Google (Inter e Merriweather) e ícones. A página é centralizada e adaptável a telas menores.

## Como Usar

1. **Instalação**:
   - Baixe ou clone o repositório.
   - Certifique-se de que a pasta `assets` contém as imagens: `amigo-secreto.png` e `play_circle_outline.png` (você pode usar placeholders se não tiver).
   - Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, etc.).

2. **Passos no App**:
   - Digite um nome no campo "Digite um nome" e clique "Adicionar". Repita para mais amigos.
   - A lista de nomes aparece abaixo.
   - Clique "Sortear Amigo" para ver o resultado aleatório.
   - Use "Limpar Lista" para recomeçar (confirme na popup).

Exemplo de uso:
- Adicione: "João", "Maria", "Pedro".
- Sorteie: Pode sair "Maria" como amiga secreta.
- Limpe: Confirme e a lista some.

## Estrutura de Arquivos

```
projeto-amigo-secreto/
├── index.html          # Estrutura principal da página (inputs, botões, listas)
├── style.css           # Estilos visuais (cores, layouts, responsividade)
├── app.js              # Lógica JavaScript (adição, validação, sorteio, limpeza)
└── assets/             # Pasta para imagens
    ├── amigo-secreto.png      # Imagem do banner
    └── play_circle_outline.png # Ícone do botão de sorteio
```

- **index.html**: Contém o layout com seções para input, lista e botões.
- **style.css**: Define variáveis CSS (cores), flexbox para layout e hover effects.
- **app.js**: Gerencia o array de amigos, eventos e funções principais.

## Tecnologias Utilizadas

- **HTML5**: Para semântica e acessibilidade.
- **CSS3**: Com variáveis CSS, Flexbox e bordas arredondadas.
- **JavaScript (Vanilla)**: Lógica pura, sem frameworks. Usa o DOM para manipular elementos.
- **Google Fonts**: Inter (moderna) e Merriweather (títulos elegantes).
- **Navegadores Suportados**: Qualquer moderno (ES6+).

## Funções Nativas do JavaScript Utilizadas

O JavaScript é o coração do app, manipulando o DOM e lidando com eventos. Aqui vão as principais funções nativas usadas, com explicações simples:

- **`document.getElementById(id)`**: Busca um elemento HTML pelo ID (ex.: pega o input `#amigo` ou listas `#listaAmigos` e `#resultado`).
- **`element.value` e `element.trim()`**: Lê e limpa o texto do input (remove espaços extras).
- **`string.toLowerCase()`**: Converte texto para minúsculas, usado para checar duplicados sem diferenciar maiúsculas.
- **`array.some(callback)`**: Verifica se algum item no array atende a uma condição (ex.: se o nome já existe).
- **`array.push(item)`**: Adiciona um nome ao array `amigosSorteio`.
- **`document.createElement('tag')` e `parent.appendChild(child)`**: Cria um `<li>` novo e adiciona à lista visual.
- **`element.addEventListener('event', callback)`**: Escuta eventos, como 'input' no campo de texto para filtrar caracteres em tempo real.
- **`Math.random()` e `Math.floor()`**: Gera um número aleatório entre 0 e 1, multiplica pelo tamanho do array e arredonda para baixo, selecionando um índice randômico para o sorteio.
- **`element.innerHTML = ''`**: Limpa o conteúdo de uma lista (remove todos os `<li>` de uma vez).
- **`element.focus()`**: Coloca o cursor no input automaticamente (melhora a experiência do usuário).
- **`confirm(mensagem)`**: Mostra uma popup de confirmação (sim/não) para o botão "Limpar Lista".
- **`alert(mensagem)`**: Exibe popups de erro ou sucesso (ex.: "Nome duplicado!" ou "Lista limpa!").
- **`DOMContentLoaded` event**: Espera a página carregar completamente antes de adicionar listeners, evitando erros.

Exemplo de código chave (sorteio):
```javascript
const indiceAleatorio = Math.floor(Math.random() * amigosSorteio.length);
const amigoSorteado = amigosSorteio[indiceAleatorio];
```

Essas funções são nativas do JS (sem bibliotecas), tornando o app leve e fácil de entender.

## Notas e Limitações

- **Sorteio Simples**: Escolhe um nome aleatório da lista. Para um amigo secreto "real" (onde cada um tira um diferente, sem si mesmo), seria preciso um algoritmo mais complexo (permutação).
- **Persistência**: A lista some ao recarregar a página. Para salvar, poderia adicionar `localStorage` (fácil de implementar!).
- **Responsividade**: Funciona em mobile, mas teste em telas pequenas para ajustes finos no CSS.
- **Melhorias Futuras**: Adicionar remoção individual de nomes, animações no sorteio ou exportar a lista para PDF.

## Contribuições

Sinta-se à vontade para forkear, sugerir melhorias ou reportar issues! Este projeto foi desenvolvido como um exercício de lógica de programação. Se tiver dúvidas, abra uma discussão.

Feito com ❤️ por [https://github.com/AtilaGoesSk].

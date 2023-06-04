const grid = document.querySelector('.grid'); // Seleciona o elemento HTML com a classe 'grid'
const spanPlayer = document.querySelector('.player'); // Seleciona o elemento HTML com a classe 'player'
const timer = document.querySelector('.timer'); // Seleciona o elemento HTML com a classe 'timer'

const characters = [
  'morgana',
  'nidale',
  'lulu',
  'nami',
  'luxx',
  'teemoo',
  'kogmaw',
  'ahri',
  'amumu',
  'sorakaa',
];

var score = 0

// Função auxiliar para criar um elemento HTML com a tag e classe especificadas
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = ''; // Variável para armazenar a primeira carta selecionada
let secondCard = ''; // Variável para armazenar a segunda carta selecionada

// Função para verificar o fim do jogo
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) { // Se todas as cartas tiverem sido desabilitadas
    clearInterval(this.loop); // Para o intervalo de tempo
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
  }
}

// Função para verificar as cartas selecionadas
const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) { // Se as duas cartas forem iguais
      score = score + 10
      pontos.innerHTML = `${score}`

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = ''; // Limpa a primeira carta selecionada
    secondCard = ''; // Limpa a segunda carta selecionada

    checkEndGame();

  } else {
    setTimeout(() => { // Se as cartas forem diferentes, aguarda 500ms e esconde as cartas novamente

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = ''; // Limpa a primeira carta selecionada
      secondCard = ''; // Limpa a segunda carta selecionada

    }, 500);
  }

}

// Função para revelar a carta quando clicada
const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') { // Se a primeira carta ainda não foi selecionada

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {  // Se a primeira carta já foi selecionada e a segunda ainda não

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

// Função para criar uma carta com o personagem especificado
const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('./img/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

// Função para carregar o jogo
const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

// Função para iniciar o cronômetro
const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player'); // Obtém o nome do jogador armazenado no localStorage
  startTimer(); // Inicia o cronômetro
  loadGame(); // Carrega o jogo
}

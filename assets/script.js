const cards = document.querySelectorAll('.card');
const selectedPlayer = document.querySelector('#selectedPlayer');
const showPlayerBtn = document.querySelector('#showPlayer');
let randomPlayer;

const players = ['debruyne', 'ramos', 'ronaldo', 'messi', 'neuer', 'Sneijder'];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetGame() {
    shuffle(players);
    cards.forEach((card, index) => {
        card.dataset.player = players[index];
        const img = card.querySelector('img');
        img.src = `./assets/img/${players[index]}.jpg`;
        img.classList.add('hidden');
        card.addEventListener('click', handleCardClick);
    });
    randomPlayer = players[Math.floor(Math.random() * players.length)];
    selectedPlayer.textContent = `Bu oyuncuyu tap:${randomPlayer}`;
    selectedPlayer.classList.remove('hidden')
}

function handleCardClick(event) {
    const clickedCard = event.currentTarget;
    const img = clickedCard.querySelector('img');
    const body = document.querySelector('body');
    img.classList.remove('hidden');
    if (clickedCard.dataset.player === randomPlayer) {
        selectedPlayer.textContent = `Təbriklər ${randomPlayer}'i tapdınız`;
        cards.forEach(card => card.removeEventListener('click', handleCardClick));
        body.style.backgroundColor = '#32CD32';
        setTimeout(() => {
            body.style.backgroundColor = ''
        }, 1000);
    }
}
showPlayerBtn.addEventListener('click', resetGame);
resetGame()

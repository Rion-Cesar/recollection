const grid = document.getElementById('campo-jogo');

const fruits = [
    'maçã',
    'banana',
    'pitaya',
]

const createCard = () => {

    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);

}

const loadGame = () => {
    fruits.forEach((fruit) => {

        createCard();

    });
}
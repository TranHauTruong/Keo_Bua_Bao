function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log();
const PlayGame = ['keo', 'bua', 'bao'];
let playerChoose = document.querySelectorAll('.inputPlayer');

for (let index = 0; index <= playerChoose.length - 1; index++) {
    playerChoose[index].addEventListener('click', (e) => {
        const PlayerOne = e.target.innerHTML;
        GamePlay({ PlayGame, PlayerOne })
    });
}


function Compare(Star) {
    switch (Star) {
        case 'keobao':
        case 'buakeo':
        case 'baobua':
            return 'win'
        case 'keobua':
        case 'baokeo':
        case 'buabao':
            return 'lose'
        case 'keokeo':
        case 'buabua':
        case 'baobao':
            return '=';
    }
}

function sum(elemenOne, elemenTwo) {
    return elemenOne + elemenTwo
}

function GamePlay(options) {
    const { PlayGame, PlayerOne } = options;
    console.log({ PlayerOne });

    const PlayerTwo = random(PlayGame);
    console.log({ PlayerTwo });

    const sumTypes = sum(PlayerOne, PlayerTwo);

    console.log({ sumTypes });
    console.log(Compare(sumTypes));

    document.querySelector('.playerOne').innerHTML = PlayerOne;
    document.querySelector('.playerTwo').innerHTML = PlayerTwo;

    document.querySelector('.message').innerHTML = Compare(sumTypes);
}



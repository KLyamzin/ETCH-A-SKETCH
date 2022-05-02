const tiles = document.querySelector('.tiles');
let selector = document.querySelector('#selector');
const clear = document.querySelector('clear');

function createTiles(size) {
    tiles.style.setProperty('--size', size);
    for (i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('aTile');
        tiles.appendChild(div);
    }
}
createTiles(16)
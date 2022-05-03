const tiles = document.querySelector('.tiles');
let selector = document.querySelectorAll('input[name="mySelect"]');
const clear = document.getElementById('clear');
let val;

function createTiles(size) {
    tiles.style.setProperty('--size', size);
    for (i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('aTile');
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = '#f70030';
        })
        tiles.appendChild(div);
    }
}

function reset() {
    tiles.innerHTML = '';
    createTiles(val);
}
clear.addEventListener('click', reset)


for (let i = 0; i < selector.length; i++) {
    selector[i].addEventListener("change", function () {
        val = this.value;
        reset();
    })
}
createTiles(val);
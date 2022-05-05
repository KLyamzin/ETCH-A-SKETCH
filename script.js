const tiles = document.querySelector('.tiles');
let selector = document.querySelectorAll('input[name="mySelect"]');
const clear = document.getElementById('clear');
const color = document.querySelector('.color');
let rainbowBtn = document.getElementById('rainbowBtn');
let val = 16;//default
let currentMode = false;

function createTiles(size) {
    tiles.style.setProperty('--size', size);
    for (i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('aTile');
        div.addEventListener('mouseover', function () {
            //use the picked color
            if (!currentMode) { div.style.backgroundColor = color.value; }
            // generate the rgb collors
            if (currentMode) {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                let rgb = `rgb(${r}, ${g}, ${b})`;
                div.style.backgroundColor = rgb;
            }
        })
        tiles.appendChild(div);
    }
}
//generate rainbow effect
rainbowBtn.addEventListener("click", function () {
    currentMode = true;
})

//match color picker border color & switch back to color picker
color.addEventListener("change", function () {
    color.style.borderColor = color.value;
    currentMode = false;
})

//clear the grid
function reset() {
    tiles.innerHTML = '';
    createTiles(val);
}
clear.addEventListener('click', reset)

//change the grid size
for (let i = 0; i < selector.length; i++) {
    selector[i].addEventListener("change", function () {
        val = this.value;
        reset();
    })
}
createTiles(val);

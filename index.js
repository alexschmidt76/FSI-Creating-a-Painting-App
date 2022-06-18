let currentColor = 'blue';

function selectColor(e) {
    currentColor = e.target.id;
    console.log(currentColor);
}

let colorChoices = document.querySelectorAll('.color-choice');

for(let i = 0; i < colorChoices.length; i++) {
    colorChoices[i].addEventListener('click', selectColor);
}

let pixels = document.querySelectorAll('.pixel');

function paint(e) {
    e.target.style.backgroundColor = currentColor;
}

for(let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mouseover', paint);
}
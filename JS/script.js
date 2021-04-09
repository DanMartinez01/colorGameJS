
let numCuadrados = 6;
let colors = generateRandomColors(numCuadrados);
let cuadrados = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

//modoEasy
easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numCuadrados = 3;
    colors = generateRandomColors(numCuadrados);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < cuadrados.length; i++) {
        if (colors[i]) {
            cuadrados[i].style.backgroundColor = colors[i];
        }
        else {
            cuadrados[i].style.display = "none";
        }
    }
});

//modoHard
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numCuadrados = 6
    colors = generateRandomColors(numCuadrados);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.background = colors[i];
        cuadrados[i].style.display = "block";
    }
});

//button para resetear
resetButton.addEventListener('click', function () {
    colors = generateRandomColors(numCuadrados);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New colors";
    message.textContent = "";

    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "rgb(70, 130, 180)";
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener("click", function () {
        clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!";
            resetButton.textContent = "Play again!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            cuadrados[i].style.backgroundColor = "rgb(35, 35, 35)";
            message.textContent = "Try again!";
        }
    })
}

function changeColor() {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = pickedColor;
    }
}
//elegir un color
function pickColor() {
    let colorRandom = Math.floor(Math.random() * colors.length);
    return colors[colorRandom];
}



//agregar color a cuadrados y color transparente
for (let i = 0; i < colors.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener('click', function () {
        clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            changeColor()

        }
        else {
            this.style.backgroundColor = "transparent";
        }
    })
}

function generateRandomColors(numCuadrados) {
    let colorRandom = [];
    for (let i = 0; i < numCuadrados; i++) {
        colorRandom.push(randomColor());
    }

    return colorRandom;
}

//crear colores rgb random
function randomColor() {
    let r = Math.floor(Math.random() * (256 - 0)) + 0;
    let g = Math.floor(Math.random() * (256 - 0)) + 0;
    let b = Math.floor(Math.random() * (256 - 0)) + 0;
    return `rgb(${r}, ${g}, ${b})`;

}








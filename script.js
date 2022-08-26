const monty = document.querySelector('.monty');
const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const montyness = document.querySelector('.monty-scale');
const displayDim = document.querySelector('.display-dim');
const penColorPicker = document.getElementById('pen-color');
const gridColorPicker = document.getElementById('grid-color');
const body = document.querySelector('body');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const montyDisplay = document.getElementById("display-monty")
const montyDisplay1 = document.getElementById("display-monty1")

// default pen and grid colors and grid dimensions
let penColor = '#000000';
let penBackup= '#000000';
let gridColor= 'rgb(255, 255, 255)';
let dimension = 16;
let montyFlag = false;
let montyCount = 0;
let montyScale = 0;

// flags
let isDrag = false;
let rainbowFlag = false;
let eraserFlag = false;

// display the dimensions
function updateSize(gridSize) {
    dimension = gridSize
    displayDim.innerHTML = `${dimension} x ${dimension}`
}

function populateContainer (gridSize){
    dimension = gridSize
    // clear the current container
    clearContainer();
    // find width of container div
    const containerWidth = container.clientWidth;
    // calculate the width of each internal div
    const gridDim = (containerWidth/parseInt(dimension));
    console.log(montyScale);
    console.log(montyFlag);
    for (i = 0; i < dimension**2; i++) {
        const gridEl = document.createElement('div');
        // set width and height of grid elements to appropriate value
        gridEl.style.width = `${gridDim}px`;
        gridEl.style.height = `${gridDim}px`;
        gridEl.style.backgroundColor = gridColor;
        container.appendChild(gridEl);
        // add event listeners to adjust isdrag flag
        // initiate changeGridColor function when mouse clicks or 
        gridEl.addEventListener('mouseover',changeGridElColor);
        gridEl.addEventListener('mousedown',changeGridElColor);
        gridEl.addEventListener('click',changeGridElClick);
    }
}

// handle logic for pen color
function getPenColor(){

    if (!rainbowFlag && !eraserFlag){
        penColor = penBackup;
    }else if (rainbowFlag){
        penColor = randomColorVal();
        console.log(penColor);
    }else{
        penColor = gridColor;
    }
}

function changeGridElColor(e) {
    if (!isDrag) return;
    getPenColor();
    this.style.backgroundColor = penColor;
    this.style.opacity = 1;
    if (montyFlag){
        this.style.opacity = .2;
    }
}

function changeGridElClick(e) {
    getPenColor();
    this.style.backgroundColor = penColor;
}

function changeGridColor(newGridColor){
    gridElList = [...container.children];
    // change the hex color format provided by the color picker 
    newRGB = hexToRgb(newGridColor);
    gridElList.forEach((gridEl) => {
        // if the current grid element color = the current grid color, change it to the new color
        console.log(gridEl.style.backgroundColor == gridColor)
        if (gridEl.style.backgroundColor == gridColor){
            gridEl.style.backgroundColor = newRGB;
        }
    });
    // store the new grid color in the global variable for future comparison
    gridColor = newRGB;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const red = parseInt(result[1], 16);
    const green = parseInt(result[2], 16);
    const blue = parseInt(result[3], 16);
    return `rgb(${red}, ${green}, ${blue})`;
  }

function changePenColor(color){
        penColor = color;
        penBackup = penColor;
}

function getGridColor(color){
    gridColor = color;
}

// button 'onclick' functions
function clearContainer(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function randomColorVal(){
    red = randomColorInt();
    green = randomColorInt();
    blue = randomColorInt();
    return `rgb(${red}, ${green}, ${blue})`;

}

function randomColorInt(){
    return Math.floor(Math.random()*(255))
}

// change eraser button text
function toggleEraser(){
    eraserFlag = !eraserFlag
    if (rainbowFlag && eraserFlag){
        toggleRainbow();
    }
    if (eraserFlag){
        eraser.textContent = 'Remove eraser'
    } else{
        eraser.textContent = 'Add eraser'
    }
}
// change rainbow button text
function toggleRainbow(){
    rainbowFlag = !rainbowFlag
    if (rainbowFlag && eraserFlag){
        toggleEraser();
    }

    if (rainbowFlag){
        rainbow.textContent = 'remove rainbow';
    }else{
        rainbow.textContent = 'add rainbow';
    }
}

function montyAdjust(montyVal){
    populateContainer(dimension);
    montyScale = parseInt(montyVal);
    montyDisplay.textContent = `Montyness: ${montyVal}`
    // display how monty
    if (montyScale >0){
        montyDisplay1.textContent ='Draw to reveal the Montyness'
        montyFlag = true;
        if (montyScale ===1){
            container.style.backgroundImage = "url('./images/montyGovernment.jpg')"
            container.style.backgroundSize = "500px 500px";
            container.style.backgroundRepeat = "no-repeat";
        } else if (montyScale === 2 ){
            container.style.backgroundImage = "url('./images/montyScratch.jpg')"
            container.style.backgroundSize = "500px 500px";
            container.style.backgroundRepeat = "no-repeat";
        }else if (montyScale === 3 ){
            container.style.backgroundImage = "url('./images/montyShrubbery.jpg')"
            container.style.backgroundSize = "500px 500px";
            container.style.backgroundRepeat = "no-repeat";
        }else if (montyScale === 4 ){
            container.style.backgroundImage = "url('./images/montyTaunt.jpg')"
            container.style.backgroundSize = "500px 500px";
            container.style.backgroundRepeat = "no-repeat";
        }else if (montyScale === 5 ){
            container.style.backgroundImage = "url('./images/montyWitch.png')"
            container.style.backgroundSize = "500px 500px";
            container.style.backgroundRepeat = "no-repeat";
        }

    }else{
        montyFlag = false;
        montyDisplay1.textContent = 'I fart in your general direction'
    }
}

// listen for change in dimension
slider.onmousemove = (e) => updateSize(e.target.value);
slider.onchange = (e) => populateContainer(e.target.value);
// listen for change in montyness
montyness.onchange = (e) => montyAdjust(e.target.value);


// listen for change in colors
penColorPicker.onchange = (e) => changePenColor(e.target.value);
gridColorPicker.onchange = (e) => changeGridColor(e.target.value);

// handle whether or not user is still holding the mouse down to draw
container.addEventListener('mousedown',() => isDrag = true);
body.addEventListener('mouseup',()=> isDrag = false);

populateContainer(dimension);
updateSize(dimension);

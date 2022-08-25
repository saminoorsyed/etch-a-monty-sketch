const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const displayDim = document.querySelector('.display-dim');
const penColorPicker = document.getElementById('pen-color')
const gridColorPicker = document.getElementById('grid-color')
const body = document.querySelector('body')
// default pen and grid colors and grid dimensions
let penColor = '#000000';
let gridColor= '#ffffff';
const defaultDimension = 16;

// flag for whether or not the mouse is down
let isDrag = false;
// display the dimensions
function updateSize(dimension) {
    displayDim.innerHTML = `${dimension} x ${dimension}`
}

function populateContainer (dimension){
    // clear the current container
    clearContainer();
    // find width of container div
    const containerWidth = container.clientWidth;
    // calulate the width of each internal div
    const gridDim = (containerWidth/parseInt(dimension));
    for (i = 0; i < dimension**2; i++) {
        const gridEl = document.createElement('div');
        // set width and height of grid elements to appropriate value
        gridEl.style.width = `${gridDim}px`;
        gridEl.style.height = `${gridDim}px`;
        container.appendChild(gridEl);
        // add event listeners to adjust isdrag flag
        // initiate changeGridColor function when mouse clicks or 
        gridEl.addEventListener('mouseover',changeGridElColor);
        gridEl.addEventListener('mousedown',changeGridElColor);
    }
}

function changeGridElColor(e) {
    if (!isDrag) return;
    console.log(penColor);
    this.style.backgroundColor = `${penColor}`;
}


function getPenColor(color){
    penColor = color
}

function getGridColor(color){
    gridColor = color;
}

// button 'onclick' functions
function clearContainer(){
    console.log('clear');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

}

function toggleInvert(){
    console.log('invert');
}

function toggleRainbow(){
    console.log('rainbow');
}

function toggleEraser(){
    console.log('eraser');
}

function savePDF(){
    console.log('save');
}

function listening (){
    console.log('hearing');
}
// listen for change in dimension
slider.onmousemove = (e) => updateSize(e.target.value);
slider.onchange = (e) => populateContainer(e.target.value);

// listen for change in colors
penColorPicker.onchange = (e) => getPenColor(e.target.value);
gridColorPicker.onchange = (e) => getGridColor(e.target.value);

// if the mouse leaves the container set isdrag to false

// handle whether or not user is still holding the mouse down to draw
container.addEventListener('mousedown',() => isDrag = true);
body.addEventListener('mouseup',()=> isDrag = false);

populateContainer(defaultDimension);
updateSize(defaultDimension)

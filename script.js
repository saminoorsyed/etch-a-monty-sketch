const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const displayDim = document.querySelector('.display-dim');
const penColorPicker = document.getElementById('pen-color')
const gridColorPicker = document.getElementById('grid-color')

// default pen and grid colors
let penColor = '#000000';
let gridColor= '#ffffff';

// display the dimensions
function updateSize(dimension) {
    displayDim.innerHTML = `${dimension} x ${dimension}`
}

// retriev info from page
function getSize(size){
    console.log(size);
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
        // gridEl.addEventListener('mouseover', (e) => changeGridElColor(e));
        gridEl.addEventListener('mouseover',changeGridElColor);
        gridEl.addEventListener('mousedown',changeGridElColor);

    }
}

function changeGridElColor(e) {
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
// listen for change in dimension
slider.onmousemove = (e) => updateSize(e.target.value);
slider.onchange = (e) => populateContainer(e.target.value);

// listen for change in colors
penColorPicker.onchange = (e) => getPenColor(e.target.value);
gridColorPicker.onchange = (e) => getGridColor(e.target.value);


populateContainer(16);

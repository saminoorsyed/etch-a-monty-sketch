const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const displayDim = document.querySelector('.display-dim');
const penColor = document.getElementById('pen-color')
const gridColor = document.getElementById('grid-color')
// display the dimensions
function updateSize(dimension) {
    displayDim.innerHTML = `${dimension} x ${dimension}`
}

// retriev info from page
function getSize(size){
    console.log(size);
}

function getPenColor(color){
    console.log(color);
}

function getGridColor(color){
    console.log(color);
}

// button 'onclick' functions
function clearGrid(){
    console.log('clear');
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
slider.onchange = (e) => getSize(e.target.value);

// listen for change in colors
penColor.onchange = (e) => getPenColor(e.target.value);
gridColor.onchange = (e) => getGridColor(e.target.value);




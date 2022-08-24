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

function populateContainer (dimension){
    // clear the current container
    clearContainer();
    // find width of container div
    const containerWidth = container.clientWidth;
    // calulate the width of each internal div
    const gridDim = (containerWidth/parseInt(dimension));
    for (i = 0; i < dimension**2; i++) {
        console.log('hello')
        const gridEl = document.createElement('div');
        // set width and height of grid elements to appropriate value
        gridEl.style.width = `${gridDim}px`;
        gridEl.style.height = `${gridDim}px`;
        container.appendChild(gridEl);
        // gridEl.addEventListener('mouseover', changeGridColor());
        // gridEl.addEventListener('mousedown', changeGridColor());

    }

    // create dimension**2 number of divs to fill the container
    // add onclick and drag listeners to each div to change the color
}


function getPenColor(color){
    console.log(color);
}

function getGridColor(color){
    console.log(color);
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
penColor.onchange = (e) => getPenColor(e.target.value);
gridColor.onchange = (e) => getGridColor(e.target.value);




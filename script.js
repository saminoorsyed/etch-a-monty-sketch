const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
// generate grid dimensions based on range slider
let rangeDrag = false;
let dimension;

function genDimensions(){
    // if the mouse is not clicked down, do not run the function when mouse is moving over div
    if (!rangeDrag) return;
    // the value of the range slider from 1 to 128
    dimension = this.value;
    // populate the container div with container elements
}

slider.addEventListener('change', genDimensions);
slider.addEventListener('mousemove', genDimensions);

slider.addEventListener('mousedown', () => rangeDrag = true);
slider.addEventListener('mouseup', () => rangeDrag = false);
slider.addEventListener('mouseout', () => rangeDrag = false);
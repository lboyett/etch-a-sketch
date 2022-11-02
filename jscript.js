const body = document.querySelector('body');

// create div containing button prompt and grids
const bodyContent = document.createElement('div');
bodyContent.classList.add('bodyContent');
body.appendChild(bodyContent);
bodyContent.setAttribute('style','border: 2px solid pink');

// create button prompt
const button = document.createElement('button');
button.classList.add('button');
button.textContent = "Enter Number of Squares";
bodyContent.appendChild(button);


let promptResponse = (() => {
    response = prompt('What grid size?');
    return response;
});


button.addEventListener('click', () => {  // call promptResponse function on click
    let gridSize = promptResponse();   // Need this return from this function for later in the code
    removeGrid();
    console.log('SIZE: '+ gridSize);
    changeGrid(gridSize);
});


// create gridContainer for gridSquares
let gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
bodyContent.appendChild(gridContainer);

// set attributes for gridContainer to arrange squares in a grid
gridContainer.setAttribute('style','border: 1px solid red');
gridContainer.setAttribute('style', 'display: grid');
gridContainer.setAttribute('style', 'grid-template-columns: repeat(4, 1fr)');

// create grid squares and append to gridContainer

changeGrid(); //initialize grid to default value gridSize = 4

function changeGrid(gridSize=4) {
    for (i=0; i<(gridSize*gridSize); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('style','border: 1px solid blue');
        gridSquare.textContent = i;
        gridSquare.classList.add('gridSquare');
        gridContainer.appendChild(gridSquare);
    };
};

// Remove grid
function removeGrid() {
    let remGrid = document.querySelectorAll('.gridSquare');
    for (i=0; i<remGrid.length; i++){
        remGrid[i].remove();
    };
};

// addEventListener so that squares change color when hover
let gridSquares = document.querySelectorAll('.gridSquare');
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (event) => {
        event.target.style.background = 'blue';
        setTimeout(() => {
            event.target.style.background='';
        } , 500);
    });
});
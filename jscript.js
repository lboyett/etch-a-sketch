const body = document.querySelector('body');

// create div containing prompt button and grids
const bodyContent = document.createElement('div');
bodyContent.classList.add('bodyContent');
body.appendChild(bodyContent);
bodyContent.setAttribute('style','border: 2px solid pink');

// create button prompt
const button = document.createElement('button');
button.classList.add('button');
button.textContent = "Enter Grid Size";
bodyContent.appendChild(button);

// change grid on button click
let promptResponse = (() => {
    response = prompt('What grid size?');
    return response;
});

button.addEventListener('click', () => {  // call promptResponse function on click
    let gridSize = promptResponse();   // Need this return from this function for later in the code
    if (gridSize > 100) {
        alert('Must be less than 100');
        return;
    }
    removeGrid();
    console.log('SIZE: '+ gridSize);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr)`);
    changeGrid(gridSize);
    changeColor();
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
        //gridSquare.setAttribute('style','border: 1px solid blue');
        gridSquare.classList.add('gridSquare');
        gridContainer.appendChild(gridSquare);
    };
};

// add remove grid function
function removeGrid() {
    let remGrid = document.querySelectorAll('.gridSquare');
    for (i=0; i<remGrid.length; i++){
        remGrid[i].remove();
    };
};

// add function to change square color when hover
changeColor();
function changeColor() {
    let gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', (event) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.background = '#'+randomColor;
            setTimeout(() => {
                event.target.style.background='';
            } , 500);
        });
    });
};
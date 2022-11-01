const body = document.querySelector('body');

// create gridContainer for gridSquares
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
body.appendChild(gridContainer);

// set attributes for gridContainer to arrange squares in a grid
gridContainer.setAttribute('style','border: 1px solid red');
gridContainer.setAttribute('style', 'display: grid');
gridContainer.setAttribute('style', 'grid-template-columns: repeat(4, 1fr)');

// create grid squares and append to gridContainer
for (i=0; i<16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.setAttribute('style','border: 1px solid blue');
    gridSquare.textContent = i;
    gridSquare.classList.add('gridSquare');
    gridContainer.appendChild(gridSquare);
}

let numSquares = 16;

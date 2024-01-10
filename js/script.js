// ! OPERAZIONI PRELIMINARI

// Recuperiamo la griglia
const grid = document.getElementById('grid');
const button = document.querySelector('button');

// Dati di partenza
const rows = 10;
const cols = 10;
const totalCells = rows * cols; // 100


// ! FUNZIONI
const createCell = content => {
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.innerText = content;
    return newCell;
}


// ! EFFETTIVO SVOLGIMENTO DEL PROGRAMMA
// Creazione della griglia al click del bottone Play
button.addEventListener('click', function() {

    // Creazione ciclo for per ottenere la griglia
    for (let i = 1; i <= totalCells; i++) {

        // Creare una cella
        const cell = createCell(i);

        // Aggiungo la cella in pagina
        grid.appendChild(cell);
    }
})
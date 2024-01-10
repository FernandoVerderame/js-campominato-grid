// ! OPERAZIONI PRELIMINARI

// Recuperiamo la griglia
const grid = document.getElementById('grid');
const button = document.querySelector('button');

// Dati di partenza
const rows = 10;
const cols = 10;
const totalCells = rows * cols; // 100


// ! FUNZIONI
const createCell = () => {
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    return newCell;
}


// ! EFFETTIVO SVOLGIMENTO DEL PROGRAMMA
// Creazione della griglia al click del bottone Play
button.addEventListener('click', function() {

    // Creazione ciclo for per ottenere la griglia
    for (let i = 0; i < totalCells; i++) {

        // Creare una cella
        const cell = createCell();

        // Aggiungo la cella in pagina
        grid.appendChild(cell);
    }
})
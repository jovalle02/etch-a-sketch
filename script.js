const container_table = document.querySelector('.table');
const totalSpaceOnGrid = 500*500;
const elements = document.getElementsByClassName('.square')
const slider = document.getElementById('slider');





slider.addEventListener('input', function() {
    createGrid(slider.value, totalSpaceOnGrid)
});

// for (let i = 1; i <= numberOfSquares; i++) {
//     let min_width = Math.sqrt(totalSpaceOnGrid/numberOfSquares)
//     let newGrid = document.createElement('div')
//     newGrid.style.width = `${min_width}px`
//     newGrid.classList.add('square')
//     newGrid.addEventListener('mouseover', function() {
//         newGrid.classList.add('whenhover')
//     });
//     container_table.appendChild(newGrid)
// }

function createGrid(value, totalSpaceOnGrid) {
    const numberOfSquares = value * value;
    const min_width = Math.sqrt(totalSpaceOnGrid/numberOfSquares);
    container_table.innerHTML = "";
    for (let i = 1; i <= numberOfSquares; i++) {
        const newGrid = document.createElement('div')
        newGrid.style.width = `${min_width}px`
        newGrid.classList.add('square')
        newGrid.addEventListener('mouseover', function() {
            newGrid.classList.add('whenhover')
        });
        container_table.appendChild(newGrid)
    }

}


const container_table = document.querySelector('.table');
const totalSpaceOnGrid = 500*500;
const elements = document.getElementsByClassName('.square')
const slider = document.getElementById('slider');
const labelslider = document.querySelector('.labelslider')
slider.value = 24;

createGrid(slider.value, totalSpaceOnGrid);

slider.addEventListener('input', function() {
    createGrid(slider.value, totalSpaceOnGrid)
});

function createGrid(value, totalSpaceOnGrid) {
    const numberOfSquares = value * value;
    const min_width = Math.sqrt(totalSpaceOnGrid / numberOfSquares);
    container_table.innerHTML = "";
    
    let isDragging = false;
  
    for (let i = 1; i <= numberOfSquares; i++) {
      const newGrid = document.createElement('div');
      newGrid.style.width = `${min_width}px`;
      newGrid.classList.add('square');
      
      newGrid.addEventListener('mousedown', function() {
        isDragging = true;
      });
  
      newGrid.addEventListener('mousemove', function() {
        if (isDragging) {
          newGrid.classList.add('whenhover');
        }
      });
  
      newGrid.addEventListener('mouseup', function() {
        isDragging = false;
      });
  
      container_table.appendChild(newGrid);
      labelslider.textContent = `${slider.value}X${slider.value}`
    }
  }
  
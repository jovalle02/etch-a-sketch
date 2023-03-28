const container_table = document.querySelector('.table');
const totalSpaceOnGrid = 500*500;
const elements = document.getElementsByClassName('.square')
const slider = document.getElementById('slider');
const labelslider = document.querySelector('.labelslider')
const btnremove = document.querySelector('.btnremove')

//DEFAULT VALUES WHEN THE WEBSITE IS OPENED
slider.value = 24;
createGrid(slider.value, totalSpaceOnGrid);

//WHEN THE SLIDER IS MOVED AROUND THIS FUNCTION TAKES ACTION AND UPDATES THE GRID
slider.addEventListener('input', function() {
    createGrid(slider.value, totalSpaceOnGrid)
});

//FUNTION TO CLEAR THE GRID WHEN CLICKED
btnremove.addEventListener('click', function() {
    createGrid(slider.value, totalSpaceOnGrid)
});

//CREATES THE FUNCTION THAT MAKES THE GRID BASED ON THE VALUES OF THE SLIDER
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
  
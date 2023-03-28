const container_table = document.querySelector('.table');
const totalSpaceOnGrid = 500*500;
const slider = document.getElementById('slider');
const labelslider = document.querySelector('.labelslider')
const btnremove = document.querySelector('.btnremove')
const btnrainbow = document.querySelector('.btnrainbow')
const btnblack = document.querySelector('.btnblack')
const btneraser = document.querySelector('.btneraser')

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

//BLACK PENCIL
btnblack.addEventListener('click', function() {
  blackColor()
})

//RAINBOW MODE
btnrainbow.addEventListener('click', function (){
  rainbowColor()
});

//ERASER
btneraser.addEventListener('click', function () {
  eraser()
});

  //Function to generate random hexcode
  function getRandomHexCode() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }

  //Adding classes when hovering


  function createGrid(value, totalSpaceOnGrid) {
    const numberOfSquares = value * value;
    const min_width = Math.sqrt(totalSpaceOnGrid / numberOfSquares);
    container_table.innerHTML = "";

  
    for (let i = 1; i <= numberOfSquares; i++) {
      const newGrid = document.createElement('div');
      newGrid.style.width = `${min_width}px`;
      newGrid.classList.add('square');
      container_table.appendChild(newGrid);
      labelslider.textContent = `${slider.value}X${slider.value}`
    }
  }
  
  function rainbowColor() {
    const elements = document.querySelectorAll('.square');
    let isDragging = false;
    
    for(let i = 0; i < elements.length; i++) {
      const mouseDownListener = function() {
        isDragging = true;
      };
      const mouseMoveListener = function() {
        if (isDragging) {
          elements[i].style.backgroundColor = `${getRandomHexCode()}`;
        }
      };
      const mouseUpListener = function() {
        isDragging = false;
      };
      elements[i].addEventListener('mousedown', mouseDownListener);
      elements[i].addEventListener('mousemove', mouseMoveListener);
      elements[i].addEventListener('mouseup', mouseUpListener);
    }
  }

  function blackColor() {
    const elements = document.querySelectorAll('.square');
    let isDragging = false;
    
    for(let i = 0; i < elements.length; i++) {
      const mouseDownListener = function() {
        isDragging = true;
      };
      const mouseMoveListener = function() {
        if (isDragging) {
          elements[i].style.backgroundColor = `black`;
        }
      };
      const mouseUpListener = function() {
        isDragging = false;
      };
      elements[i].addEventListener('mousedown', mouseDownListener);
      elements[i].addEventListener('mousemove', mouseMoveListener);
      elements[i].addEventListener('mouseup', mouseUpListener);
    }
  }


  function eraser() {
    const elements = document.querySelectorAll('.square');
    let isDragging = false;
    
    for(let i = 0; i < elements.length; i++) {
      const mouseDownListener = function() {
        isDragging = true;
      };
      const mouseMoveListener = function() {
        if (isDragging) {
          elements[i].style.backgroundColor = `white`;
        }
      };
      const mouseUpListener = function() {
        isDragging = false;
      };
      elements[i].addEventListener('mousedown', mouseDownListener);
      elements[i].addEventListener('mousemove', mouseMoveListener);
      elements[i].addEventListener('mouseup', mouseUpListener);
    }
  }



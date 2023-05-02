let gridsize = 64;
window.onload = function() {
    const container = document.querySelector(".grid-container");
  
    // Loop through and create 16x16 grid of divs
    makegrid(container, gridsize);
  
    // Add event listener for mouseover on each grid item
    const items = document.querySelectorAll(".grid-item");
    items.forEach(item => {
      item.addEventListener("mouseover", function (e) {
        // Add a trail class to the item and its adjacent items
        const color = randomRGB()
        e.target.style.background = color;
        
        sleep(1000).then(() => {
            e.target.style.background = '';
        });

        item.classList.add("trail");
        const row = item.parentElement;
        const col = Array.from(row.children).indexOf(item);
        if (col > 0) row.children[col - 1].classList.add("trail");
        if (col < gridsize - 1) row.children[col + 1].classList.add("trail");
        const prevRow = row.previousElementSibling;
        const nextRow = row.nextElementSibling;
        if (prevRow) {
          prevRow.children[col].classList.add("trail");
          if (col > 0) prevRow.children[col - 1].classList.add("trail");
          if (col < gridsize - 1) prevRow.children[col + 1].classList.add("trail");
        }
        if (nextRow) {
          nextRow.children[col].classList.add("trail");
          if (col > 0) nextRow.children[col - 1].classList.add("trail");
          if (col < gridsize - 1) nextRow.children[col + 1].classList.add("trail");
        }
      });
    });
  };

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function makegrid (container, gridsize) {
    for (let i = 0; i < gridsize * gridsize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
    }
}


function getGridSize() {
    const btn = document.querySelector('#btn');

}
let gridsize = getGridSize();
window.onload = function() {
    // Loop through and create 16x16 grid of divs
    makegrid(gridsize);
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

function makegrid (gridsize) {
    const container = document.querySelector(".grid-container");
     // Clear any existing grid items
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < gridsize * gridsize; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
        colorize()
    }
}

function getGridSize() {
    console.log("I've called here")
    const form = document.querySelector("form");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const input = document.querySelector("#grid-size");
      const size = parseInt(input.value, 10);
      makegrid(size);
    });
}

function colorize() {
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
    });
    });
}
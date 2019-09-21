let container = document.getElementById("main");
let resetButton = document.getElementById("new-canvas");

function newGrid(n) {
    for (let i = 0, cells = n**2; i < cells; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", `div-${i + 1}`);
        newDiv.setAttribute("class", "inner-cell");      
        container.appendChild(newDiv);
    }
}
newGrid(4);

function resize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}


resetButton.addEventListener('click', () => {
    container.innerHTML = '';
    let newSize = prompt("Enter Grid Size");
    resize(newSize);
    newGrid(newSize);
})

const sketchpad = document.querySelector(".sketchpad");

let widthSquares = prompt("How many squares wide?", "16");
let lengthSquares = prompt("How many squares long?", "16")
for (i=0; i < widthSquares * lengthSquares; i++) {
    const firstgrid = document.createElement("div");
    firstgrid.classList.toggle("firstgrid");
    sketchpad.appendChild(firstgrid);
}


const gridboxes = document.querySelectorAll("div.firstgrid");

gridboxes.forEach ((firstgrid) => {

    firstgrid.addEventListener("mouseover", () => {
        firstgrid.classList.add("firstgridhover");
    });
});
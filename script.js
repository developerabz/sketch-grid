const sketchpad = document.querySelector(".sketchpad");

let widthSquares;
let lengthSquares;



function generate() {
    

    if (widthSquares >= 100 || lengthSquares >= 100 ||
        widthSquares < 0 || lengthSquares < 0) {
        widthSquares = 0;
        lengthSquares = 0;
    } else {
        for (i=0; i < widthSquares * lengthSquares; i++) {
            const firstgrid = document.createElement("div");
            firstgrid.classList.toggle("firstgrid");
            sketchpad.appendChild(firstgrid);
        }
    }
}


const button = document.querySelector("button");

button.addEventListener("click", () => {
    widthSquares = prompt("How many squares wide? (MAX Squares 99)", "16");
    lengthSquares = prompt("How many squares long? (MAX Squares 99)", "16");
    generate();
})


const gridboxes = document.querySelectorAll("div.firstgrid");

gridboxes.forEach ((firstgrid) => {

    firstgrid.addEventListener("mouseover", () => {
        firstgrid.classList.add("firstgridhover");
    });
});
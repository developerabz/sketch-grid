const sketchpad = document.querySelector(".sketchpad");

let widthSquares;
let lengthSquares;

const firstgrid = document.createElement("div");

function generate() {
    

    if (widthSquares >= 100 || lengthSquares >= 100 ||
        widthSquares < 0 || lengthSquares < 0) {
        widthSquares = 0;
        lengthSquares = 0;
    } else {
        for (i=0; i < widthSquares * lengthSquares; i++) {
            const firstgrid = document.createElement("div");
            firstgrid.classList.add("firstgrid");
            sketchpad.appendChild(firstgrid);
        }
    }
}


const generatebutton = document.querySelector(".generate");

generatebutton.addEventListener("click", () => {
    widthSquares = prompt("How many squares wide? (MAX Squares 99)", "16");
    lengthSquares = prompt("How many squares long? (MAX Squares 99)", "16");
    generate();

    
    const gridboxes = document.querySelectorAll(".firstgrid");
    gridboxes.forEach ((firstgrid) => {

    firstgrid.addEventListener("mouseover", () => {
        firstgrid.classList.add("firstgridhover");
    });
});
});

const clearbutton = document.querySelector(".clear");

function clear() {
    
}



clearbutton.addEventListener("click", () => {
    const gridboxes = document.querySelectorAll(".firstgrid");
    gridboxes.forEach((firstgrid) => {
        firstgrid.classList.remove("firstgrid");
    });
});



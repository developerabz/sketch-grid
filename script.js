const sketchpad = document.querySelector(".sketchpad");


for (i=0; i < 256; i++) {
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
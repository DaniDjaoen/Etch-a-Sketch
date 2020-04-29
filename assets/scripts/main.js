const gridsBox = document.getElementById("gridbox");
gridsBox.style["display"] = "grid";

const btnClear = document.getElementById("option-clear");
const btnResize = document.getElementById("option-resize");
const btnRedColor = document.getElementById("option-red");
const btnGreenColor = document.getElementById("option-green");
const btnBlueColor = document.getElementById("option-blue");
const btnBlackColor = document.getElementById("option-black");
gridCreator(10);

function gridCreator(numOfCells) {
    gridsBox.innerHTML = " ";
    console.log(`Creating grid with value ${numOfCells}`);
    const totalCellsToMake = numOfCells * numOfCells;
    gridsBox.style["grid-template-columns"] = `repeat(${numOfCells}, 1fr)`;
    gridsBox.style["grid-template-rows"] = `repeat(${numOfCells}, 1fr)`;

    for (let index = 1; index <= totalCellsToMake; index++) {
        let gridItem = document.createElement("div");
        //gridItem.setAttribute("class", "grids");
        gridItem.className = "grids";
        gridsBox.appendChild(gridItem);
        //console.log(`Created Grid #${index}`);
    }
    createMouseOver();
};

function createMouseOver(selectedColor = "black") {
    const gridItems = document.querySelectorAll(".grids");
    switch (selectedColor) {
        case "red":
            removeSelectedColor();
            btnRedColor.setAttribute("class", "options selected-color");
            break;
        case "blue":
            removeSelectedColor();
            btnBlueColor.setAttribute("class", "options selected-color");
            break;
        case "green":
            removeSelectedColor();
            btnGreenColor.setAttribute("class", "options selected-color");
            break;
        default:
            removeSelectedColor();
            btnBlackColor.setAttribute("class", "options selected-color");
            break;
    }
    gridItems.forEach((element) => {
        element.addEventListener("mouseover", function () {
            element.style["background-color"] = selectedColor;
        });
    });
}

function removeSelectedColor() {
    btnBlackColor.setAttribute("class", "options");
    btnBlueColor.setAttribute("class", "options");
    btnGreenColor.setAttribute("class", "options");
    btnRedColor.setAttribute("class", "options");
}
btnRedColor.addEventListener("click", function () {
    createMouseOver("red");
});
btnGreenColor.addEventListener("click", function () {
    createMouseOver("green");
});
btnBlueColor.addEventListener("click", function () {
    createMouseOver("blue");
});
btnBlackColor.addEventListener("click", function () {
    createMouseOver("black");
});
btnClear.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".grids");
    gridItems.forEach((element) => {
        element.style["background-color"] = "white";
    });
});
btnResize.addEventListener('click', function () {
    let userInput = prompt("Enter the amount numbers of cells per sides: \n(*) Between 10 and 50 cells per sides is allowed.");
    if (isNaN(userInput) || userInput > 50 || userInput < 10) {
        do {
            userInput = prompt("Please enter the amount numbers of cells per sides: \n(*) Between 10 and 50 cells per sides is allowed.");
        } while (isNaN(userInput) || userInput > 50 || userInput < 10);
    }
    gridCreator(userInput);
});
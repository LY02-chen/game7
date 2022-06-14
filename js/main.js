const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");

let gridColor = [];

function newGame() {
    canvas.width = gridWidth * gridCol + padding * 2;
    canvas.height = gridWidth * gridRow + padding * 2;
    
    gridColor = Array.from({length : gridRow}, x => Array(gridCol).fill("BG"));

    drawBackground();
    a(0,"I");
    a(1,"J");
    a(2,"L");
    a(3,"O");
    a(4,"S");
    a(5,"Z");
    a(6,"T");
    a(7,"block");
}

newGame();
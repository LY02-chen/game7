const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d")

let gridColor = [];

function newGame() {
    canvas.width = gridWidth * gridCol + padding * 3;
    canvas.height = gridWidth * gridRow + padding * 2;
    
    gridColor = Array.from({length : gridRow}, x => Array(gridCol).fill("BG"));

    drawBackground();
    drawSolidGrid([0,0], "Z");
    drawPreviewGrid([0,1], "Z");
    drawNextGrid([0,2], "Z");
    drawHoldGrid([0,3], "Z");
}

newGame();
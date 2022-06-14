function drawEmptyGrid(pos) {
    let thisX = gridWidth * pos[0] + padding;
    let thisY = gridWidth * pos[1] + padding;

    ctx.fillStyle = color["gridPadding"];
    ctx.fillRect(thisX, thisY, gridWidth, gridWidth);

    ctx.fillStyle = color["gridBG"];
    ctx.fillRect(thisX + gridPadding, thisY + gridPadding, 
                 gridWidth - gridPadding * 2, gridWidth - gridPadding * 2);
}

function drawBackground() {
    
    for (let i = 0; i < gridRow; i++)
        for (let j = 0; j < gridCol; j++)
            drawEmptyGrid([j, i]);
}

function drawGrid(pos, color, width) {
    ctx.fillStyle = lightColor(color);
    ctx.beginPath();
    ctx.moveTo(pos[0], pos[1]);
    ctx.lineTo(pos[0] + width, pos[1]);
    ctx.lineTo(pos[0], pos[1] + width);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = darkColor(color);
    ctx.beginPath();
    ctx.moveTo(pos[0] + width, pos[1]);
    ctx.lineTo(pos[0], pos[1] + width);
    ctx.lineTo(pos[0] + width, pos[1] + width);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = color;
    ctx.fillRect(pos[0] + width * 0.15, pos[1] + width * 0.15, 
                 width * 0.7, width * 0.7);
}

function drawSolidGrid(pos, type) {
    pos = pos.map(x => gridWidth * x + padding);
    drawGrid(pos, color[type], gridWidth);
}

function drawPreviewGrid(pos, type) {
    pos = pos.map(x => gridWidth * x + padding);
    drawGrid(pos, darkColor(color[type]), gridWidth);
}

function a(index, type) {
    drawSolidGrid([index, 0], type);
    drawPreviewGrid([index, 1], type);
}
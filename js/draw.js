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

function drawGrid(pos, color, alpha, width) {
    const hexToRgbA = (color) => {
        return [parseInt(color.substring(1, 3), 16),
                parseInt(color.substring(3, 5), 16),
                parseInt(color.substring(5, 7), 16), alpha];
    }
    
    const lightColor = (color) => {
        color = hexToRgbA(color);
        color = color.map((x, index) => index == 3 ? x : Math.floor((255 - x) * 0.8 + x));
        return `rgba(${color.join(',')})`;
    }

    const darkColor = (color) => {
        color = hexToRgbA(color);
        color = color.map((x, index) => index == 3 ? x : Math.floor(x * 0.8));
        return `rgba(${color.join(',')})`;
    }

    ctx.fillStyle = lightColor(color);
    ctx.beginPath();
    ctx.moveTo(pos[0], pos[1]);
    ctx.lineTo(pos[0] + width, pos[1]);
    ctx.lineTo(pos[0] + width * 0.9, pos[1] + width * 0.1);
    ctx.lineTo(pos[0] + width * 0.1, pos[1] + width * 0.1);
    ctx.lineTo(pos[0] + width * 0.1, pos[1] + width * 0.9);
    ctx.lineTo(pos[0], pos[1] + width);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = darkColor(color);
    ctx.beginPath();
    ctx.moveTo(pos[0] + width, pos[1]);
    ctx.lineTo(pos[0] + width * 0.9, pos[1] + width * 0.1);
    ctx.lineTo(pos[0] + width * 0.9, pos[1] + width * 0.9);
    ctx.lineTo(pos[0] + width * 0.1, pos[1] + width * 0.9);
    ctx.lineTo(pos[0], pos[1] + width);
    ctx.lineTo(pos[0] + width, pos[1] + width);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = `rgba(${hexToRgbA(color).join(',')})`;
    ctx.fillRect(pos[0] + width * 0.1, pos[1] + width * 0.1, 
                 width * 0.8, width * 0.8);
}

function drawSolidGrid(pos, type) {
    pos = pos.map(x => gridWidth * x + padding);
    drawGrid(pos, color[type], 1, gridWidth);
}

function drawPreviewGrid(pos, type) {
    pos = pos.map(x => gridWidth * x + padding);
    drawGrid(pos, color[type], 0.7, gridWidth);
}

function drawHoldGrid(pos, type) {
    pos = pos.map(x => gridWidth * x + padding);
    drawGrid(pos, color[type], 1, gridWidth * 0.6);
}

function drawNextGrid(pos, type) {
    pos = pos.map(x => gridWidth * x + padding);
    drawGrid(pos, color[type], 1, gridWidth * 0.5);
}

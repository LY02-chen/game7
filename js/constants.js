const color = {
    "gridBG": "#000000",
    "gridPadding": "#bebebe",
    "I": "#00ffff",
    "J": "#0000ff",
    "L": "#ffa500",
    "O": "#ffff00",
    "S": "#00ff00",
    "T": "#a020f0",
    "Z": "#ff0000",
    "block": "#adadad"
}

const gridWidth = 30,
      gridCol = 10,
      gridRow = 20,
      padding = 10,
      gridPadding = 1;

      
const hexToRgb = (color) => {
    return [parseInt(color.substring(1, 3), 16),
            parseInt(color.substring(3, 5), 16),
            parseInt(color.substring(5, 7), 16)];
}

const lightColor = (color) => {
    color = hexToRgb(color);
    color = color.map(x => (Math.floor((255 - x) * 0.8 + x)).toString(16));
    color = color.map(x => x.length == 1 ? "0" + x : x);
    return "#" + color.join('');
}

const darkColor = (color) => {
    color = hexToRgb(color);
    color = color.map(x => (Math.floor(x * 0.8)).toString(16));
    color = color.map(x => x.length == 1 ? "0" + x : x);
    return "#" + color.join('');
}
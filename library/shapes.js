
// case "circle":
// shapeSVG = `<circle cx="150" cy="100" r="75" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
// break;
//         case "triangle":
// shapeSVG = `<polygon points="150,200 30,10 270,10" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
// break;   
//         case "square":
// shapeSVG = `<rect x="55" y="5" width="190" height="190" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
// break;

class Polygon {
    constructor(numberSides, height, width) {
        this.numberSides= numberSides;
        this.height = height;
        this.width = width;
    }
}

class Triangle extends Polygon {
    constructor(numberSides, height, width, fill) {
        super(numberSides, height, width);
        this.fill = fill;
    }
}

const triangle = new Triangle(
    '[ 150,200, 30,10, 270,10]',
    '150',
    '150',
    'blue',
)

module.exports = Polygon
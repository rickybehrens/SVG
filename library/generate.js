const {Circle, Triangle, Square} = require('./shapes')


function generateLogo(data) {
    const textColor = data.text || "black";
    const shapeColor = data.fill || "lime";
    const strokeColor = data.stroke || "black";
    const textPosition = data.textPosition || "top";
    let shapeSVG = "";
    
    let textYPosition = 65; // Default top position

    if (textPosition === "center") {
        textYPosition = 115; // Center vertically
    } else if (textPosition === "bottom") {
        textYPosition = 165; // Bottom position
    }

    switch (data.shape.toLowerCase()) {
        case "circle":
            shapeSVG = new Circle(data.fill, data.characters, data.text, data.stroke, textYPosition)
            break;
        case "triangle":
            shapeSVG = new Triangle(data.fill, data.characters, data.text, data.stroke, textYPosition)
            break;
        case "square":
            shapeSVG = new Square(data.fill, data.characters, data.text, data.stroke, textYPosition)
            break;
        default:
            break;
    }

    return shapeSVG.render()
}

module.exports = generateLogo;

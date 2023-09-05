const {Circle, Triangle, Square} = require('./shapes')


function generateLogo(data) {
    const textColor = data.text || "black";
    const shapeColor = data.fill || "lime";
    const strokeColor = data.stroke || "black";
    const textPosition = data.textPosition || "top";

    let shapeSVG = "";
    let shapeWidth = 150; // Default width
    let shapeHeight = 150; // Default height

    switch (data.shape.toLowerCase()) {
        case "circle":
            shapeSVG = new Circle(data.fill, data.characters, data.text, data.stroke)
            break;
        case "triangle":
            shapeSVG = new Triangle(data.fill, data.characters, data.text, data.stroke)
            break;
        case "square":
            shapeSVG = new Square(data.fill, data.characters, data.text, data.stroke)
            break;
        default:
            break;
    }

    let textYPosition = 65; // Default top position

    if (textPosition === "center") {
        textYPosition = 120; // Center vertically
    } else if (textPosition === "bottom") {
        textYPosition = 165; // Bottom position
    }

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
        ${shapeSVG}
        <text x="95" y="120" fill="${textColor}" font-size="50">${data.characters}</text>
    </svg>`;

    // return svgContent;
    return shapeSVG.render()
}

module.exports = generateLogo;

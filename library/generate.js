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
            shapeSVG = `<circle cx="150" cy="100" r="75" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
            break;
        case "triangle":
            shapeSVG = `<polygon points="150,200 30,10 270,10" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
            break;
        case "square":
            shapeSVG = `<rect x="55" y="5" width="190" height="190" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
            break;
        default:
            break;
    }

    let textXPosition = 95; // Center horizontally
    let textYPosition = 65; // Default top position

    if (textPosition === "center") {
        textYPosition = 120; // Center vertically
    } else if (textPosition === "bottom") {
        textYPosition = 165; // Bottom position
    }

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
        ${shapeSVG}
        <text x="${textXPosition}" y="${textYPosition}" fill="${textColor}" font-size="50">${data.characters}</text>
    </svg>`;

    return svgContent;
}

module.exports = generateLogo;

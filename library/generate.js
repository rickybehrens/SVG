function generateLogo(data) {
    const textColor = data.textColor || "black";
    const shapeColor = data.shapeColor || "lime";

    let shapeSVG = "";

    switch (data.shape.toLowerCase()) {
        case "circle":
            shapeSVG = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" stroke="${textColor}" stroke-width="3" />`;
            break;
        case "triangle":
            shapeSVG = `<polygon points="10,10 100,10 55,90" fill="${shapeColor}" stroke="${textColor}" stroke-width="3" />`;
            break;
        case "square":
            shapeSVG = `<rect x="10" y="10" width="180" height="180" fill="${shapeColor}" stroke="${textColor}" stroke-width="3" />`;
            break;
        default:
            break;
    }

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
        ${shapeSVG}
        <text x="10" y="30" fill="${textColor}">${data.characters}</text>
    </svg>`;

    return svgContent;
}

module.exports = generateLogo;
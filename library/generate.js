function generateLogo(data) {
    const textColor = data.text || "black";
    const shapeColor = data.fill || "lime";
    const strokeColor = data.stroke || "black";
    const textPosition = data.textPosition || "top";
    const mirrorType = data.mirrorType || "None";
    const mirrorOpacity = parseFloat(data.mirrorOpacity) || 1.0;
    const fadeMirror = data.fadeMirror || false;

    let shapeSVG = "";
    let shapeWidth = 150; // Default width
    let shapeHeight = 150; // Default height

    let mirrorTransform = ""; // Define mirrorTransform here
    let mirrorFadeOpacity = 1.0; // Default full opacity

    if (mirrorType === "Vertical") {
        mirrorTransform = "scale(1, -1)";
    } else if (mirrorType === "Horizontal") {
        mirrorTransform = "scale(-1, 1)";
    }

    if (fadeMirror) {
        mirrorFadeOpacity = mirrorOpacity;
    }

    switch (data.shape.toLowerCase()) {
        case "circle":
            shapeSVG = `<circle cx="150" cy="100" r="75" fill="${data.fill}" stroke="${data.characters}" stroke-width="3" />`;
            break;
        case "triangle":
            shapeSVG = `<polygon points="150,200 30,10 270,10" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
            break;
        case "square":
            shapeWidth = 190;
            shapeHeight = 190;
            shapeSVG = `<rect x="${(300 - shapeWidth) / 2}" y="${(200 - shapeHeight) / 2}" width="${shapeWidth}" height="${shapeHeight}" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
            break;
        default:
            break;
    }

    let textXPosition = 150; // Center horizontally
    let textYPosition = 20; // Default top position

    if (textPosition === "center") {
        textYPosition = 100; // Center vertically
    } else if (textPosition === "bottom") {
        textYPosition = 180; // Bottom position
    }

    // Apply mirror transformation to the text element
    const mirrorText = `
    <text x="${textXPosition}" y="${textYPosition}" fill="${textColor}" text-anchor="middle" transform="${mirrorTransform} translate(0, ${2 * textYPosition}) scale(1, -1)" opacity="${mirrorFadeOpacity}">${data.characters}</text>
`;

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
        ${shapeSVG}
        ${mirrorText}
    </svg>`;

    return svgContent;
}

module.exports = generateLogo;

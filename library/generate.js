// Import shape classes
const { Circle, Triangle, Square } = require('./shapes');

// Function to generate a logo based on user input
function generateLogo(data) {
    // Extract user input and set default values
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

    // Create an instance of the selected shape and customize it
    switch (data.shape.toLowerCase()) {
        case "circle":
            // Create a Circle object
            shapeSVG = new Circle(data.fill, data.characters, data.text, data.stroke, textYPosition)
            break;
        case "triangle":
            // Create a Triangle object
            shapeSVG = new Triangle(data.fill, data.characters, data.text, data.stroke, textYPosition)
            break;
        case "square":
            // Create a Square object
            shapeSVG = new Square(data.fill, data.characters, data.text, data.stroke, textYPosition)
            break;
        default:
            break;
    }
    // Return the SVG code for the customized shape
    return shapeSVG.render()
}
// Export the generateLogo function
module.exports = generateLogo;

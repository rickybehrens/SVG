// Define the base Polygon class
class Polygon {
    constructor(shapeColor, text, textColor, stroke, textPosition) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.stroke = stroke;
        this.textPosition = textPosition;
    }
}

// Define the Triangle class as a subclass of Polygon
class Triangle extends Polygon {
    constructor(shapeColor,  text, textColor, stroke, textPosition) {
        super(shapeColor, text, textColor, stroke, textPosition);
            }
    // Render method for Triangle
    render() {
        // Return the SVG code for a triangle based on properties
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150,200 30,10 270,10" fill="${this.shapeColor}" stroke="${this.stroke}" stroke-width="3" /><text x="95" y="${this.textPosition}" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
    }
}

// Define the Square class as a subclass of Polygon
class Square extends Polygon {
    constructor(shapeColor,  text, textColor, stroke, textPosition) {
        super(shapeColor, text, textColor, stroke, textPosition);
            }
    // Render method for Square
    render() {
        // Return the SVG code for a square based on properties
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="55" y="5" width="190" height="190" fill="${this.shapeColor}" stroke="${this.stroke}" stroke-width="3" /><text x="95" y="${this.textPosition}" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
    }
}

// Define the Circle class as a subclass of Polygon
class Circle extends Polygon {
    constructor(shapeColor,  text, textColor, stroke, textPosition) {
        super(shapeColor, text, textColor, stroke, textPosition);
            }
    // Render method for Circle
    render() {
        // Return the SVG code for a circle based on properties
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="75" fill="${this.shapeColor}" stroke="${this.stroke}" stroke-width="3" /><text x="95" y="${this.textPosition}" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
    }
}
// Export the shape classes
module.exports = {Triangle, Square, Circle}
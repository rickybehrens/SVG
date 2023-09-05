class Polygon {
    constructor(shapeColor, text, textColor, stroke) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.stroke = stroke;
    }
}

class Triangle extends Polygon {
    constructor(shapeColor,  text, textColor, stroke) {
        super(shapeColor, text, textColor, stroke);
            }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150,200 30,10 270,10" fill="${this.shapeColor}" stroke="${this.stroke}" stroke-width="3" /><text x="95" y="120" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
    }
}

class Square extends Polygon {
    constructor(shapeColor,  text, textColor, stroke) {
        super(shapeColor, text, textColor, stroke);
            }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="55" y="5" width="190" height="190" fill="${this.shapeColor}" stroke="${this.stroke}" stroke-width="3" /><text x="95" y="120" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
    }
}

class Circle extends Polygon {
    constructor(shapeColor,  text, textColor, stroke) {
        super(shapeColor, text, textColor, stroke);
            }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="75" fill="${this.shapeColor}" stroke="${this.stroke}" stroke-width="3" /><text x="95" y="120" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
    }
}

module.exports = {Triangle, Square, Circle}
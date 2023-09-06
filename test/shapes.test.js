// Import shape classes for testing
const {Triangle, Square, Circle} = require('../library/shapes');


// Describe the Polygon shape and its subclasses for testing
describe('Polygon', () => {
    describe('triangle', () => {
        it('should render a blue triangle with black borders and red text', () => {
            // Create a Triangle object with specified properties
            const triangle = new Triangle('blue', 'RBB', 'red', 'black');
            // Test if the rendered SVG matches the expected SVG
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150,200 30,10 270,10" fill="blue" stroke="black" stroke-width="3" /><text x="95" y="${this.textPosition}" fill="red" font-size="50">RBB</text></svg>`);
        });
    });

    describe('square', () => {
        it('should render a red square with black borders and orange text', () => {
            // Create a Square object with specified properties
            const square = new Square('red', 'RBB', 'orange', 'black');
            // Test if the rendered SVG matches the expected SVG
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="55" y="5" width="190" height="190" fill="red" stroke="black" stroke-width="3" /><text x="95" y="${this.textPosition}" fill="orange" font-size="50">RBB</text></svg>`);
        });
    });

    describe('circle', () => {
        it('should render a yellow circle with black borders and pink text', () => {
            // Create a Circle object with specified properties
            const circle = new Circle('yellow', 'RBB', 'pink', 'black');
            // Test if the rendered SVG matches the expected SVG
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="75" fill="yellow" stroke="black" stroke-width="3" /><text x="95" y="${this.textPosition}" fill="pink" font-size="50">RBB</text></svg>`);
        });
    });
});
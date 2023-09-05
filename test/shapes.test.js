const {Triangle, Square, Circle} = require('../library/shapes');

describe('Polygon', () => {
    describe('triangle', () => {
        it('should render a blue triangle with black borders and red text', () => {
            const triangle = new Triangle('blue', 'RBB', 'red', 'black');
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150,200 30,10 270,10" fill="blue" stroke="black" stroke-width="3" /><text x="95" y="120" fill="red" font-size="50">RBB</text></svg>`);
        });
    });

    describe('square', () => {
        it('should render a red square with black borders and orange text', () => {
            const square = new Square('red', 'RBB', 'orange', 'black');
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="55" y="5" width="190" height="190" fill="red" stroke="black" stroke-width="3" /><text x="95" y="120" fill="orange" font-size="50">RBB</text></svg>`);
        });
    });

    describe('circle', () => {
        it('should render a yellow circle with black borders and pink text', () => {
            const circle = new Circle('yellow', 'RBB', 'pink', 'black');
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="75" fill="yellow" stroke="black" stroke-width="3" /><text x="95" y="120" fill="pink" font-size="50">RBB</text></svg>`);
        });
    });
});
// const Polygon = require('../library/shapes.js')
const {Triangle} = require('../library/shapes');

// const triangle = new Triangle();

describe('Polygon', () => {
    // describe('square', () => {
    //     it('should render a square', () => {
    //         const square = new Square;
    //         expect(data.shape).toEqual(square)
    //     });
    // });

    describe('triangle', () => {
        it('should render a triangle', () => {
            const triangle = new Triangle('blue', 'RBB', 'red');
            // shape.setColor("blue");
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150,200 30,10 270,10" fill="blue" /><text x="95" y="65" fill="red" font-size="50">RBB</text></svg>`);
        });
    });

    // describe('circle', () => {
    //     it('should render a circle', () => {
    //         const circle = new Circle;
    //         expect(data.shape).toEqual(circle)
    //     });
    // });
});
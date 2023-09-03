const Polygon = require('../library/shapes.js')

const triangle = new Triangle();

describe('Polygon', () => {
    // describe('square', () => {
    //     it('should render a square', () => {
    //         const square = new Square;
    //         expect(data.shape).toEqual(square)
    //     });
    // });

    describe('triangle', () => {
        it('should render a triangle', () => {
            const triangle = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" />');
        });
    });

    // describe('circle', () => {
    //     it('should render a circle', () => {
    //         const circle = new Circle;
    //         expect(data.shape).toEqual(circle)
    //     });
    // });
});
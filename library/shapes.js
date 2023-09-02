
// case "circle":
// shapeSVG = `<circle cx="150" cy="100" r="75" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
// break;
//         case "triangle":
// shapeSVG = `<polygon points="150,200 30,10 270,10" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
// break;   
//         case "square":
// shapeSVG = `<rect x="55" y="5" width="190" height="190" fill="${data.fill}" stroke="${data.stroke}" stroke-width="3" />`;
// break;

class Polygon {
    constructor(numberSides, height, width) {
        this.numberSides= numberSides;
        this.height = height;
        this.width = width;
    }
}
const triangle = 

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
            expect(data.shape).toEqual('<polygon points="150,200 30,10 270,10" fill="blue" />')
        });
    });

    // describe('circle', () => {
    //     it('should render a circle', () => {
    //         const circle = new Circle;
    //         expect(data.shape).toEqual(circle)
    //     });
    // });
});

module.exports = Shapes
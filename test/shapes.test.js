const Shapes = require('./../library/shapes.js')
const Triangle = require('./../library/generate.js')

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" />');

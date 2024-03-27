const { Triangle, Circle, Square } = require('./shapes');
const SVG = require('./svg');


describe('Triangle', () => {
    test('should render a purple triangle', () => {
        const expectedSVG = `<polygon points="150, 50 50, 150 250, 150" style="fill:purple"/>`;
        const triangle = new Triangle();
        triangle.setColor('purple');
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test('should accept a color param', () => {
        const expectedSVG = `<polygon points="150, 50 50, 150 250, 150" style="fill:purple"/>`;
        const triangle = new Triangle();
        triangle.setColor('purple');
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});

describe('Circle', () => {
    test('should render a orange circle', () => {
        const expectedSVG = `<circle cx="150" cy="100" r="75" style="fill:orange" />`;
        const circle = new Circle();
        circle.setColor('orange');
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test("should accept a color param", () =>{
        const expectedSVG = `<circle cx="150" cy="100" r="75" style="fill:orange" />`;
        const circle = new Circle();
        circle.setColor('orange');
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
});

describe('Square', () => {
    test('should render a blue square', () => {
        const expectedSVG = `<rect x="50" y="50" width="200" height="200" style="fill:blue"/>`;
        const square = new Square();
        square.setColor('purple');
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test('should accept a color param', () => {
        const expectedSVG = `<rect x="50" y="50" width="200" height="200" style="fill:blue"/>`;
        const square = new Square();
        square.setColor('purple');
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});

module.exports = SVG

const inquirer = require('inquirer');
const SVG = require("./svg");
const { triangle, circle, square } = require('./shapes');

const {writeFile} = require("fs/promises")

class CLI {
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: (input) => input.length < 3,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['triangle','circle','square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color',
            },
        ])
    }
}

then (({test, testColor, shape, shapeColor} )=> {
    let shape;
    switch(shape) {
        case "square":
            shape = new square();
            break;
        case "circle":
            shape = new circle();
            break;
        default:
            shape = new triangle();
            break;    
    }
    shape.setColor(shapeColor);

    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setShape(shape);
    return writeFile("logo.svg", svg.render());
})
.then(() => {
    console.log('Generated logo.svg');
})








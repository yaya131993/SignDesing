
class SVG { 
constructor() {
    this.textElement = "";
    this.shapeElement = "";
}


render() {
    return `svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
}

setShape(shape) {
    this.shapeElement = shape.render();
}

setText(message, color) {
    if(message.length > 3) {
        throw new error("text must not be more than 3 letters.");
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
}


}



module.exports = SVG;
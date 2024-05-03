// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   setColor(color) {
//     this.color = color;
//   }
// }

class Triangle{
  constructor(color, text, textColor){
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `'<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />'`;
  }
}

// class Circle extends Shape {
//   render() {
//     return `<polygon points=>`;
//   }
// }

// class Square extends Shape {
//   render() {
//     return `<rect points=>`;
//   }
// }

class Circle {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// let exampleOne = new Circle("green", "ABC", "red");

// console.log(exampleOne.render());

module.exports = { Circle, Triangle };

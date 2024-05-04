class Shape {
  constructor(color, text, textColor) {
    this.color = color
    this.text = text,
    this.textColor = textColor
  }
}

class Triangle extends Shape{
  render() {
    return `'<polygon points="150,20 70,180 230,180" fill="${this.color}" />'`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}


module.exports = { Circle, Triangle, Square };

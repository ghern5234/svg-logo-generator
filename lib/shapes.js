class Shape {
    constructor(color) {
      this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
  render() {
    return `<polygon points=>`
  }
}

class Circle extends Shape {
    render() {
      return `<polygon points=>`
    }
  }

  class Square extends Shape {
    render() {
      return `<polygon points=>`
    }
  }  

module.exports = Shape;
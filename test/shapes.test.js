// Constructor Arithmetic is imported.
const { Shape, Triangle, Square, Circle } = require('../lib/shapes.js');

// A testing suite for Shape is created.
describe('Shape', () => {
  // This test checks to see if the triangle will come back green.
  describe('Triangle', () => {
    it('should return a green triange', () => {
      //Arrange
      const color = "green";
      const triangle = new Triangle(color);
      
      //Act
      const render = triangle.render()

      //Assert
      expect(render).toEqual(`<polygon points="150,20 70,180 230,180" fill="green" />`);
    });
  });
  describe('Square', () => {
    it('should return a green square', () => {
      //Arrange
      const color = "green";
      const square = new Square(color);
      
      //Act
      const render = square.render()

      //Assert
      expect(render).toEqual(`<rect x="70" y="20" width="160" height="160" fill="green" />`);
    });
  });
  describe('Circle', () => {
    it('should return a green circle', () => {
      //Arrange
      const color = "green";
      const circle = new Circle(color);
      
      //Act
      const render = circle.render()

      //Assert
      expect(render).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
    });
  });
});

// Constructor Arithmetic is imported.
const { Shape, Triangle, } = require('../lib/shapes.js');

// A testing suite for Shape is created.
describe('Shape', () => {
  // This test checks to see if the triangle will come back green.
  describe('Triangle', () => {
    it('should ', () => {
      //Arrange
      const color = "green";
      const triangle = new Triangle(color);
      
      //Act
      const render = triangle.render()

      //Assert
      expect(render).toEqual(`'<polygon points="150,20 70,180 230,180" fill="green" />'`);
    });

    // This test checks to see if 3 % 2 has a remainder of 1 and returns 1.
    it('should calculate 3 % 2 and return 1 as the remainder', () => {
      //Arrange
      const total = 1;
      const arithmetic = new Arithmetic();

      //Act
      const result = arithmetic.modulus(3, 2);
      
      //Assert
      expect(result).toEqual(total);
    });

    // This test checks to see if 10 % 6 has a remainder of 4 and returns 4.
    it('should calculate 10 % 6 and return 4 as the remainder', () => {
     //Arrange
     const total = 4;
     const arithmetic = new Arithmetic();

     //Act
     const result = arithmetic.modulus(10, 6);
     
     //Assert
     expect(result).toEqual(total);
    });
  });
});

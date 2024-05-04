const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "What text should go inside of the svg? (At most 3 characters)",
      validate: function (answer) {
        if (answer.length > 3) {
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "What color should the text be? (Must be a valid color or a hexidecimal)",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape shold the logo be?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color should the svg be?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    //answers.shaoe
    let userShape;
    if (answers.shape === "circle") {
      console.log("The user wants cirlce");
      userShape = new Circle(
        answers.shapeColor,
        answers.characters,
        answers.textColor
      );
    } else if(answers.shape === "triangle") {
      userShape = new Triangle(
        answers.shapeColor,
        answers.characters,
        answers.textColor
      )
    } else {
        userShape = new Square(
            answers.shapeColor,
            answers.characters,
            answers.textColor
        )
    }

    var templateCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >

    ${userShape.render()}
  
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${
      userShape.textColor
    }">${userShape.text}</text>
  
  </svg>`;

    console.log("HIS IS THE TEM[PLATE CODE");

    console.log(templateCode);

    fs.writeFile("./logo.svg", templateCode, (err) => {
      if (err) {
        throw err;
      }
      console.log(" you file has been created");
    });
  });

// function writeToFile(fileName, data) {
//   fs.writeFileSync(fileName, data);
// }

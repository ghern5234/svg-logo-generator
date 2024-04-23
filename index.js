const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes')

inquirer.prompt(
    [
        {
         type: 'input',
         name: 'characters',
        message: 'What text should go inside of the svg? (At most 3 characters)',
        validate: function (answer) {
            if(answer.length > 3) {
                return false
            }
            return true
          },
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color should the text be? (Must be a valid color or a hexidecimal)',

        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape shold the logo be?',
            choces: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color should the svg be?',
        }
    ]
)
.then((answers) => {
    console.log(answers);
})

function writeToFile(fileName, data){
fs.writeFileSync(fileName, data);
}
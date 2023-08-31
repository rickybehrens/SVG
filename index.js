const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./library/generate');

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "characters",
                message: "Type the characters in the logo (3 max)",
            },
            {
                type: "input",
                name: "text",
                message: "Please type in the text's color (you can also type in the hexadecimal number)",
            },
            {
                type: "list",
                name: "shape",
                message: "Please select which shape you'd like the logo to be:",
                choices: ["circle", "Triangle", "Square"]
            },
            {
                type: "input",
                name: "fill",
                message: "Please type in the shape's color (you can also type in the hexadecimal number)",
            },
            {
                type: "input",
                name: "stroke",
                message: "Please type in the shape's border color (you can also type in the hexadecimal number)",
            },
        ])

        .then((data) => {
            const logoContent = markdown(data);

            fs.writeFile('logo.svg', logoContent, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Generated logo.svg');
                }
            })
        });

}

init();

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
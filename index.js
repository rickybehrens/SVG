const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./library/generate');

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
            {
                type: "list",
                name: "textPosition",
                message: "Please select the text position:",
                choices: ["top", "center", "bottom"],
            },
        ])
        .then((data) => {
            const svgContent = generateLogo(data); // Generate SVG content
            saveLogoToFile(svgContent); // Save the generated content to a file
        })
        .catch((error) => {
            console.error(error);
        });
}

function saveLogoToFile(content) {
    fs.writeFile('logo.svg', content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

init();
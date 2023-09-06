// Import required libraries and modules
const inquirer = require('inquirer'); // For user input prompts
const fs = require('fs'); // For file operations
const generateLogo = require('./library/generate'); // Import the logo generation function

// Function to initialize the application
function init() {
    // Prompt the user for input using Inquirer
    inquirer
        .prompt([
            // Input prompts for logo customization
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
                choices: ["Circle", "Triangle", "Square"]
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
                choices: ["Top", "Center", "Bottom"],
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

// Function to save the generated logo content to a file
function saveLogoToFile(content) {
    fs.writeFile('logo.svg', content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

// Initialize the application
init();
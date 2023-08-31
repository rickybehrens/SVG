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
            {
                type: "list",
                name: "textPosition",
                message: "Please select the text position:",
                choices: ["top", "center", "bottom"],
            },
            {
                type: "list",
                name: "mirrorText",
                message: "Do you want to mirror the text?",
                choices: ["Yes", "No"],
            },
        ])
        .then((data) => {
            if (data.mirrorText === "Yes") {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            name: "mirrorType",
                            message: "Select mirror type:",
                            choices: ["Vertical", "Horizontal"],
                        },
                        {
                            type: "input",
                            name: "mirrorOpacity",
                            message: "Enter opacity for the mirror (0-1):",
                        },
                        {
                            type: "confirm",
                            name: "fadeMirror",
                            message: "Do you want to include a fade for the mirror?",
                            default: false,
                        },
                    ])
                    .then((mirrorData) => {
                        // Merge mirrorData with data to have all information in one object
                        const mergedData = { ...data, ...mirrorData };
                        const logoContent = markdown(mergedData);
                        saveLogoToFile(logoContent);
                    });
            } else {
                const logoContent = markdown(data);
                saveLogoToFile(logoContent);
            }
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
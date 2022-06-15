// Import Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


//array of questions to be passed to inquirer call
const questions = [
    {
        type: "input",
        message: "What would you like to name your project?",
        name: "projectname",
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Enter the installation instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter usage information",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter contributing guidelines",
        name: "contributing",
    },
    {
        type: "input",
        message: "Enter test information",
        name: "testinfo",
    },
    {
        type: "input",
        message: "Enter your email",
        name: "email",
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "github",
    },
    {
        type: "list",
        message: "pick a license",
        name: "license",
        choices: ["Apache 2.0", "MIT", "Mozilla", "none"]
    },
    

];

//function to create/write data to README file. Called in init() function.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!'))
}


function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const readmeText = generateMarkdown(data);
        writeToFile('./output/README.md', readmeText);

    })
    


}

//starts app
init();

// TODO: Include packages needed for this application
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!'))
       
    // Call fs write file function with passed file name and data as input arguments
    // You can either use async call with callback function or synchronous call
    // HINT: optional - use standard library function path to construct absolute path
    //  to the current folder and file name
}

// TODO: Create a function to initialize app
function init() {
    // 1. Make a call to inquirer.prompt with passed questions as input argument
    inquirer.prompt(questions)
    .then((data) => {
        const readmeText = generateMarkdown(data);
        writeToFile('README.md', readmeText);

    })
    

    // 3. Make a call to writeToFile passed file name and data as input arguments
}

// Function call to initialize app
init();

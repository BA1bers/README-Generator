// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Type the title of your project'
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'type in the description of you project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions on how to use yout project'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'contributors for your project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what are your project tests?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['']

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

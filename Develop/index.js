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
        message: 'What are your project tests?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['']

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

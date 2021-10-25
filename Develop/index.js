// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'repoName',
            message: 'Please enter the name of the repository you want the README for.'
        },
        {
            type: 'input',
            name: 'porjectTitle',
            message: 'Please enter the name of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project'
        },
        {
            type: 'input',
            name: 'tOfC',
            message: 'Please enter a list of tabel of contents for your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install and run your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe what your project is used for, include screenshots if needed.'
        },
        {
            type: 'input',
            name:'credits',
            message: 'List fellow collaborators, tutorials, third-party assets, and creators used, with links to primary websites and/or gitHub profiles'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please choose a license for your project'
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

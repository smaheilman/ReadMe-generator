// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = questionData => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the name of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project'
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
        {
            type: 'checkbox',
            name: 'tOfC',
            message: 'Please select items in your table of contents',
            choices: ['Description', 'Installation', 'Usage', 'Credits', 'Liscense']
        },
        {
         type: 'input',
         name: 'email',
         message: 'Please enter an email address and/or gitHub profile for questions on your project.'   
        }
    ]);
};




// TODO: Create a function to write README file
function writeToFile(fileContent) {
    fs.writeFile('README.md', fileContent, err => {
        if(err) {
            return console.log(err);
        }

        console.log('Page Created!')
    });
}

// TODO: Create a function to initialize app
function init() { 
    questions()
    .then(questionData => {
        const readMePage = generateMarkdown(questionData);
        writeToFile(readMePage);
    })
}

// Function call to initialize app
init();

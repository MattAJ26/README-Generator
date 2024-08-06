// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is a brief description for your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Link screenshots here',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List collaborators and their GitHub profiles',
  },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(function (answers) {
    })
}

// Function call to initialize app
init();

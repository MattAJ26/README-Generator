// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
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
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: [
      'GPL',
      'Apache-2.0',
      'MIT',
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Describe how to contribute to the project',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide details on how to run any tests here',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Provide your GitHub username and email address here',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("writing to file");
  fs.writeFile(path.join("dist", fileName), data)
  .then ((result) => {
    console.log("results", result);
    
  }).catch((err)=> console.error(err))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("next part", answers);
    const data = generateMarkdown(answers);
    console.log(data);


    //call writetofile function last
    writeToFile("readme.md", data)
  })
}

// Function call to initialize app
init();

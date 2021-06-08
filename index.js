//node packages
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    { 
        //project information
        type: 'input', 
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!'); //OR return 'Please enter...'
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description!'); //OR return 'Please enter...'
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do users install your app?',
    },
    {
        type: 'input', 
        name: 'usage', 
        message: 'How do users use your app?'   
    },
    {
        type: 'input', 
        name: 'contribution', 
        message: 'What are the contribution guidelines for your app?'   
    },
    {
        type: 'input', 
        name: 'test', 
        message: 'What are the test instructions for your app?'   
    },
    {
        //license information
        type: 'list',
        name: 'license',
        message: 'What licence did you use?',
        choices: ['MIT License', 'GNU License', 'Apache License 2.0', 'BSD']
    },
    {
        //user information
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [title, github] = readmeDataArgs;

const generatePage = (projTitle, githubName) => {
    return `
    Title: ${projTitle}
    GitHub: ${githubName}
    `;
};
console.log(title, github);
console.log(generatePage(title, github));
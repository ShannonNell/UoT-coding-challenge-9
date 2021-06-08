//node packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

//prompt user for answers to questions
const promptUser = () => {
    return inquirer.prompt([
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
            choices: ['MIT License', 'GNU GPL License', 'Apache License 2.0', 'BSD']
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
    ])
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(readmeFile => {
        return writeToFile('./dist/README.md', readmeFile);
    })
    .catch(err => {
        console.log(err);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            //if error, reject promise
            if (err) {
                reject(err);
                return;
            }
            //if all is well
            resolve({
                ok: true, 
                message: 'File created!'
            });
        });
    });
};

//initiallize app
promptUser();


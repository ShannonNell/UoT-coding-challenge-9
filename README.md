# Challenge 9 Node.js: Professional README Generator

## Description
A professional README file can be created solely by using the comand-line. Simply answer the questions the inquirer asks and your README file will be dynamically created with appropriate headings, table of content, links, contact info, and screenshots. When complete, the file will be created and available in the dist folder.

Done as a challenge for UoT's Coding Bootcamp.
___

## Talbe of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Tools](#tools)
* [Credits](#credits)
* [License](#license)
* [Challenge Guidelines](#challenge-guidelines)
___

## Installation
Ensure you are in the root directory of your repository, then open your CLI (command-line interface) and run the command `npm install inquirer`. If you would like to add screenshots to your readme, make sure you add your own 'assets' folder with a folder named 'images' within it. There you can add your screenshot to be used in your generated file.
___

## Usage
With node installed, from your root directory open the CLI and run the command `node index` or `node index.js`. Questions will appear for you to answer. Details are good! Once finished answering the questions, your readme will be generated and ready for you to use in the 'dist' folder. 

![screenshotHere](./assets/images/)
___

## Links
### Walkthrough of app:
* [Video Walkthrough]()
___

## Tools
* node.js
* JavaScript
___

## Credits
* Completed by: [Nell-GitHub](https://github.com/ShannonNell)
* This project started with a starter code from [Xandromus](https://github.com/coding-boot-camp/potential-enigma) as part of the UoT coding bootcamp.
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## Challenge Guidelines
### User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

### Criteria: 
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
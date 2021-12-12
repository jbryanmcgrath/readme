// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const promptUser = userData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please your email address for questions related to this project (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a detailed description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter how a user would install this  application (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter instruction!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add usage information about your project (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter a contribution guidelines (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter test instructions (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "AboutMe" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What lisence does this project use?',
            choices: ['MIT', 'MITT', 'MITTT', 'MITTTT', 'none']
        }
    ]);
};

promptUser()
    .then(userData => {
        console.log(userData)
    })

const { github } = userData

console.log({ github })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
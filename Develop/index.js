// This code requires the inquirer and FS packages in order to properly funcion.

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Provide a file name:',
        name: 'fileName',
        validate: input => input ? true : console.warn('\nPlease provide a value'),
        default: 'README',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: input => input ? true : console.warn('\nPlease provide a value'),
    },
    {
        type: 'input',
        message: 'Describe your project: What is the motivation? What does it solve?',
        name: 'description',
        validate: input => input ? true : console.warn('\nPlease provide a value'),
    },
    {
        type: 'input',
        message: 'How do you install the project?',
        name: 'installation',
        validate: input => input ? true : console.warn('\nPlease provide a value'),

    },
    {
        type: 'input',
        message: 'How do you use the project?',
        name: 'usage',
        validate: input => input ? true : console.warn('\nPlease provide a value'),

    },
    {
        type: 'input',
        message: 'Who contributed? List in this format: username2, username2, ... ',
        name: 'credits',
        validate: input => input ? true : console.warn('\nPlease provide a value'),

    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: [
            'None',
            'Apache',
            'Boost',
            'BSD',
            'Eclipse',
            'GNU GPLv3',
            'Hippocratic',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'Open Data Commons',
            'PERL',
            'SIL',
            'Unlicense',
            'WTFPL',
            'Zlib',
        ],
    },
    {
        type: 'input',
        message: 'Contribution Guidelines?',
        name: 'contribution',
        default: 'None'
    },
    {
        type: 'input',
        message: 'Test instructions?',
        name: 'tests',
        default: 'None'
    },
    {
        type: 'input',
        message: 'Email Address?',
        name: 'email',
        validate: input => input ? true : console.warn('\nPlease provide a value'),

    },
    // {
    //     type: 'input',
    //     message: 'Questions?',
    //     name: 'questions',
    //     default: ''
    // },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,data, (err) => 
        err ? console.error('Error in writing File!') : console.log('ReadMe successfully generated!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response.fileName + '.md', generateMarkdown(response))
        )

}

// Function call to initialize app
init();

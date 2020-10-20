const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");


/*
* The generated README includes the following sections: 

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.

*/
// array of questions for user
const questions = ["Title: ",
    "Description: ",
    "Installation: ",
    "Usage: ",
    "License: ",
    "Contributing: ",
    "Test Instructions: ",
    "Github UserName: ",
    "Email: "
];

const answers = [];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
async function init() {
    for (let i = 0; i < questions.length; i++) {
        if (i == 4) {
            await askLicense();
        }
        else {
            await askQuestion(questions[i]);
        }
    }
    writeToFile("README.md", generateReadmeText());
}


async function askQuestion(question) {
    try {
        const { answer } = await inquirer.prompt({
            message: question,
            name: "answer"
        })
        answers.push(answer);
    } catch (err) {
        console.log(err);
    }
}

async function askLicense() {
    try {
        const { answer } = await inquirer.prompt({
            type: "list",
            choices: ["MIT", "Apache", "GPLv2", "Other", "None"],
            name: "answer",
            message: "What license was used?"
        })
        answers.push(answer);
    } catch (err) {
        console.log(err);
    }
}


function generateReadmeText() {
    const text = `
${answers[0]}

Table of Contents:
[Description](#description) 
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)
    
# Description 
    ${answers[1]}

# Installation
    ${answers[2]}

# Usage
    ${answers[3]}

# License
    ${answers[4]}

# Contributing
    ${answers[5]}

# Tests
    ${answers[6]}

# Questions
    My github is [${answers[7]}](https://github.com/${answers[7]})
    Email me at ${answers[8]}
    
    
    `
    return text;
}
// function call to initialize program
init();

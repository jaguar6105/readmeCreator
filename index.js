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
    for(let i = 0; i < questions.length; i++){

    await askQuestion(questions[i]);
    }
    writeToFile("README.md", generateReadmeText());
}


async function askQuestion(question) {
    try {
        //for(let i = 0; i < questions.length; i++){
        const { answer } = await inquirer.prompt({
            message: question,
            name: "answer"
        })
        answers.push(answer);
    //}
    } catch (err) {
        console.log(err);
    }
}

function generateReadmeText() {
    const text = `${answers[0]}
    Table of Contents:
    
    Description: 
    ${answers[1]}
    

    Installation:
    ${answers[2]}

    Usage:
    ${answers[3]}

    License: 
    ${answers[4]}

    Contributing:
    ${answers[5]}

    Tests:
    ${answers[6]}

    Questions:
    My github is ${answers[7]}
    Email me at ${answers[8]}
    
    
    `
    return text;
}
    // function call to initialize program
    init();
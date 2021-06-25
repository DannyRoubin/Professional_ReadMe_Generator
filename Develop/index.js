// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");



inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What is the installation guide?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your app?",
    },
    {
      type: "input",
      name: "license",
      message: "What is the licensing for the project?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How do you contribute to the project?",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions?",
    },
    {
      type: "input",
      name: "github",
      message: "Please input ONLY your valid github url",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
    },
  ])
  .then((response) => {
    console.log(response);
    const md = generateMarkdown(response);
    const filename = `${response.title.toLowerCase().split(" ").join("")}.md`;
    fs.writeFile(filename, md, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

const generateMarkdown = function (answers) {
  const md = `
  # ${answers.title}


  ## table of contents
  [App Description](#app-description)
  [Installation](#installation)
  [Usage](#usage)
  [Licence](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

## App Description 
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This ReadMe is covered under the following license: ${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.test}

## Questions
For questions, you can contact me either at my github ${answers.github} or you can reach me by email at ${answers.email} 


![A screenshot of the app.](./assets/images/AppScreenshot.jpg)

## Link to the App
https://dannyroubin.github.io/Homework5_WorkDayScheduler/
  `;

  return md;
};








// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

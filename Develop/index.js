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
  const md = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Hi! My name is ${answers.name}</h1>
          <p class="lead">I am from ${answers.location}.</p>
          <h3>
            Example heading <span class="badge badge-secondary">Contact Me</span>
          </h3>
          <ul class="list-group">
            <li class="list-group-item">
              My GitHub username is ${answers.github}
            </li>
            <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
          </ul>
        </div>
      </div>
    </body>
  </html>
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

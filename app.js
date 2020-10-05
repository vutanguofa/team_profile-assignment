const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptUser = () => {
  console.log(`
  =================
  Enter manager details
  =================
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'manName',
      message: 'Enter team manager name. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Enter team manager name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manId',
      message: 'Enter manager employee ID.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Enter manager employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manEmail',
      message: 'Enter manager email address.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Enter manager email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manNum',
      message: 'Enter manager office number.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Enter manager office number!');
          return false;
        }
      }
    }
  ]);
};

const addEmployees = teamInfo => {
  console.log(`
=================
Enter engineer or intern details
=================
`);

  // If there's no 'employees' array property, create one
  if (!teamInfo.team) {
    teamInfo.team = [];
  }
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'employees',
        message: 'Select employee title.',
        choices: ['Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'empName',
        message: 'Enter employee name. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Enter employee name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'empId',
        message: 'Enter employee employee ID.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Enter employee employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'empEmail',
        message: 'Enter employee email address.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Enter employee email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'empGit',
        message: 'Enter GitHub username.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Enter GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'empSchool',
        message: 'Enter school name.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Enter school name!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddEmp',
        message: 'Would you like to add another employee?',
        default: false
      }
    ])
    .then(teamProfDetails => {
      teamInfo.team.push(teamProfDetails);
      if (teamProfDetails.confirmAddEmp) {
        return addEmployees(teamInfo);
      } else {
        return teamInfo;
      }
    });
};

promptUser()
  .then(addEmployees)
  .then(teamInfo => {
    return generatePage(teamInfo);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
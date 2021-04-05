const fs = require('fs');
const inquirer = require('inquirer');

// Questions about user
const promptUser = () => {
    return inquirer.prompt([
        // Questions about manager
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? (Required)",
            validate: managerNameInput => {
                if(managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's Id? (Required)",
            validate: managerIdInput => {
                if(managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter manager's Id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team's manager email address? (Required)",
            validate: managerEmailInput => {
                if(managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "What is the team manager's office number? (Required)",
            validate: managerNumberInput => {
                if(managerNumberInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'menuOption',
            message: 'What would you like to do? (Required)',
            choices: [
                {name:'Add an engineer', default: false},
             {name:'Add an intern', default: false}, 
             {name: 'finish buiding the team', default: false}
            ]
        }
    ]);
};

promptUser();
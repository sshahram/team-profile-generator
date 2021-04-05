const fs = require('fs');
const inquirer = require('inquirer');

// Questions about manager
const promptManager = () => {
    return inquirer.prompt([
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
            message: "What is the team's manager email address?",
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "What is the team manager's office number?",
        },
        {
            type: 'list',
            name: 'menuOption',
            message: 'What would you like to do? (Required)',
            choices: [
                { name: 'Add an engineer', default: false },
                { name: 'Add an intern', default: false },
                { name: 'finish buiding the team', default: false }
            ]
        }
    ]);
};

// Questions about engineers
const promptEngineer = engineerData => {
    // if there is not user array prompt to create one
    if(!engineerData.engineerArr) {
        engineerData.engineerArr = [];
    }
    return inquirer.prompt([
        // questions for engineers
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name? (Required)",
            validate: engineerNameInput => {
                if(engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's name!");
                    return false;
                }
            },
            When: ({menuOption}) => {
                if(menuOption.indexOf('Add an engineer') > -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's Id?",
            When: ({menuOption}) => {
                if(menuOption.indexOf('Add an engineer') > -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            messsage: "What is the engineer's email address?",
            When: ({menuOption}) => {
                if(menuOption.indexOf('Add an engineer') > -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
            {
                type: 'input',
                name: 'engineerGithub',
                message: " What is the engineer's GitHub username?",
                When: ({menuOption}) => {
                    if(menuOption.indexOf('Add an engineer') > -1) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }   
    ]);
};


promptManager()
    .then(response => {
        if(response.menuOption.indexOf('Add an engineer') > -1) {
            return promptEngineer(response);
        } else {
            return response;
        }
    })
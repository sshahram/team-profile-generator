const fs = require('fs');
const {writeFile, copyFile} = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/page-template.js');
const teamMembers = [];

// Questions about team members
const promptQuestions = () => {
    return inquirer.prompt([
        // role
        {
            type: 'list',
            name: 'role',
            message: "What is the team member's role? (Required)",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if(roleInput) {
                    return true;
                } else {
                    console.log("Please select the team member's role!");
                    return false;
                }
            }
        },
        // name
        {
            type: 'input',
            name: 'name',
            message: "What is team member's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter team member's name!");
                    return false;
                }
            }
        },
        // employee id
        {
            type: 'input',
            name: "id",
            message: "What is team member's employee id?"
        },
        // email address
        {
            type: 'input',
            name: 'email',
            message: "What is team member's email address?"
        }

    ])
    .then(({role, name, id, email}) => {
        let moreInfo = '';
        if(role === 'Manager') {
            moreInfo = 'office number';
        } else if(role === 'Engineer') {
            moreInfo = 'GitHub username';
        } else {
            moreInfo = 'school';
        }
        // questions to be asked depending on team memeber's role
        inquirer.prompt([
            {
                type: 'input',
                name: 'moreInfo',
                message: `What is team member's ${moreInfo}`
            },
            // adding more team members
            {
                type: 'confirm',
                name: 'addMembers',
                message: 'Would you like to go back to the menu to add more team members?',
                default: false
            }
        ])
        .then(({addMembers, moreInfo})=> {
            let newTeamMember;
            if(role === 'Manager') {
                newTeamMember = new Manager(role, name, id, email, moreInfo);
            } else if(role === 'Engineer') {
                newTeamMember = new Engineer(role, name, id, email, moreInfo);
            } else {
                newTeamMember = new Intern(role, name, id, email, moreInfo);
            }
            teamMembers.push(newTeamMember);
            if(addMembers) {
                promptQuestions();
            } else {
                console.log(teamMembers);
            }
        })      
    });
};

promptQuestions()
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(() => {
        return copyFile();
    })
    .catch(err => {
        console.log(err);
    });
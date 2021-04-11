const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const copyFile = require('./utils/copy-stylesheet.js');
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
                message: `What is team member's ${moreInfo}?`
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
            generateCard(newTeamMember);
            if(addMembers) {
                promptQuestions();
            } else {
                generateFooter();
            }
        })      
    });
};

// generate headers for html file
const generateHeader = () => {
    const header = `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,500;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
      <div class="text-center py-3">
        <h1 class="py-2 px-3">My Team</h1>
      </div>
    </header>
    <div class="container">
        <div class="row">`;
        fs.writeFile("./dist/index.html", header, (err) => {
            if(err) {
                console.log(err);
            }
        });
}


// generate cards for each team member in html file
const generateCard = teamMember => {
    return new Promise(function(resolve, reject) {
    const name = teamMember.getName();
    const role = teamMember.getRole();
    const id = teamMember.getId();
    const email = teamMember.getEmail();
    let content = '';
    if( role === 'Manager') {
        const officeNumber = teamMember.getOfficeNumber();
        content = `
        <div class="col-12 col-md-4">
            <div class="card mx-auto mb-3" style="width: 15rem; height: 15rem">
            <h5 class="card-header">${name}<br /><i class="fas fa-mug-hot"></i> Manager</h5>
            <div class="card-body">
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>Office Number: ${officeNumber}</p>
            </div>
            </div>
        </div>`;
    }
    else if( role === 'Engineer') {
        const github = teamMember.getGithub();
        content=`
        <div class="col-12 col-md-4">
            <div class="card mx-auto mb-3" style="width: 15rem; height: 15rem">
            <h5 class="card-header">${name}<br /><i class="fas fa-glasses"></i> Engineer</h5>
            <div class="card-body">
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>GitHub: <a href=https://github.com/${github} target="_blank">${github}</a></p>
            </div>
            </div>
        </div>`
    }
    else {
        const school = teamMember.getSchool();
        content = `<div class="col-12 col-md-4">
        <div class="card mx-auto mb-3" style="width: 15rem; height: 15rem">
        <h5 class="card-header">${name}<br /><i class="fas fa-user-graduate"></i> Intern</h5>
        <div class="card-body">
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>School: ${school}</p>
        </div>
        </div>
    </div>`
    }
    fs.appendFile('./dist/index.html', content, err => {
        if(err) {
            return reject(err);
        }
        return resolve();
    })
})
};

// generate footer for html file
const generateFooter = () => {
    const content = `
    </div>
    </div>
  </body>
  </html>`;
  fs.appendFile('./dist/index.html', content, err => {
    if(err) {
        console.log(err);
    }
    });
}

// initalize app
const initApp = () => {
    generateHeader();
    promptQuestions()
    .then(() => {
        return copyFile();
    });
}

// call function to start app
initApp();
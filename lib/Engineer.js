const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name='', id='', email='', github='', role='Engineer') {
        //call parent constructor
        super(name, id, email, role);

        // github username property is for Engineers only
        this.github = github;
    }

    // function to get github profile
    getGithub() {
        return `https://github.com/${this.github}`;
    }
}

module.exports = Engineer;
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(role='Engineer', name='', id='', email='', github='') {
        //call parent constructor
        super(name, id, email, role);

        // github username property is for Engineers only
        this.github = github;
    }

    // function to get github profile
    getGithub() {
        return `${this.github}`;
    }
}

module.exports = Engineer;
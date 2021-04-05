const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name='', id='', email='', github='') {
        //call parent constructor
        super(name, id, email);

        // github username property is for Engineers only
        this.github = github;
    }
}

module.exports = Engineer;
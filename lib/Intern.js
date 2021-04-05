const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name='', id='', email='', role='Intern') {
        // call parent constructor
        super(name, id, email, role);
    }
}

module.exports = Intern;
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name='', id='', email='', officeNumber='', role='Manager') {
        // call parent constructor
        super(name, id, email);

        // office number property is for managers only
        this.officeNumber = officeNumber;

        // change role for managers
        this.role = role;
    }
}

module.exports = Manager;
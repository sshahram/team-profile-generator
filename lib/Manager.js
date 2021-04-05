const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name='', id='', email='', officeNumber='', role='Manager') {
        // call parent constructor
        super(name, id, email, role);

        // office number property is for managers only
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
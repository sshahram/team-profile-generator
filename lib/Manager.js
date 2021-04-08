const Employee = require('./Employee');

class Manager extends Employee {
    constructor(role='Manager', name='', id='', email='', officeNumber='') {
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
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name='', id='', email='', officeNumber='') {
        // call parent constructor
        super(name, id, email);

        // office number property is for managers only
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name='', id='', email='') {
        // call parent constructor
        super(name, id, email);
    }
}

module.exports = Manager;
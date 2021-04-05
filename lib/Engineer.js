const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name='', id='', email='') {
        //call parent constructor
        super(name, id, email);
    }
}
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name='', id='', email='', school='', role='Intern') {
        // call parent constructor
        super(name, id, email, role);

        // school property is for Interns only
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
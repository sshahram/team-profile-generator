const Employee = require('./Employee');

class Intern extends Employee {
    constructor(role='Intern', name='', id='', email='', school='') {
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
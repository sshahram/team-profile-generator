class Employee {
    constructor(name='', id ='', email='') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // function to return employee's name
    getName() {
        return this.name;
    }
    // function to return employee's id
    getId() {
        return this.id;
    }
    // function to return employee's email
    getEmail() {
        return this.email;
    }
    // function to return role
    getRole() {
        return `Employee`
    }

}


module.exports = Employee;
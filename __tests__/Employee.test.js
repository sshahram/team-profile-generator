const Employee = require('../lib/Employee');

test('creates an Employee object' , () => {
    const employee = new Employee('Jane', 1234, 'jane@gmail.com');

    expect(employee.name).toBe('Jane');
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe('jane@gmail.com');

});

test("get Employee's name", () => {
    const employee = new Employee('Jane', 1234, 'jane@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("get Employee's id", () => {
    const employee = new Employee('Jane', 1234, 'jane@gmail.com');

    expect(employee.getId()).toEqual(employee.id);
});

test("get Employee's email address", () => {
    const employee = new Employee('Jane', 1234, 'jane@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("get Employee's role", () => {
    const employee = new Employee('Jane', 1234, 'jane@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
})
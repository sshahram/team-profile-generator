const Manager = require('../lib/Manager');

test("check Manager's office number", () => {
    const manager = new Manager('Manager','David', 567, 'david@gmail.com', 2);

    expect(manager.officeNumber).toBe(2);
});

test("get Manager's role", () => {
    const manager = new Manager('Manager','David', 567, 'david@gmail.com', 2);

    expect(manager.getRole()).toEqual("Manager");
});

test("get Manager's office number", () => {
    const manager = new Manager('Manager','David', 567, 'david@gmail.com', 2);

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});
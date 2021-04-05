const Manager = require('../lib/Manager');

test("get Manager's office number", () => {
    const manager = new Manager('David', 567, 'david@gmail.com', 2);

    expect(manager.officeNumber).toBe(2);
});

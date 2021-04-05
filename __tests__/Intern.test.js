const Intern = require('../lib/Intern');

test("check Intern's school", () => {
    const intern = new Intern('Jack', 789, 'jack@gmail.com', 'UC Berkeley');

    expect(intern.school).toBe('UC Berkeley');
});

test("get Intern' school name", () => {
    const intern = new Intern('Jack', 789, 'jack@gmail.com', 'UC Berkeley');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("get Intern's role", () => {
    const intern = new Intern('Jack', 789, 'jack@gmail.com', 'UC Berkeley');

    expect(intern.getRole()).toEqual("Intern");
})
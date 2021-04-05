const Engineer = require('../lib/Engineer');

test("check Engineer's github username", () => {
    const engineer = new Engineer('Shirin', 567, 'shirin@gmail.com', 'sshahram');

    expect(engineer.github).toBe('sshahram');
});

test("get Engineer's GitHub username", () => {
    const engineer = new Engineer('Shirin', 567, 'shirin@gmail.com', 'sshahram');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});
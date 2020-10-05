const Engineer = require("../lib/Engineer");

test("github test", () => {
  const gitHubTest = "vutanguofa";
  const emp = new Engineer("test", 1, "asdf@asdf.com", gitHubTest);
  expect(emp.github).toBe(gitHubTest);
});

test("getRole() test", () => {
  const titleTest = "Engineer";
  const emp = new Engineer("test", 1, "asdf@asdf.com", "GitHubUser");
  expect(emp.getRole()).toBe(titleTest);
});

test("getGithub() test", () => {
  const getGitHubTest = "vutanguofa";
  const emp = new Engineer("test", 1, "asdf@asdf.com", getGitHubTest);
  expect(emp.getGithub()).toBe(getGitHubTest);
});

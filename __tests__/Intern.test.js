const Intern = require("../lib/Intern");

test("school test", () => {
  const schoolTest = "asdf";
  const emp = new Intern("test", 1, "asdf@asdf.com", schoolTest);
  expect(emp.school).toBe(schoolTest);
});

test("getRole() test", () => {
  const titleTest = "Intern";
  const emp = new Intern("test", 1, "asdf@asdf.com", titleTest);
  expect(emp.getRole()).toBe(titleTest);
});

test("getSchool() test", () => {
  const getSchoolTest = "asdf";
  const emp = new Intern("test", 1, "asdf@asdf.com", getSchoolTest);
  expect(emp.getSchool()).toBe(getSchoolTest);
});

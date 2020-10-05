const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("office number test", () => {
  const officeNumTest = 4801231234;
  const emp = new Manager("test", 1, "asdf@asdf.com", officeNumTest);
  expect(emp.officeNumber).toBe(officeNumTest);
});

test("getRole() test", () => {
  const titleTest = "Manager";
  const emp = new Manager("test", 1, "asdf@asdf.com", titleTest);
  expect(emp.getRole()).toBe(titleTest);
});

test("getOffice() test", () => {
  const getOfficeTest = 4801231234;
  const emp = new Manager("test", 1, "asdf@asdf.com", getOfficeTest);
  expect(emp.getOfficeNumber()).toBe(getOfficeTest);
});

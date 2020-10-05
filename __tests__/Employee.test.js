const Employee = require("../lib/Employee");

test("object test", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("name test", () => {
  const fakeName = "John Doe";
  const emp = new Employee(fakeName);
  expect(emp.name).toBe(fakeName);
});

test("id test", () => {
  const fakeId = 999;
  const emp = new Employee("test", fakeId);
  expect(emp.id).toBe(fakeId);
});

test("email test", () => {
  const fakeEmail = "asdf@asdf.com";
  const emp = new Employee("test", 1, fakeEmail);
  expect(emp.email).toBe(fakeEmail);
});

test("getName() test", () => {
  const getNameTest = "John Doe";
  const emp = new Employee(getNameTest);
  expect(emp.getName()).toBe(getNameTest);
});

test("getId() test", () => {
  const getIdTest = 999;
  const emp = new Employee("test", getIdTest);
  expect(emp.getId()).toBe(getIdTest);
});

test("getEmail() test", () => {
  const getEmailTest = "asdf@asdf.com";
  const emp = new Employee("test", 1, getEmailTest);
  expect(emp.getEmail()).toBe(getEmailTest);
});

test("returns Employee", () => {
  const titleTest = "Employee";
  const emp = new Employee("John Doe", 1, "asdf@asdf.com");
  expect(emp.getRole()).toBe(titleTest);
});

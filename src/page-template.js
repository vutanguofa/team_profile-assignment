// Add epmployee sections
const generateEmployees = employeesArr => {
  return `
    <section>
      <h3 class="employeesSection">Employee Section</h3>
      <div>
      ${employeesArr
      .map(({ empName, empId, empEmail, empSchool, employees, empGit }) => {
        return `
          <div class="employeesDetails">
            <h4>Employee Details</h4>
            <p>
              Title:
              ${employees}
            </p>
            <p>Name: ${empName}</p>
            <p>Employee ID: ${empId}</p>
            <p>Email: <a href="mailto:${empEmail}">${empEmail}</a></p>
            <p>School: ${empSchool}</p>
            <p><a href="https://github.com/${empGit}" target="_blank"></i>View GitHub Profile</a></p>
          </div>
          <div class="spanSpace"></div>
        `;
      })
      .join('')}
    
      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { manName, manId, manEmail, manNum, team } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header class="header">
      <a href="index.html" class="logo">Team Profile</a>
    </header>
    <main>
      <h2 class="managerSection">Manager Section</h2>
      <div class="managerDetails">
        <h2>Manager Details</h2>
        <p>Name: ${manName}<p>
        <p>Employee ID: ${manId}<p>
        <p>Email: <a href="mailto:${manEmail}">${manEmail}</a><p>
        <p>Phone: ${manNum}<p>
      </div>
      ${generateEmployees(team)}
    </main>
    <footer>
      <h6>&copy;2020 by Vu Tang</h6>
    </footer>
  </body>
  </html>
  `;
};

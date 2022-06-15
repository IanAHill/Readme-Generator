
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;

    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;

    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
  }
}


function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return "* [License](#license)";
  }
}


function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License \n ${license}`;
  }
}


function generateMarkdown(data) {

  console.log(data);

  return `# ${data.projectname}
    
  ## Description 
  ${data.description}
  
  ## Table of Contents 
  * [Installation](#installation)
  ${renderLicenseLink(data.license)}
  * [Usage](#installation)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  
  ## Contributing
  ${data.contributing}
  
  ## Test
  ${data.testinfo}

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}
  
  ## and Questions
  Email: ${data.email}

  GitHub Account: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;

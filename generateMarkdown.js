// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return "* [License](#license)";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License 
    ${license}`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // With template literal, create README file markdown file content and return it to the caller
  //  using template literal variables to call helper functions above
  //  variables inside template lierat string will be replaced with the return values from the helper functions

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
  
  ${renderLicenseSection(data.license)};
  
  ## Contributing
  ${data.contributing}
  ## Test
  ${data.testinfo}
  ${renderLicenseSection(data.license)};
  ${renderLicenseBadge(data.license)}
  ## and Questions
`;
}

module.exports = generateMarkdown;

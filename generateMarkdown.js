// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "") {
    return "";
  } else {
    return "* [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
  * ${renderLicenseLink(data.license)}
  * [Usage](#installation)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  
  ## Contributing
  ${data.contributing}
  ## Test
  ${data.testinfo}
  ## and Questions
`;
}

module.exports = generateMarkdown;

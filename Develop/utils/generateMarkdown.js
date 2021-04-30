// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
console.log('hello');
return 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}
  ${renderLicenseBadge(data.license)}

  ##Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  

  ## Description:
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contributors:
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  Contact:

  Github:[${data.Username}]
  Email: [${data.Email}]
`;
}

module.exports = generateMarkdown;

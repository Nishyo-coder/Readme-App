// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n ['https://opensource.org/licenses/MIT'](#license)\n`;
  }
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}  ${renderLicenseBadge(data.license)} 

  ##Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  

  ## Description:
  ${data.description}
  

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)}
  ${data.license}
  
  
  ## Contributors:
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  Please Contact Me:

  Github:[${data.github}](https://github.com/Nishyo-coder)
  Email: [${data.email}](https://github.com/Nishyo-coder)
`;
}

module.exports = generateMarkdown;

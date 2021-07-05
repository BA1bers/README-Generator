// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'BSD') {
    return `![BSD license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if  (license === 'MIT') {
    return `![MIT license](https://img.shields.io/badge/License-MIT-brightgreen)`;
  } else if (license === 'GPL') {
    return `![GPL license](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD') {
    return `[BSD license](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'MIT') {
    return `[MIT license](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GPL') {
    return `[GPL license]`
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Table of Contents:
  * [Title](#title)
  * [Purpose](#purpose)
  * [How to install](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Email](#email)
  * [GitHub](#github)
`;
}

module.exports = generateMarkdown;

const licenseLinks = {
  "GPL": "https://www.gnu.org/licenses/gpl-3.0.html",
  "Apache-2.0": "https://www.apache.org/licenses/LICENSE-2.0",
  "MIT": "https://opensource.org/licenses/MIT"
};
const licenseBadges = {
  "GPL": "https://img.shields.io/badge/License-GPLv3-blue.svg",
  "Apache-2.0": "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg"
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenseBadges[license]) {
    return `![${license} badge](${licenseBadges[license]})`
  }

  return `${license} badge not found`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licenseLinks[license]) {
    return `[${license}](${licenseLinks[license]})`
  }

  return `${license} cannot find link to license`
}
renderLicenseLink();
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenseLinks[license]) {
    return `## License\n\nThis project is licensed under the [${license}](${licenseLinks[license]}) license.`
  }

  return `## License\n\nThe license "${license}" is not recognized. Please check and update the license information.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generate markdown", data);
  
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}
  
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

${renderLicenseSection(data.license)}

## Tests
${data.test}

## Questions
${data.questions}
-Here you can find my contact info to reach out to me with any questions about this project.
`;
}

module.exports = generateMarkdown;

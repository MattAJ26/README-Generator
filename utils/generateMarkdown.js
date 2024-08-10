// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GPL" && license === "Apache-2.0" && license === " ") {
    return ` `
  }

  return `${license}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GPL" && license === "Apache-2.0" && license === " ") {
    // change license-Text.com to actual license to read
    return `[${license}](https://license-text.com/${license})`
  }

  return `${license} cannot find link to license`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "GPL" && license === "Apache-2.0" && license === " ") {
    return ` `
  }

  return `${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generate markdown", data);
  
  return `# ${data.title}

          #### Link
          ${renderLicenseLink(data.license)}

          #### Badge
          ${renderLicenseBadge(data.license)}

          #### Section
          ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

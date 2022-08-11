// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, credits, license, badges, contribution, tests } = data;

  // Handling table of contents if there are no contribution instructions or test instructions provided
  const contributeTbl = contribution !== 'None' ? `\n  - [How to Contribute](#how-to-contribute)` : '';
  const testTbl = tests !== 'None' ? `\n  - [Tests](#tests)` : '';
  const modularTable = contributeTbl + testTbl;
  const tblOfContents = `
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)   ${modularTable}
  `;


  // Handling the inclusion of contribution instructions or test instructions if none are provided
  const contributionSect = contribution !== 'None' ? `\n  ## How to Contribute\n\n  ${contribution} \n` : '' ;
  const testSect = tests !== 'None' ? `\n  ## Tests\n\n  ${tests} \n` : '';
  const modularSection = contributionSect + testSect;

  // readMe template derived from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  return `
  # ${title}}

  ## Description
  ${description}


  ## Table of Contents 

  ${tblOfContents}

  ## Installation

  ${installation}

  ## Usage

  ${usage}
  

  ## Credits

  ${credits} 

  ## License

  ${license}


  ## Badges

  ${badges}
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  ${modularSection}
  `;
}

module.exports = generateMarkdown;

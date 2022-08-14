// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // License links pulled from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Hippocratic':
      return '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'PERL':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    case 'SIL':
      return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'WTFPL':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    case 'Zlib':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    case 'None':
      return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'Boost':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'Eclipse':
      return '(https://opensource.org/licenses/EPL-1.0)';
    case 'GNU GPLv3':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'Hippocratic':
      return '(https://firstdonoharm.dev)';
    case 'IBM':
      return '(https://opensource.org/licenses/IPL-1.0)';
    case 'ISC':
      return '(https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'PERL':
      return '(https://opensource.org/licenses/Artistic-2.0)';
    case 'SIL':
      return '(https://opensource.org/licenses/OFL-1.1)';
    case 'Unlicense':
      return '(http://unlicense.org/)';
    case 'WTFPL':
      return '(http://www.wtfpl.net/about/)';
    case 'Zlib':
      return '(https://opensource.org/licenses/Zlib)';
    case 'None':
      return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const licenseBadge = renderLicenseBadge(license) + renderLicenseLink(license);

  const licenseSection = `
    ## License

    ${licenseBadge}
  
  `
}

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
  const contributionSect = contribution !== 'None' ? `\n  ## How to Contribute\n\n  ${contribution} \n` : '';
  const testSect = tests !== 'None' ? `\n  ## Tests\n\n  ${tests} \n` : '';
  const modularSection = contributionSect + testSect;

  // readMe template derived from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  return `
  # ${title}}

  ${renderLicenseSection(license)}

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


  ${modularSection}
  `;
}

module.exports = generateMarkdown;

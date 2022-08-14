// The following function renders the license badge and includes the link to the license within it. 
// If there is no license, an empty string is returned
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



// Returns the license section of the README.
// If there is no license, returns an empty section
function renderLicenseSection(license) {

  if (license != 'None') {
  const licenseBadge = renderLicenseBadge(license);
  return `
  ## License

  ${licenseBadge}
  
  ` } else {
    return ''
  }

}


// The generateMarkdown function takes the information from the inquirer answers in index.js
// and generates markdown based off the responses.
function generateMarkdown(data) {
  const { title, description, installation, usage, credits, license, contribution, tests, email } = data;

  const licenseSection = renderLicenseSection(license)

  // Handling table of contents if there are no contribution instructions or test instructions provided
  const contributeTbl = contribution !== 'None' ? `\n  - [How to Contribute](#how-to-contribute)` : '';
  const testTbl = tests !== 'None' ? `\n  - [Tests](#tests)` : '';
  const modularTable = contributeTbl + testTbl;
  const tblOfContents = `
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)   ${modularTable}
  - [Questions](#questions)
  `;



  // Handling the inclusion of contribution instructions or test instructions if none are provided
  const githubURL = `https://github.com/${credits}`;
  const contributionSect = contribution !== 'None' ? `\n  ## How to Contribute\n\n  ${contribution} \n` : '';
  const testSect = tests !== 'None' ? `\n  ## Tests\n\n  ${tests} \n` : '';
  const modularSection = contributionSect + testSect;

  // readMe template derived from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  return `
  # ${title}

  ${licenseSection}

  ## Description

  ${description}

  ## Table of Contents 

  ${tblOfContents}

  ## Installation

  ${installation}

  ## Usage

  ${usage}
  

  ## Credits

  ${githubURL} 
  ${modularSection}
  ## Questions
  
  Reach out to me via GitHub or email!
  ${githubURL}
  ${email}
  `;
}

module.exports = generateMarkdown;

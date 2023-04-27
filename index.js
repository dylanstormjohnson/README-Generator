const fs = require("fs");

const inquirer = require("inquirer");

let licenseInfo = {}

const init = async () => {
  try {
    const data = await inquirer.prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is your first name?",
      },
      {
        name: "middleName",
        type: "input",
        message: "What is your middle name?",
      },
      {
        name: "surname",
        type: "input",
        message: "What is your surname?",
      },
      {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
      },
      {
        name: "languages",
        type: "checkbox",
        message: "What languages did you use?",
        choices: [
          "HTML",
          "CSS",
          "Javascript",
          "Bootstrap",
          "JQuery",
          "Node.js",
          "MySQL",
        ],
      },
      {
        name: "imageName",
        type: "input",
        message: "What is the name of the image of the full site?",
      },
      {
        name: "imageFileType",
        type: "list",
        message: "What file type is said image?",
        choices: ["jpeg", "png", "pdf"],
      },
      {
        name: "imageDescription",
        type: "input",
        message: "Give a short description of the image.",
      },
      {
        name: "motivation",
        type: "input",
        message: "I was motivated to build this project...",
      },
      {
        name: "why",
        type: "input",
        message: "It was built because...",
      },
      {
        name: "problemSolved",
        type: "input",
        message: "It is intended to solve the problem of...",
      },
      {
        name: "learned",
        type: "input",
        message: "In making said project, I learned...",
      },
      {
        name: "repositoryURL",
        type: "input",
        message: "What is the GitHub repository's URL?",
      },
      {
        name: "usage",
        type: "input",
        message: "Explain how this project is intended to be used.",
      },
      {
        name: "featureOne",
        type: "input",
        message: "List a feature this project includes. (1/5)",
      },
      {
        name: "featureTwo",
        type: "input",
        message: "List a feature this project includes. (2/5)",
      },
      {
        name: "featureThree",
        type: "input",
        message: "List a feature this project includes. (3/5)",
      },
      {
        name: "featureFour",
        type: "input",
        message: "List a feature this project includes. (4/5)",
      },
      {
        name: "featureFive",
        type: "input",
        message: "List a feature this project includes. (5/5)",
      },
      {
        name: "contributionGuidelines",
        type: "input",
        message: "Explain how others can contribute to your project.",
      },
      {
        name: "license",
        type: "list",
        message: "Which license is this project under?",
        choices: ["Apache License 2.0 (Communal work)", "MIT (Simple, permissive)", "GNU General Public License v3.0 (Improvement sharing)"],
      },
      {
        name: "test1Instructions",
        type: "input",
        message: "List instructions on how conduct the first test on your project.",
      },
      {
        name: "test2Instructions",
        type: "input",
        message: "List instructions on how conduct the second test on your project.",
      },
      {
        name: "test3Instructions",
        type: "input",
        message: "List instructions on how conduct the third test on your project.",
      },
    ]);

    // console.log(data);
    console.log(
      "Don't forget to edit the README to add more features, credits, badges, and more !!!!!!!!"
    );

    const {
      firstName,
      middleName,
      surname,
      title,
      languages,
      imageName,
      imageFileType,
      imageDescription,
      motivation,
      why,
      problemSolved,
      learned,
      repositoryURL,
      usage,
      featureOne,
      featureTwo,
      featureThree,
      featureFour,
      featureFive,
      contributionGuidelines,
      license,
      test1Instructions,
      test2Instructions,
      test3Instructions,
    } = data;

    // if (license === "Apache License 2.0 (Communal work)") {

    // } else if if (license === "Apache License 2.0 (Communal work)")

    switch (license) {
      case "Apache License 2.0 (Communal work)":
        var licenseInfo = {
          title: "Apache License 2.0",
          description: "use must still preserve copyright and license notices.  Distribution under separate terms is allowed for licensed works, modifications, and larger works.  An express grant of patent rights is provided by contributors.",
          badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        };
        break;
      case "MIT (Simple, permissive)":
        var licenseInfo = {
          title: "MIT License",
          description: "use must still preserve copyright and license notices.  Distribution under separate terms is allowed for licensed works, modifications, and larger works.",
          badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        };
        break;
      case "GNU General Public License v3.0 (Improvement sharing)":
        var licenseInfo = {
          title: "GNU General Public License v3.0",
          description: "complete source code of licensed work and modifications must be made available under the same license.  Use must also preserve copyright and license notices.  An express grant of patent rights is provided by contributors.",
          badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        };
        break;
    }

    const readMe = () => `
# <${title}>
${licenseInfo.badge}
## Description

- This project was made using ${languages.join(", ")}.  I was motivated to build this project ${motivation}  It was built because ${why}  It is intended to solve the problem of ${problemSolved}  In making said project, I learned ${learned}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- This project can be installed by visiting its GitHub repository at ${repositoryURL} and making a clone or fork of the repository.

## Usage

-${usage}

- Here is an image of the completed project:
![${imageDescription}](assets/images/${imageName}.${imageFileType})


## Credits
-This website was coded by ${firstName} ${middleName} ${surname}.

-List your collaborators, if any, with links to their GitHub profiles.

-If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

-If you followed tutorials, include links to those here as well.

## License

-This project is listed under the ${licenseInfo.title}.  Under this license, ${licenseInfo.description}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

-${featureOne}

-${featureTwo}

-${featureThree}

-${featureFour}

-${featureFive}

## How to Contribute

-${contributionGuidelines}

-Aside from the aforementioned ways you can contribute, the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard for contribution policy.  (Please use the above guidelines for contribution and consult the Contributor Covenant on things not specified.)

## Tests

-${test1Instructions}

-${test2Instructions}

-${test3Instructions}
---`;

    await fs.promises.writeFile("README.md", readMe());
  } catch (err) {
    console.log(err);
  }
};

init();

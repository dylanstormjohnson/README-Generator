const fs = require("fs");

const inquirer = require("inquirer");

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
        name: "videoURL",
        type: "input",
        message: "Is there is a showcase video for this project? (No or Google Drive URL)",
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
        name: "githubUsername",
        type: "input",
        message: "What is the GitHub username?",
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
      {
        name: "tutor",
        type: "input",
        message: "Which tutor(s) helped you with this project? [List his/her name(s)]",
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
      videoURL,
      motivation,
      why,
      problemSolved,
      learned,
      githubUsername,
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
      tutor,
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

    var languageBadge1 = "";
    var languageBadge2 = "";
    var languageBadge3 = "";
    var languageBadge4 = "";
    var languageBadge5 = "";
    var languageBadge6 = "";
    var languageBadge7 = "";

    for (let i = 0; i < languages.length; i++) {
      if (languages[i] === "HTML") {
        languageBadge1 = "![HTML](https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5)";
      } else if (languages[i] === "CSS"){
        languageBadge2 = "![CSS](https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3)";
      } else if (languages[i] === "Javascript") {
        languageBadge3 = "![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)";
      } else if (languages[i] === "Bootstrap") {
        languageBadge4 = "![Bootstrap](https://img.shields.io/badge/-Bootstrap-black?style=flat-square&logo=bootstrap)";
      } else if (languages[i] === "JQuery") {
        languageBadge5 = "![jQuery](https://img.shields.io/badge/-jQuery-black?style=flat-square&logo=jquery)";
      } else if (languages[i] === "Node.js") {
        languageBadge6 = "![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js)";
      } else if (languages[i] === "MySQL") {
        languageBadge7 = "![MySQL](https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql)";
      }
    }

    var howToHelp = '';
    var aidingTutors = '';

    if (contributionGuidelines === "N/A") {
      howToHelp = "This project has reached completion and no further help is necessary.  If you would like to expand on the idea, you are welcome to download a fork of the repository and work on your own version.";
    } else {
      howToHelp = contributionGuidelines;
    }

    if (tutor === "None") {
      aidingTutors = "";
    } else {
      aidingTutors = `

- While working on this project, I was aided by a tutor, ${tutor}, who assisted with bug solving, code refinement, and expanding on the concept.`;
    }

    if (videoURL === "No") {
      googleDriveURL = "";
    } else {
      googleDriveURL = `

- Here is a video showcasing the functionality of the completed project:
![Showcase video:](${videoURL})`
    }

    const readMe = () => `# <${title}>

${licenseInfo.badge}

## Description

- This project was made using ${languages.join(", ")}.  I was motivated to build this project ${motivation}  It was built because ${why}  It is intended to solve the problem of ${problemSolved}  In making said project, I learned ${learned}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

- This project can be installed by visiting its GitHub repository at [Repository link](https://github.com/${githubUsername}/${title}) and making a clone or fork of the repository.

## Usage

-${usage}

- Here is an image of the completed project:
![${imageDescription}](assets/images/${imageName}.${imageFileType})${googleDriveURL}


## Credits
- This website was coded by ${firstName} ${middleName} ${surname}.${aidingTutors}

- List your collaborators, if any, with links to their GitHub profiles.

- If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

- If you followed tutorials, include links to those here as well.

## License

- This project is listed under the ${licenseInfo.title}.  Under this license, ${licenseInfo.description}

## Badges

${languageBadge1} ${languageBadge2} ${languageBadge3} ${languageBadge4} ${languageBadge5} ${languageBadge6} ${languageBadge7}

## Features

- ${featureOne}

- ${featureTwo}

- ${featureThree}

- ${featureFour}

- ${featureFive}

## How to Contribute

- ${howToHelp}

-Aside from the aforementioned ways you can contribute, the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard for contribution policy.  (Please use the above guidelines for contribution and consult the Contributor Covenant on things not specified.)

## Tests

- ${test1Instructions}

- ${test2Instructions}

- ${test3Instructions}

## Questions

-If you have any questions regarding this or my other projects, my GitHub account is [${firstName}'s GitHub account] (https://github.com/${githubUsername}).
---`;

    await fs.promises.writeFile("./generated_README/README.md", readMe());
  } catch (err) {
    console.log(err);
  }
};

init();

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
    ]);

    // console.log(data);
    console.log(
      "Don't forget to edit the README to add more features, credits, a license, and more !!!!!!!!"
    );

    const {
      firstName,
      middleName,
      surname,
      title,
      languages,
      imageName,
      imageFileType,
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
    } = data;

    const readMe = () => `
# <${title}>

## Description

- This project was made using ${languages}  I was motivated to build this project ${motivation}  It was built because ${why}  It is intended to solve the problem of ${problemSolved}  In making said project, I learned ${learned}

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
![Description of the project's image...](assets/images/${imageName}.${imageFileType})

## Features

-${featureOne}

-${featureTwo}

-${featureThree}

-${featureFour}

-${featureFive}

## Credits
-This website was coded by ${firstName} ${middleName} ${surname}.

-List your collaborators, if any, with links to their GitHub profiles.

-If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

-If you followed tutorials, include links to those here as well.

## License

-If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---`;

    await fs.promises.writeFile("README.md", readMe());
  } catch (err) {
    console.log(err);
  }
};

init();

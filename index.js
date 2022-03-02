const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require('./Develop/lib/Manager');
const Intern = require('./Develop/lib/Intern');
const Engineer = require('./Develop/lib/Engineer');
const generateHTML = require('./Develop/src/page-template')

const squad = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Team Manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your Team Manager's employee ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is your Team Manager's Email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your Team Manager's Office number?",
            name: "managerNumber"
        },

    ])

        .then((answers) => {

            const managerObject = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerNumber);
            squad.push(managerObject);
            promptMenu();
        })     
}

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add a Engineer or Intern to your team? or finish building your team?",
            name: "listofOptions",
            choices: ["Engineer", "Intern", "finish building my team"]
        }
    ])

    .then(userChoice => {
        switch (userChoice.listofOptions) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default: writeFile();
        }
    });
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is your Engineer's employee ID?",
            name: "engineerID"
        },
        {
            type: "input",
            message: "What is your Engineer's Email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is your Engineer's GitHub Username?",
            name: "engineergHub"
        },

    ])

        .then((answers) => {

            const engineerObject = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineergHub);
            squad.push(engineerObject);
            promptMenu();
        })     
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your intern's employee ID?",
            name: "internID"
        },
        {
            type: "input",
            message: "What is your intern's Email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        },

    ])

        .then((answers) => {

            const internObject = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            squad.push(internObject);
            promptMenu();
        })     
}


function writeFile() {
    fs.writeFile('test.html', generateHTML(squad), (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successfully created HTML");
    })
}

// .catch(err => {
//     console.log(err);
// })

// }

managerQuestions();
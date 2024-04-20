#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let to_dos = [];
let condition = true;
while (condition) {
    let AddTask = await inquirer.prompt([
        {
            name: 'todos',
            message: 'Whats do you want to add in your to_dos list?',
            type: 'input'
        },
        {
            name: 'addmore',
            message: 'do you want to add more? ',
            type: 'confirm',
            default: 'true'
        }
    ]);
    to_dos.push(AddTask.todos);
    condition = AddTask.addmore;
    console.log(chalk.blueBright(to_dos));
}
// Home Work {read update, delete, add, chalk,empty array show error}

import inquirer from "inquirer";
const userAns = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = userAns.sentence.split("");
console.log(words);
console.log(`your sentence words count is ${words.length}`);

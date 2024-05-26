#! /usr/bin/env node

import inquirer from "inquirer"
import chalk    from  "chalk"

console.log(chalk.green.italic`\n\t-----------------
                                        WELCOME TO MY WORD COUNTER   
                                                                        -----------------------------------\n`)
 do {                                                                       
const answers:{
    sentence:string
} = await inquirer.prompt (
    [
        {
            name:"sentence",
            type:"input",
            message:chalk.blueBright("Enter your sentence to count the word:")
        }
    ]
)
const   words  = answers.sentence.trim().split(" ")
console.log(words)
console.log (chalk.magentaBright(`Your sentence word count is ${words.length}`));

let ans = await inquirer . prompt([
    {
      name: 'continue',
      type: 'confirm',
      message: (chalk.bold.whiteBright.bold('Do you want to again continue?')),
      default:true
        
    }
  ]);
if (ans.continue === false ){
    console.log(chalk.green('you excited from "WORD COUNTER"...\n Goodbye have a nice day ...\n\t'));
    break;
  }
  }while(true)
  



/*
echo "# word-counter" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sumbulNaz8/word-counter.git
git push -u origin main*/


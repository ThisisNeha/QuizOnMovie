var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.greenBright("Heyy lets have a quiz on movie 3-idiots❤️ "));

var userName = readlineSync.question(chalk.cyanBright('\nMay I have your name?\n '));
console.log("");

console.log('Hi ' + chalk.yellowBright(userName.toUpperCase()) + chalk.greenBright.underline.bold('! Lets get started. You need to choose one option from a, b, c.'));

console.log("");
score=0;

function play(question, answer){
var userAns = readlineSync.question(question);

if(userAns=== answer){
    console.log(chalk.yellowBright("You are right!"));
  score++;
  
}else{
  console.log(chalk.magentaBright("\noops! wrong answer!\n"));
}
console.log(chalk.greenBright("your score is : "), score);
console.log("\n--------\n");

}

var questions=[{
  question:'When was the movie released?\na. 2009\nb. 2010\nc. 2011\n',
  answer:'a'
},{
  question : 'Which character was famous as "silencer"?\na. Raju\nb. Millimetre\nc. Chatur\n',
  answer:'c'
},{
  question: 'What was the name nickname of principal in movie?\na. Inverter\nb. Lobo\nc. Virus\n',
  answer:'c'
},{
  question:'Who was the protagonist of the movie ?\na. Sharmaan Joshi\nb. Aamir khan\nc. R.Madhavan\n',
  answer:'b'
},{
  question: 'What was the title song of movie?\na. All is well\nb. Behti hawa sa tha woh\nc. Jane nhi denge tujhe\n',
  answer:'a'
}];

for (var i =0; i<questions.length; i++){
  var currentQue= questions[i];
  play(currentQue.question, currentQue.answer);
}

console.log(chalk.magentaBright(" Your final score : ", score ));

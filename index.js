var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.cyanBright('May I have your name? '));
console.log("");

console.log('Hi ' + chalk.yellowBright(userName.toUpperCase()) + chalk.greenBright.underline.bold('! Lets start a quiz on movie 3-idiots.'));

console.log("");
score=0;

function play(question, answer){
var userAns = readlineSync.question(question);

if(userAns=== answer){
    console.log(chalk.yellowBright("You are right!"));
  score++;
  
}else{
  console.log(chalk.redBright("oops! wrong answer!"));
}
console.log(chalk.greenBright("your score is : "), score);
console.log("--------");

}

var questions=[{
  question:'When was the movie released?',
  answer:'2009'
},{
  question : 'Which character was famous as "silencer"?', 
  answer:'Chatur'
},{
  question: 'What was the name of principal in movie?',
  answer:'Virus'
},{
  question:'Who was the protagonist of the movie ?',
  answer:'Aamir khan'
},{
  question: 'What was the title song of movie?',
  answer:'All is well'
}
]
for (var i =0; i<questions.length; i++){
  var currentQue= questions[i];
  play(currentQue.question, currentQue.answer);
}

console.log(chalk.magentaBright(" Your final score : ", score ));

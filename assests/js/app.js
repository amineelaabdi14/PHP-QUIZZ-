let questionTimer;
let myTimer;
let currentQuestion=0;
function showQuestions(){
    myTimer=5;
    let user= new User();
    let question = user.getCurrentQuestion();
    console.log(currentQuestion);
    if(currentQuestion!=user.totalQuestions)
    {
        document.getElementById('myQuestion').innerText=question.question;
        document.getElementById('res1').innerText=question.choice1;
        document.getElementById('res2').innerText=question.choice2;
        document.getElementById('res3').innerText=question.choice3;
        document.getElementById('res4').innerText=question.choice4;
        setTimeout(showQuestions, 5000);
        questionTimer=setInterval(startTimer, 1000);
        currentQuestion++;
    }
    else{
        window.location.replace('result.html');

    }
}

function showAnswers(){

}

function submitAnswer(){

}

function startTimer(){
if(myTimer!=0)
{
    document.getElementById('myTimer').innerText=myTimer;
    myTimer--;
}
else
{
    clearInterval(questionTimer);
}
}

function showResult(){

}
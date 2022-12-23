
let myUser;
function startQuizz(){
    let user= new User()
    myUser=user;
    showQuestions();
}



let currentQuestion=0;
let question;
function showQuestions(){
    if(currentQuestion!=myUser.totalQuestions)
    {   
        question = myUser.getCurrentQuestion();
        document.getElementById('myQuestion').innerText=question.question;
        document.getElementById('res1').innerText=question.choice1;
        document.getElementById('res2').innerText=question.choice2;
        document.getElementById('res3').innerText=question.choice3;
        document.getElementById('res4').innerText=question.choice4;
        startTimer();
        currentQuestion++;
    }
    else{
        showResult();
    }
}


function showAnswers(){

}

function submitAnswer(element,answer){
    console.log(document.getElementById('inner-progress-bar').style.width);
    document.getElementById('inner-progress-bar').style.width=( currentQuestion*100 / myUser.totalQuestions)+'%';
    if(question.answer==answer)
    {   
        myUser.correctAnswers+=1;
        timer=10;
        clearTimeout(myTimer);
        showQuestions();
    }
    else {
        myUser.falseAnswers+=1;
        timer=10;
        clearTimeout(myTimer);
        showQuestions();
    }
}


let timer=10000;
let myTimer;
function startTimer(){
    document.getElementById('myTimer').innerText=timer;
    timer--;
    if(timer!=0) 
    {
        myTimer=setTimeout(startTimer,1000);
    }    
    else {
        myUser.falseAnswers+=1;
        timer=10;
        showQuestions();
    }
}
    

function showResult(){
    window.location.href="result.html";
    document.getElementById('myResult').innerText=myUser.getResult();
}
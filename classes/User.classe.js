class User {
    constructor(correctAnswers=0,falseAnswers=0,responseTime=[],currentQuestion=0,totalQuestions=questions.length){
        this.shuffle();
        this.falseAnswers=falseAnswers;
        this.responseTime=responseTime;
        this.currentQuestion=currentQuestion;
        this.totalQuestions=totalQuestions;
        this.correctAnswers=questions[this.currentQuestion].answer;

    }
    shuffle(){
        for(let i=questions.length-1;i>0;i--)
        {   
            let randIndex= Math.floor( Math.random()*questions.length);
            [ questions[randIndex] , questions[i] ] = [ questions[i] , questions[randIndex] ];
        }
    }
    getCurrentQuestion(){
        let question = questions[this.currentQuestion];
        this.currentQuestion++;
        return question;
    }
    
    setResult(){
        let avgTime=0, total=0;
        for(let i of this.responseTime)
        {
            total+=Number(i);
        }
        avgTime=total/myUser.responseTime.length;
        localStorage.setItem("correct", this.correctAnswers);
        localStorage.setItem("false", this.falseAnswers);
        localStorage.setItem("responseTime", avgTime);
    }
}
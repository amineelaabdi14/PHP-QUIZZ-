class User {
    constructor(correctAnswers=0,falseAnswers=0,responseTime,currentQuestion=0,totalQuestions=questions.length){
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
        this.correctAnswers=questions[this.currentQuestion].answer;
        this.currentQuestion++;
        return question;
    }
    submitAnswer(){

    }
    
    getResult(){

    }
}
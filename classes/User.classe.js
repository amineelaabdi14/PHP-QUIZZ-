class User {
    constructor(correctAnswers,falseAnswers,responseTime,currentQuestion=0,totalQuestions=questions.length){
        this.shuffle();
        this.correctAnswers=correctAnswers;
        this.falseAnswers=falseAnswers;
        this.responseTime=responseTime;
        this.currentQuestion=currentQuestion;
        this.totalQuestions=totalQuestions;
    }
    shuffle(){
        for(let i=questions.length-1;i>0;i--)
        {   
            let randIndex= Math.floor( Math.random()*questions.length);
            [ questions[randIndex] , questions[i] ] = [ questions[i] , questions[randIndex] ];
        }
    }
    getAnswer(){

    }
    getCurrentQuestion(){
        let question = questions[this.currentQuestion];
        this.currentQuestion++;
        return question;
    }
    submitAnswer(){

    }
    
    getResult(){

    }
}
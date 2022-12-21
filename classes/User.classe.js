class User {
    constructor(correct,falseAnswers,responseTime,currentQuestion){
        this.correct=correct;
        this.falseAnswers=falseAnswers;
        this.responseTime=responseTime;
        this.currentQuestion=currentQuestion;
    }
    shuffle(){
        for(let i=questions.length-1;i>0;i--)
        {   
            let randIndex= Math.floor( Math.random()*questions.length);
            [ questions[randIndex] , questions[i] ] = [ questions[i] , questions[randIndex] ];
        }
    }
    getQuestionsByOrder(){
        return question[this.currentQuestion];
    }
}
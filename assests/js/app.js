function shuffle(){
    for(let i=questions.length-1;i>0;i--)
    {   
        let randIndex= Math.floor( Math.random()*questions.length);
        [ questions[randIndex] , questions[i] ] = [ questions[i] , questions[randIndex] ];
    }
}

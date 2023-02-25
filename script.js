//Fetch data from triva API.
async function getquestions(){
 let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
 let APIdata = await response.json()
return APIdata;
}

//Shuffled answers so that the correct answer isn't in the same positon on the page all the time.
function shufflearray(arry){
    //console.log(arry)
    for (let i = arry.length - 1; i >= 0; i--){
        const s = Math.floor(Math.random() * (i + 1));
        [arry[i], arry[s]] = [arry[s] , arry[i]];
        //console.log(i)
        //console.log(s)
        //console.log(arry)
    }
} 



//Display Question to User.
getquestions().then((APIdata) => {
    const results = APIdata.results[0];
    console.log(results)
    document.getElementById('category').innerHTML = results.category;
    document.getElementById('question').innerHTML = results.question;
    const answers = [...results.incorrect_answers, results.correct_answer]
    shufflearray(answers)

    document.getElementById('button1').innerHTML = answers[0]
    document.getElementById('button2').innerHTML = answers[1]
    document.getElementById('button3').innerHTML = answers[2]
    
    document.getElementById('button4').innerHTML = answers[3]
    document.getElementById('button1').addEventListener('click',() => {
        document.querySelectorAll('buttons')
    });

});








  


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

//Dynamically change the value of each answer choice.
    for( let i = 0; i < 4; i++){
        let index = i + 1;
        document.getElementById(`button${index}label`).innerHTML = answers[i]

        document.getElementById(`button${index}`).value = answers[i]
        
    }
 //Check if User Selected correct answer.   
     document.getElementById('submit').addEventListener('click', () => {
        document.getElementsByName('button').forEach((element) => {
            if(element.checked){
               console.log(element.value)
               console.log(results.correct_answer)

               if (element.value === results.correct_answer){
                    alert('Good Job, That is Correct!')
               }else{
                    alert('Sorry, That was Incorrect')
               }
           
            }
          
        })
        }); 
    }); 










  


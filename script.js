
async function getquestions(){
 let response = await fetch('https://the-trivia-api.com/api/questions/')
 let APIdata = await response.json()
    return APIdata;

}


getquestions().then((APIdata) => {
    console.log(APIdata)
    document.getElementById('category').innerHTML = APIdata[0].category;
    document.getElementById('question').innerHTML = APIdata[0].question;

})

async function getquestions(){
 let response = await fetch('https://the-trivia-api.com/api/questions/')
 let question = await response.json()
 console.log(question)
}

getquestions()
var addQuestion = [];
var addAnswer = [];
var question = [];
var questions = [];
var answer = [];
var answers = [];
var answerOne = [];
var answerTwo = [];
var answerThree = [];
var answerFour = [];
var potentialAnswers = [];
var newQuestion = [];
var newAnswers = [];
var incorrectAnswers;
var correctAnswer;
var questionsAnswers;
var playerOneScore = 0;
var playerOneName = "";
var playerTwoScore = 0;
var playerTwoName = "";
var nextButton;
var resetButton;


document.addEventListener("DOMContentLoaded", function(){

    newQuestion = document.getElementById("question");
    potentialAnswers = document.getElementById("potentialanswers");
    answerOne = document.getElementById("answerone");
    answerTwo = document.getElementById("answertwo");
    answerThree = document.getElementById("answerthree");
    answerFour = document.getElementById("answerfour");
    const requestUrl = "https://opentdb.com/api.php?amount=11&type=multiple";
    startButton = document.getElementById('start');
    resetButton = document.getElementById('reset');
    nextButton = document.getElementById('next');
    playerTwoName = document.getElementById('playertwo').value;
    playerOneName = document.getElementById('playerone').value;

    console.log(playerOneName);
    console.log(playerTwoName);

 

   // initGame();

    // startButton.addEventListener('click', function(e) {
    //     console.log("clicked start");
    //     start();
    // });
    // nextButton.addEventListener('click', function(e) {
    //     console.log("clicked next");
    //     next();
    // });
    // resetButton.addEventListener('click', function(e) {
    //     console.log("clicked reset");
    //     reset();
    // });


    fetch(requestUrl)
        .then(function(responseData){
            // Fetch will package the response into an object with some methods that allow us to do some useful things with the response.
            // Use the .json method to return the data in JSON format
            return responseData.json();
        })
        .then(function(jsonData){
            // the above .then passed our returned data into this callback
            console.log(jsonData);
            // now we can see that the data we want is nested under an inner 'results'
            console.log(jsonData.results)
            // store this array of objects in a question and answer variable
            questions = jsonData.results.map(function (question) {
                question.incorrect_answers.push(question.correct_answer)
                return {
                    question: question.question,
                    answer: question.incorrect_answers,
                    correct: question.correct_answer
                }
            })
            










            for (questions.question = 0; question.length; question++) {
                return newQuestion;
            }    

            if ([questions.correct].indexOf(questions) >= 0) {
                correctAnswer();
                console.log(correctAnswer());
            }

            
            // function shuffle(questions) {
            //     return questions[Math.floor(math.random()*questions.length)];
            // }
            // console.log(shuffle(questions));

            console.log(questions[0].question);
            console.log(questions[0].answer);
            console.log(questions[0].correct);

            newQuestion.innerHTML=questions[0].question;
            answerOne.value=questions[0].answer[0];
            answerTwo.value=questions[0].answer[1];
            answerThree.value=questions[0].answer[2];
            answerFour.value=questions[0].correct;
            
            
          

          
        })
        .catch(function(error){
            // If any error is sent bac, you will have access to it here.
            console.log("error!!!:", error);
        });
        
     
        
       
});

/////game functions NEED TO REPLACE 

// function initGame() {
//     wiresToCut.length = 0;
//     remainingTime = STARTING_TIME;
//     timerText.textContent = "0:00:" + remainingTime;
//     for (let wire in wiresCut) {
//         var rand = Math.random();
//         if (rand >0.5) {
//             wiresToCut.push(wire);
//         }
//     }
//     console.log(wiresToCut);
//     resetButton.disabled = true;
//     startButton.disabled = false;
// }

// function reset() {
//     gameOver = false;
//     var wireImages = wireBox.children;
//     for (let i = 0; i < wireImages.length; i++) {
//         wireImages[i].src = "img/uncut-" + wireImages[i].id + "-wire.png";
//     }
//     document.body.classList.add("unexploded");
//     document.body.classList.remove("exploded");
//     timerText.classList.remove("red");
//     timerText.classList.add("green");
//     clearTimeout(delayHandle);
//     clearInterval(timerHandle);
//     for (let wire in wiresCut) {
//         wiresCut[wire] = false;
//     }
//     initGame();
// }
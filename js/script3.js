//would be nice:
// intro splash screen
//able to ring in or decide if you want to answer or not 
// make it so you cant click other buttons after selecting one
// reset button 
//get rid of alerts
// give the 2nd player a chance to answer if game tied
// allows players to select number of questions to win
// end game after winner is found



const requestUrl = "https://opentdb.com/api.php?amount=50&type=multiple";

var questions;
var nextButton;
var resetButton;
var answers;

var question;
var result1;
var result2;
var result3;
var result4;

var correctAnswer;

var currentPlayer = 0;

var playerOneScore = 0;
var playerOneScoreBox;
var playerTwoScore = 0;
var playerTwoScoreBox;



function nextQuestion() {
    if (currentPlayer % 2 === 0) {
        currentPlayer++;
        var modal = document.getElementById("errormodal");
        var span = document.getElementsByClassName("errorclose")[0];
        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }
        //alert('Player One is up!');
    } else {
        currentPlayer++;
        alert("Player Two is up!")
    }
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    if (questions.length !== 0) {
        question = questions.splice(Math.floor(Math.random() * questions.length),1)[0]
        console.log(question)
        question.incorrect_answers.splice(Math.floor(Math.random() * 4), 0, question.correct_answer)
        let randomizedAnswers = question.incorrect_answers
        console.log(randomizedAnswers)
        // put info in dom
        popAnswers(randomizedAnswers)
        let randomizedQuestion = question.question
        console.log(randomizedQuestion)
        popQuestion(randomizedQuestion)
        correctAnswer = question.correct_answer
        console.log(correctAnswer)
        //result(correctAnswer)
    } else {
        alert("Game OVER!")
    }

}

function popAnswers(ans) {
    for (let i = 0; i < ans.length; i++) {
        answers[i].value = ans[i]
        answerLabels[i].innerHTML = ans[i]
    }
}

function popQuestion(q) {
    for (let i = 0; i < q.length; i++) {
        questionDisplay.innerHTML = q
    }
}

    function radioClick1() {
        result1 = radio1.value
        if (result1 !== correctAnswer) {
            alert("Wrong, click next question!")
        } 
        else if (currentPlayer % 2 !== 0) {
            playerOneScore++;
            playerOneScoreBox.textContent = ("Player One's Score is: ") + playerOneScore;
            alert("Correct, click next question!")
            if (playerOneScore >= 10) {
                alert("Player One Wins!")
            }
        } else if (currentPlayer % 2 === 0) {
            playerTwoScore++;
            playerTwoScoreBox.textContent = ("Player Two's Score is: ") + playerTwoScore;
            alert("Correct, click next question!")
            if (playerTwoScore >= 10) {
                alert("Player Two Wins!")
            }
        }  else {
            alert("Click Something!")
        }
    }   

    function radioClick2() {
        result2 = radio2.value
        if (result2 !== correctAnswer) {
            alert("Wrong, click next question!")
        } 
        else if (currentPlayer % 2 !== 0) {
            playerOneScore++;
            playerOneScoreBox.textContent = ("Player One's Score is: ") + playerOneScore;
            alert("Correct, click next question!")
            if (playerOneScore >= 10) {
                alert("Player One Wins!")
            }
        } else if (currentPlayer % 2 === 0) {
            playerTwoScore++;
            playerTwoScoreBox.textContent = ("Player Two's Score is: ") + playerTwoScore;
            alert("Correct, click next question!")
            if (playerTwoScore >= 10) {
                alert("Player Two Wins!")
            }
        }  else {
            alert("Click Something!")
        }
    }    

    function radioClick3() {
        result3 = radio3.value 
        if (result3 !== correctAnswer) {
            alert("Wrong, click next question!")
        } 
        else if (currentPlayer % 2 !== 0) {
            playerOneScore++;
            playerOneScoreBox.textContent = ("Player One's Score is: ") + playerOneScore;
            alert("Correct, click next question!")
            if (playerOneScore >= 10) {
                alert("Player One Wins!")
            }
        } else if (currentPlayer % 2 === 0) {
            playerTwoScore++;
            playerTwoScoreBox.textContent = ("Player Two's Score is: ") + playerTwoScore;
            alert("Correct, click next question!")
            if (playerTwoScore >= 10) {
                alert("Player Two Wins!")
            }
        }  else {
            alert("Click Something!")
        }
    }     

    function radioClick4() {
        result4 = radio4.value 
        if (result4 !== correctAnswer) {
            alert("Wrong, click next question!")
        } 
        else if (currentPlayer % 2 !== 0) {
            playerOneScore++;
            playerOneScoreBox.textContent = ("Player One's Score is: ") + playerOneScore;
            alert("Correct, click next question!")
            if (playerOneScore >= 10) {
                alert("Player One Wins!")
            }
        } else if (currentPlayer % 2 === 0) {
            playerTwoScore++;
            playerTwoScoreBox.textContent = ("Player Two's Score is: ") + playerTwoScore;
            alert("Correct, click next question!")
            if (playerTwoScore >= 10) {
                alert("Player Two Wins!")
            }
        }  else {
            alert("Click Something!")
        }
    }   

document.addEventListener('DOMContentLoaded', function() {
    fetch(requestUrl)
        .then(function(responseData){
            // Fetch will package the response into an object with some methods that allow us to do some useful things with the response.
            // Use the .json method to return the data in JSON format
            return responseData.json();
        })
        .then(function(jsonData){
            // the above .then passed our returned data into this callback
            // console.log(jsonData);
            // now we can see that the data we want is nested under an inner 'results'
            // console.log(jsonData.results)
            // store this array of objects in a question and answer variable
            questions = jsonData.results;
        })
    
    answers = document.getElementsByName('answers');
    nextButton = document.getElementById('next');
    resetButton = document.getElementById('reset');
    answerLabels = document.getElementsByTagName("label");
    questionDisplay = document.getElementById("question"); 
    
    playerOneScoreBox = document.getElementById("playerone");
    playerTwoScoreBox = document.getElementById("playertwo");
   
    radio1 = document.getElementById('answerone');
    radio1.addEventListener('click', radioClick1)
    radio2 = document.getElementById('answertwo');
    radio2.addEventListener('click', radioClick2)
    radio3 = document.getElementById('answerthree');
    radio3.addEventListener('click', radioClick3)
    radio4 = document.getElementById('answerfour');
    radio4.addEventListener('click', radioClick4)
    
    nextButton.addEventListener('click', nextQuestion)
    resetButton.addEventListener('click', startOver)
})

function startOver() {
    location.reload();
 }
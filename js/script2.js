const requestUrl = "https://opentdb.com/api.php?amount=11&type=multiple";
var questions;
var question;
var wrong1;
var wrong2;
var wrong3;
var right;
var questionBox; 
var answerButtons;
var answerLabels;
var answerLabel1;
var answerLabel2;
var answerLabel3;
var answerLabel4;
var answer1;
var answer2;
var answer3;
var answer4;
var questionCounter = 0;
var currentScore = 0;
var nextButton;
var nextQuestion;


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
           
        questions = jsonData.results;
        question = questions[0].question; 
        wrong1 = questions[0].incorrect_answers[0];
        wrong2 = questions[0].incorrect_answers[1];
        wrong3 = questions[0].incorrect_answers[2];
        right = questions[0].correct_answer;
            // console.log(wrong1);
            // console.log(wrong2);
            // console.log(wrong3);
            // console.log(right);

        questionBox = document.getElementById("question"); 
        questionBox.innerHTML = question;

        answerButtons = document.getElementsByTagName("input");
        answerLabels = document.getElementsByTagName("label");
        answerLabel1 = answerLabels[0]
        answerLabel2 = answerLabels[1];
        answerLabel3 = answerLabels[2];
        answerLabel4 = answerLabels[3];
        answer1 = answerButtons[0];
        answer2 = answerButtons[1];
        answer3 = answerButtons[2];
        answer4 = answerButtons[3];
        answer1.value = right;
        answer2.value = wrong1;
        answer3.value = wrong2;
        answer4.value = wrong3;
        answerLabel1.textContent = right;
        answerLabel2.textContent = wrong1;
        answerLabel3.textContent = wrong2;
        answerLabel4.textContent = wrong3;
        questionCounter++;
        })



        ////////EVENTSSSSSSSSSSSSSSSSSS

        nextButton = document.addEventListener("click", function(){
            document.getElementById("next");
            return questions;
          });
     


        ////////FUNCTIONSSSSSSSSSSSSSSS

        function checkAnswer(answer) {  
            if (answer == randomQuestion.right) {
              adjustScore(true);
              btnProvideQuestion();
            } else { 
              alert("Loser!");
              adjustScore(false);
            }	  
          }

          function adjustScore(isCorrect) {
            debugger;
            if (isCorrect) {
              currentScore++;
            } else {
              if (currentScore > 0) {
                currentScore--;
                }
            }
            document.getElementById("playerone").innerHTML = currentScore;
          }
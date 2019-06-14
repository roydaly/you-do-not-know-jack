# ydkj
## The game was developed with:
*CSS
*HTML
*JS
*API (https://opentdb.com/)
## This was our first project and we were to build a game. 
I decided to make a 2 player trivia game. The theme of the game was based on an older trivia game called 'You Dont Know Jack". Players take turns answering multiple choice questions. The categories are random and the first player to 5 wins. You are not penalized for answering incorrectly. 
## My process: 
I started out by making my game board. I knew I needed a place to display the question, answers, instructions, 2 players, a next question button and a reset button. I decided to keep the board simple and focus my time and energy on making the game functional. However, I ran into quite a few road blocks. The api returned back quite a few different fields. So I had to select what I wanted for the game and store that information. My next setback came when I needed to display the answers on the page. I used radio buttons and they turned out to be pretty difficult to work with. Once that was solved, I needed to make sure the correct answer was not ending up at the same button for every question. 
## MVP
I accomplished mvp on day 3 after lunch. It wasnt pretty and had quite a few hiccups but it did work. 
## Game logic
The game currently starts with player 1 and gives them question 1. If they get it right, they get a point. If they get it wrong, nothing is subtracted from their score. Then player 2 is up. The game will continue to cycle through questions at random from the api and will also randomize the correct answer into different radio buttons. Each time a player answers a question, the game checks to see if anyone has reached the winning score. If so, the winning player is announced and the game is over. If the players would like, they can reset the game and play again. 
## The layout
After the game was functioning, I went back and gave it a makeover. I rearranged the page and made the questions and answers more of the focus. Lastly, I added a picture from the game I based mine off, You dont know jack. 
## Results 
The end result is a game that 2 people can play and at the end, one will win and the other wont know jack! 
## Next steps 
I have quite a big wish list still for the game. 
*A splash screen 
*The ability to ring in or to have a buzzer selection rather than having the players alternate turns
*Eliminating button functionality after one has been selected
*Making a true reload button 
*Turn all of the alerts in modals
*Allow the 2nd player to answer one more question if the game is tied and player one is at the winning amount 
*Allow players to select the number of questions in their game
*End game but taking players to a winning page, rather than leaving them on the game page

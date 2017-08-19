
var words = ["acrimony", "baroque", "boondoggle", 
          "caustic", "ennui", "fastidious",
           "kitsch", "maudlin", "panacea",
            "scintillating", "trist", "ubiquitous" ];



var word = words[Math.floor(Math.random() * words.length)];

      //answer array replaces the random word from the words array and makes all letter = "_"
var answerArray = [];
for (var i = 0; i < word.length; i++) {
   answerArray[i]="_";
 } 

 var livesCount = 3; 
 var remainingLetters = word.length


    while (remainingLetters > 0 && livesCount != 0 ){

      alert(answerArray.join(" "));

      var guess = prompt("Guess a letter or cancel to exit ").toLowerCase();

        if (guess === null) {
          break;
        }
         else if (guess.length !==1) {
          alert("Please enter only 1 letter ");
        }
          else{
              for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                  answerArray[j] = guess;
                    remainingLetters--;
                } 
                
                }
                if (word.includes(guess) === false) {
                  livesCount --;
                  alert("you have "+ livesCount + " lives remaining");
                }
                  
                }
              }
                if (livesCount === 0) {
                  alert("good job your dumb")
                }
                else if (remainingLetters === 0) {

                  alert(answerArray.join(" "));
                  alert("You solved the puzzle for " + word);
                }
                  
        
                
                 
                

 



   
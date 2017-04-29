
 	// Define a variable for "Press any key to get started"
    var welcomeText = document.getElementById("welcome-text");
    var numGuesses = 10;
    var numWins = 0;
    
    //  This tells how many runs have been made through the game
    var start = 0;


    // String of words for hangman
    var wordList = ["banana", "oranges", "apples", "turkey", "peaches"];
    var n = wordList.length;

    // Start with an empty array to display
    var answerDisplay = [];
    var wrongGuesses = [];

    // Choose a word randomly from the list
	var index = Math.floor(Math.random() * (n)) ;	
    var solution = wordList[index];
    console.log(solution);

    
    // Initialize beginning state of page
    initialize();
  

    // When onkey up is pressed, take away the "Press any key to get started" text
    // Create Dashes
    document.onkeyup = function(event) {
        
    	//  Make things appear and go away for the game...  Find a more efficient way 
    	// to do this
        welcomeText.style.display = "none";
        display.style.display = "inline";

        //Display Dashes
     
        game();
  
        console.log(answerDisplay);


      };


    // Resart the game, reset display to say "Press any key"
 

    // This function shows the dashes
    function game () {

	    // Get an input from the user
	    var key = document.getElementById("letterChoice");
	    var win;

	    // Create the inital set of dashes


	    // Make sure user input is a letter
	   	var isLetter = validate(key.value);

	   	// if the characher is not a letter, more then one letter or not the initial 
	   	// key up, then alert the user

     	if(!(isLetter) || (key.value.length > 1) && start != 0)
     	{
     		alert("Please enter exactly ONE letter in the box.  :)");

     		key.value = "";
     		createDashes();
     		return;
     		
     	}

     	// Search the solution array to see if the word contains the key
     	// typed
     	for (var i =0; i < solution.length; i++ ) {

     		if(solution[i] === key.value)
    		{
    			// Change the dash to the letter with a space
    			answerDisplay[i] = solution[i].toUpperCase() + " ";

    			// set win to true
    			win = true;
    			} 
     		}

     		// create an array of wrong choices
    		if(!win && !(wrongGuesses.includes(key.value.toUpperCase()))) {
    			wrongGuesses.push(key.value.toUpperCase());
    			win = false;

    			// decrease the number of guesses remaining if they choose
    			// an incorrect letter
    			numGuesses--;
    		}

    		var displayText = createDashes();
     		
     		// Create a text node to make a string of the solution
     		
     		var usedLetters = "";

     	
     		//  **If time allowed, I would create a function to accomplish this
     		// Create the puzzle display showing revealed letters and dashes
     		function createDashes() {
     			
     			var displayText = "";

     			for (var i = 0; i < solution.length; i++)
     			{

     			// appending all 
     			displayText = displayText + answerDisplay[i];                                  
				}

				document.getElementById("puzzle").innerHTML = displayText;
				return displayText;
     		}
     		

			// This code will be helpful for displaying the used letters
     		for (var i = 0; i < wrongGuesses.length; i++)
     		{
     			// appending all 
     			usedLetters = usedLetters + " " + wrongGuesses[i];                                  
			}

		

		
	    	// Remove the letter
	    	key.value = "";

	    	// Count the win!  
	    	if (numGuesses > 0 && !(displayText.includes("_")))
	    	{
	    		numWins++;
	    		game = false;
	    	}


			
			document.getElementById("wrongLetters").innerHTML = usedLetters;
			document.getElementById("guessesLeft").innerHTML = numGuesses;
			document.getElementById("numWins").innerHTML = numWins;

			start = 1;

      };
  	
     // 
  	function initialize(){

  		// Make inputBox non-visible
  		display.style.display = "none";

  		console.log(answerDisplay);

  		for (var i =0; i < solution.length; i++) {
  			answerDisplay[i] = " _";
  		}

  		 // create a section element for index.html
     	var paragraph = document.createElement("P");  
     	paragraph.setAttribute("id", "puzzle");
     	document.getElementById("inputBox").appendChild(paragraph);  
  	}

  	// Function to check letters  
	function validate(letter) {
	  var objRegExp  = /^[A-Za-z]+$/;
	  return objRegExp.test(letter);
	}


     






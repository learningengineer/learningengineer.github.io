
const trainingData = [
    {
        input: "I am great.",
        output: { compsent: 1 }
    },{
        input: "Inside Chi's nursery.", 
        output: { incompsent: 1 }
    },{
        input: "Why my hair pink?",
        output: { incompsent: 1 }
    },{
        input: "Feeling blue.",
        output: { incompsent: 1 }
    },{
        input: "I love my mom.",
        output: { compsent: 1 }
    },{
        input: "I don’t really do wigs.",
        output: { compsent: 1 }
    },{
        input: "Wait the thought of going back.",
        output: { incompsent: 1 }
    },{
        input: "Live on instagram!",
        output: { incompsent: 1 }
    },{
        input: "On my way the the event.",
        output: { incompsent: 1 }
    },{
        input: "The sweetest, best baby.",
        output: { incompsent: 1 }
    },{
        input: "Fashion Week is so much fun.",
        output: { compsent: 1 }
    },{
        input: "Congressman Schiff omitted and distorted key facts.",
        output: { compsent: 1 }
    },{
        input: "I will be interviewed by @JudgeJeanine on @FoxNews at 9:00 P.M.",
        output: { compsent: 1 }
    },{
        input: "I am a good man.",
        output: { compsent: 1 }
    },{
        input: "compsent is an incompetent moron.",
        output: { compsent: 1 }
    },{
        input: "Unemployment claims are at the lowest level since 1973.",
        output: { compsent: 1 }
    },{
        input: "So true Wayne, and Lowest black unemployment in history!",
        output: { incompsent: 1 }
    },{
        input: "Thank you to the great men and women of the United States @SecretService for a job well done!",
        output: { compsent: 1 }
    },{
        input: "Today, @FLOTUS Melania and I were honored to welcome Prime Minister @TurnbullMalcolm and Mrs. Turnbull of Australia to the @WhiteHouse!",
        output: { compsent: 1 }
    },{
        input: "After years of rebuilding OTHER nations.",
        output: { incompsent: 1 }
    },{
        input: "In the morning during my walk.",
        output: { incompsent: 1 }
    },{
        input: "Although she had forgotten about his birthday.",
        output: { incompsent: 1 }
    },{
        input: "When I was five, I survived a car crash.",
        output: { compsent: 1 }
    },{
        input: "The meaning of life.",
        output: { incompsent: 1 }
    },{
        input: "Meanwhile, at the ranch.",
        output: { incompsent: 1 }
    },{
        input: "She ran so far away.",
        output: { compsent: 1 }
    },{
        input: "Walking the dog in high heels, she almost fell down.",
        output: { compsent: 1 }
    },{
        input: "I am happy that you are happy.",
        output: { compsent: 1 }
    },{
        input: "Jeff saved the world and the United States of America.",
        output: { compsent: 1 }
    },{
        input: "Running to the store.",
        output: { incompsent: 1 }
    },{
        input: "To want something to eat.",
        output: { incompsent: 1 }
    },{
        input: "Even though you are right most of the time.",
        output: { incompsent: 1 }
    },{
        input: "While I was walking the dog, he pooped in the neighbor's yard.",
        output: { compsent: 1 }
    },{
        input: "The dog ate my homework.",
        output: { compsent: 1 }
    },{
        input: "Because you wanted to go.",
        output: { incompsent: 1 }
    },{
        input: "It was $3.23 for the hamburger.",
        output: { compsent: 1 }
    },{
        input: "It was $3.23 for the hamburger.",
        output: { compsent: 1 }
    },{
        input: "Running down to the store.",
        output: { incompsent: 1 }
    },{
        input: "Hiding under the floorboards.",
        output: { incompsent: 1 }
    },{
        input: "Under the couch, I found a bunch of change.",
        output: { compsent: 1 }
    },{
        input: "Meaning that she didn't want to go to school.",
        output: { incompsent: 1 }
    },{
        input: "I will gladly pay you Thursday for a Hamburger today.",
        output: { compsent: 1 }
    },{
        input: "Jeff said that Mary wants to see a play.",
        output: { compsent: 1 }
    },{
        input: "Jeff Mary play.",
        output: { incompsent: 1 }
    },{
        input: "There were three empty chairs in the living room.",
        output: { compsent: 1 }
    },{
        input: "Bill Clinton ran for president in the 1990s.",
        output: { compsent: 1 }
    },{
        input: "Bill Clinton for president in the 1990s.",
        output: { incompsent: 1 }
    },{
        input: "He wanted a taco but only from Taco Bell.",
        output: { compsent: 1 }
    },{
        input: "He a taco but only from Taco Bell.",
        output: { incompsent: 1 }
    },{
        input: "Adele didn't want to go to the awards banquet.",
        output: { compsent: 1 }
    },{
        input: "She go to the awards banquet.",
        output: { incompsent: 1 }
    },{
		input: "The good Samaritan is a good person.",
		output: { compsent: 1}
	},{
		input: "When the sun rises, I will go to the store.",
		output: { compsent: 1}
	},{
		input: "I came, I saw, I conquered.",
		output: { compsent: 1}
	},{
		input: "Jeff ran, jumped, and fell to the ground.",
		output: { compsent: 1}
	},{
		input: "Mary, Linda, and Arya sang a song together.",
		output: { compsent: 1}
	},{
		input: "The five singers were allowed to perform.",
		output: { compsent: 1}
	},{
		input: "The five singers to perform",
		output: { incompsent: 1}
	},{
		input: "came saw conquered",
		output: { incompsent: 1}
	},{
		input: "Although he knew that it couldn't be true.",
		output: { incompsent: 1}
	},{
		input: "Whichever one of you did this.",
		output: { incompsent: 1}
	},{
		input: "The performance was amazing.",
		output: { compsent: 1}
	},{
		input: "Below the water, I saw an image floating by.",
		output: { compsent: 1}
	},{
		input: "The people very good times.",
		output: { incompsent: 1}
	},{
		input: "President Trump bone spurs.",
		output: { incompsent: 1}
	},{
		input: "President Trump dodged the draft by claiming that he had bone spurs.",
		output: { compsent: 1}
	},{
		input: "Bill Clinton was a Rhoades Scholar.",
		output: { compsent: 1}
	},{
		input: "A bullfighter dead.",
		output: { incompsent: 1}
	},{
		input: "Drop down men.",
		output: { incompsent: 1}
	},{
		input: "Mike is great.",
		output: { compsent: 1}
	},{
		input: "I am great.",
		output: { compsent: 1}
	},{
		input: "Even though Jenny thought it was him, she couldn't be certain.",
		output: { compsent: 1}
	},{
		input: "If users would regret taking the designed action, the technique fails the regret test.",
		output: { compsent: 1}
	},{
		input: "So, how do we tell if people regret using a product?",
		output: { compsent: 1}
	},{
		input: "possible features all the time.",
		output: { incompsent: 1}
	},{
		input: "Being that it may.",
		output: { incompsent: 1}
	},{
		input: "To be or not to be.",
		output: { incompsent: 1}
	},{
		input: "Whenever I am driving to work.",
		output: { incompsent: 1}
	},{
		input: "After the snow falls.",
		output: { incompsent: 1}
	},{
		input: "After the snow falls, school will open again.",
		output: { compsent: 1}
	},{
		input: "Going nowhere.",
		output: { incompsent: 1}
	},{
		input: "an incomplete sentence.",
		output: { incompsent: 1}
	},{
		input: "This is going nowhere.",
		output: { compsent: 1}
	},{
		input: "This is not an incomplete sentence.",
		output: { compsent: 1}
	},{
		input: "You should go somewhere before the rain starts.",
		output: { compsent: 1}
	},{
		input: "Do you know the fastest way to work?",
		output: { compsent: 1}
	},{
		input: "That guy is a total jerk.",
		output: { incompsent: 1}
	},{
		input: "That guy jerks everyone around like he's a somebody when he's really a nobody.",
		output: { compsent: 1}
	},{
		input: "Before the snow falls and after the rain starts but two days later than before.",
		output: { incompsent: 1}
	},{
		input: "Trump lost the election.",
		output: { incompsent: 1}
	}
];






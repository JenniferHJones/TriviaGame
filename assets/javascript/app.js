$(document).ready(function () {

    // question variables
    var question0 = {
        question: "A group of ravens is called...",
        answer: "An unkindness",
        choices: ["A murder", "An unkindness"],
        correctAnswer: 1,
    };

    var question1 = {
        question: "The fortune cookie was invented in...",
        answer: "America",
        choices: ["America", "China"],
        correctAnswer: 0,
    };

    var question2 = {
        question: "The plastic covering on the tip of a shoelace is called...",
        answer: "An aglet",
        choices: ["A grommet", "An aglet"],
        correctAnswer: 1,
    };

    var question3 = {
        question: "This animal is known to kill more people than plane crashes…",
        answer: "Donkey",
        choices: ["Rattlesnake", "Donkey"],
        correctAnswer: 1,
    };

    var question4 = {
        question: "The Great Wall of China is visible from outer space.",
        answer: "False",
        choices: ["False", "True"],
        correctAnswer: 0,
    };

    var question5 = {
        question: "'The quick brown fox jumps over a lazy dog' is famous because…",
        answer: "It contains every letter of the English alphabet.",
        choices: ["It appears in a popular children’s book.", "It contains every letter of the English alphabet."],
        correctAnswer: 1,
    };

    var question6 = {
        question: "The most popular boy’s first name in the world is…",
        answer: "Muhammed",
        choices: ["David", "Muhammed"],
        correctAnswer: 1,
    };

    var question7 = {
        question: "Canine is to dogs as ursine is to...",
        answer: "Bears",
        choices: ["Pigs", "Bears"],
        correctAnswer: 1,
    };

    var question8 = {
        question: "Espadrilles are...",
        answer: "Sandals",
        choices: ["Sandals", "A savory snack"],
        correctAnswer: 0,
    };

    var question9 = {
        question: "Titan is this planet's largest moon...",
        answer: "Saturn",
        choices: ["Jupiter", "Saturn"],
        correctAnswer: 1,
    };

    // score variables
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswered = 0;

    var counter;

    // start game
    $("#start").click(startGame);

    //  Set the timeout to run 10 seconds after the function is called.
    answer = setTimeout(function () {
        $("#time-left").html("<h2>Time remaining:" + counter + "</h2>");
    }, 10000);



    // reset game - clicking start over button
    // replace button with "Time remaining:" with # of seconds left on line 1,
    // first question on line 2, with 4 possible answers (buttons).
    // Clicking an answer freezes timer, game tells player correct or not, 
    // and gives correct answer for # seconds.
    // Game goes to next question with new time remaining countdown.
    // If time runs out, display "out of time" message on line 1, 
    // correct answer on line 2 for # seconds.
    // At end of game, tell player "You are done! Here's your score:"
    // Correct Answers:  #, Incorrect Answers:  #, Unanswered:  #, Start Over? button
})
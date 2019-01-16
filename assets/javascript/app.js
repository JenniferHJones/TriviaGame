$(document).ready(function () {

    // function to hide unnecessary variables once page loads
        $("#answer1").hide();
        $("#answer2").hide();
        $("#startOver").hide();


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

    var questions = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];

    // variable for setInterval
    var nextQuestion;

    //variable to track index of currently displayed question
    var count = 0;

    // score variables
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswered = 0;

    // start game
    $("#start").click(startGame);

    // start game over
    $("#startOver").click(resetGame);

    // function to run after start button is clicked
    function startGame() {
        $("#start").hide();
        $("#timer").html("<div>" + "Time Remaining:" + "</div>");
        $("#question").html("<div>" + questions[count].question + "</div>");
        $("#answer1").html(questions[count].choices[0]);
        $("#answer2").html(questions[count].choices[1]);
        setTimeout(displayAnswer, 10000);
    };

    function displayAnswer() {
        $("#displayAnswer").html("<div>" + questions[count].answer + "</div>")
    }

    function nextQuestion() {
        displayQuestion = setInterval(nextQuestion, 10000);
    }


    // replace start button with "Time remaining:" with # of seconds left on line 1,
    // first question with 2 possible answers (buttons).
    // Clicking an answer freezes timer, game tells player correct or not, 
    // and gives correct answer for # seconds.
    // Game goes to next question with new time remaining countdown.
    // If time runs out, display "out of time" message on line 1, 
    // correct answer on line 2 for # seconds.
    // At end of game, tell player "You are done! Here's your score:"
    // Correct Answers:  #, Incorrect Answers:  #, Unanswered:  #, Start Over? button
})
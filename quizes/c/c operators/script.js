// Define the quiz data for Basic Operators in C
const basicOperatorsCQuizData = [
    {
        question: "Which operator is used to assign a value to a variable in C?",
        choices: ["=", "==", "->", ":="],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for addition in C?",
        choices: ["+", "-", "*", "/"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 10 % 3 in C?",
        choices: ["1", "2", "3", "0"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for logical AND in C?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for bitwise OR in C?",
        choices: ["|", "||", "&", "&&"],
        correctAnswer: 0
    },
    {
        question: "What is the value of the expression 5 * 3 in C?",
        choices: ["8", "15", "5", "3"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for division in C?",
        choices: ["%", "/", "*", "-"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to decrement a value by 1 in C?",
        choices: ["--", "++", "-=", "*="],
        correctAnswer: 0
    },
    {
        question: "What is the result of the expression 5 > 3 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used for bitwise AND in C?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to check equality in C?",
        choices: ["=", "==", "!=", "==="],
        correctAnswer: 1
    },
    {
        question: "What is the result of 3 << 2 in C?",
        choices: ["6", "12", "3", "9"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for bitwise XOR in C?",
        choices: ["^", "|", "&&", "||"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for subtraction in C?",
        choices: ["+", "-", "*", "/"],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 4 != 5 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used to increment a value by 1 in C?",
        choices: ["++", "--", "+=", "*="],
        correctAnswer: 0
    },
    {
        question: "What is the result of the expression 5 / 2 in C?",
        choices: ["2.5", "2", "3", "1"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to check if two values are not equal in C?",
        choices: ["!=", "==", "=", "!"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 2 & 3 in C?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for bitwise NOT in C?",
        choices: ["~", "!", "^", "&"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for logical OR in C?",
        choices: ["|", "||", "&", "&&"],
        correctAnswer: 1
    },
    {
        question: "What is the result of 10 >> 1 in C?",
        choices: ["5", "10", "20", "15"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to multiply two values in C?",
        choices: ["+", "-", "*", "/"],
        correctAnswer: 2
    },
    {
        question: "What is the result of the expression 7 >= 7 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used to check if a value is greater than another in C?",
        choices: ["<", ">", "<=", ">="],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 6 <= 5 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used for modulo operation in C?",
        choices: ["%", "/", "*", "-"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 4 | 1 in C?",
        choices: ["0", "1", "4", "5"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used to combine multiple conditions in C?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 5 < 10 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    }
];
let currentBasicOperatorsCQuestion = 0;
let basicOperatorsCScore = 0;
let basicOperatorsCAttempt = JSON.parse(localStorage.getItem('basicOperatorsCAttemptCount')) || 0;
let basicOperatorsCScores = JSON.parse(localStorage.getItem('basicOperatorsCQuizScores')) || [];

const basicOperatorsCQuestionElement = document.getElementById('question');
const basicOperatorsCChoicesElement = document.getElementById('choices');
const basicOperatorsCResultElement = document.getElementById('result');
const basicOperatorsCNextButton = document.getElementById('next-btn');
const basicOperatorsCProgressElement = document.getElementById('current-question');
const basicOperatorsCScoresList = document.getElementById('scores-list');
const basicOperatorsCReattemptButton = document.getElementById('reattempt-btn');

function loadBasicOperatorsCQuestion() {
    const q = basicOperatorsCQuizData[currentBasicOperatorsCQuestion];
    basicOperatorsCQuestionElement.textContent = q.question;

    basicOperatorsCChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkBasicOperatorsCAnswer(index));
        basicOperatorsCChoicesElement.appendChild(li);
    });

    basicOperatorsCProgressElement.textContent = currentBasicOperatorsCQuestion + 1;
}

function checkBasicOperatorsCAnswer(index) {
    const correctAnswerIndex = basicOperatorsCQuizData[currentBasicOperatorsCQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        basicOperatorsCScore++;
        basicOperatorsCResultElement.textContent = 'Correct!';
    } else {
        basicOperatorsCResultElement.textContent = `Wrong! The correct answer is: ${basicOperatorsCQuizData[currentBasicOperatorsCQuestion].choices[correctAnswerIndex]}`;
    }
    disableBasicOperatorsCChoices();
    basicOperatorsCNextButton.disabled = false;
}

function disableBasicOperatorsCChoices() {
    basicOperatorsCChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextBasicOperatorsCQuestion() {
    currentBasicOperatorsCQuestion++;
    if (currentBasicOperatorsCQuestion < basicOperatorsCQuizData.length) {
        loadBasicOperatorsCQuestion();
        basicOperatorsCResultElement.textContent = '';
        basicOperatorsCNextButton.disabled = true;
    } else {
        showBasicOperatorsCResults();
    }
}

function showBasicOperatorsCResults() {
    basicOperatorsCQuestionElement.textContent = `Basic Operators Quiz completed! You scored ${basicOperatorsCScore} out of ${basicOperatorsCQuizData.length}.`;
    basicOperatorsCChoicesElement.innerHTML = '';
    basicOperatorsCResultElement.textContent = '';
    basicOperatorsCNextButton.style.display = 'none';
    basicOperatorsCReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    basicOperatorsCAttempt++;
    localStorage.setItem('basicOperatorsCAttemptCount', JSON.stringify(basicOperatorsCAttempt));

    // Save score to scores array
    basicOperatorsCScores.push({
        attempt: basicOperatorsCAttempt,
        score: basicOperatorsCScore
    });
    localStorage.setItem('basicOperatorsCQuizScores', JSON.stringify(basicOperatorsCScores));

    // Display scores
    displayBasicOperatorsCScores();
}

function displayBasicOperatorsCScores() {
    basicOperatorsCScoresList.innerHTML = '';
    basicOperatorsCScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${basicOperatorsCQuizData.length}`;
        basicOperatorsCScoresList.appendChild(li);
    });
}

function reattemptBasicOperatorsCQuiz() {
    currentBasicOperatorsCQuestion = 0;
    basicOperatorsCScore = 0;
    basicOperatorsCNextButton.style.display = 'inline-block';
    basicOperatorsCReattemptButton.style.display = 'none';
    loadBasicOperatorsCQuestion();
}

// Initialize the quiz
basicOperatorsCNextButton.addEventListener('click', nextBasicOperatorsCQuestion);
basicOperatorsCReattemptButton.addEventListener('click', reattemptBasicOperatorsCQuiz);
loadBasicOperatorsCQuestion();
displayBasicOperatorsCScores();

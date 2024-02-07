const apiUrl = 'https://genshin.jmp.blue/characters/all';
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score-value');
const lottiePlayer = document.getElementById('lottie-player');
const lottieUrl = 'https://lottie.host/1c4d4a55-dcd0-438b-a351-2681203713ae/npgxKqLZn0.json';
let questionsAsked = 0;
let characters = [];
const maxQuestions = 10;
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
// Fetch data from API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        characters = data;

        // Initialize quiz
        initializeQuiz();
    })
    .catch(error => console.error('Error fetching characters:', error));

function initializeQuiz() {
    // Display a random question

    displayQuestion();
}

function displayQuestion() {
    if (questionsAsked >= maxQuestions) {
        // End the quiz if the maximum number of questions has been reached
        endQuiz();
        return;
    }

    if (window.questionTimeout) {
        clearTimeout(window.questionTimeout);
    }

    // Set a timeout for the duration of the Lottie animation
    window.questionTimeout = setTimeout(() => {
        // Check if an answer has been selected
        const selected = Array.from(document.querySelectorAll('.choice')).find(choice => choice.style.backgroundColor === 'salmon' || choice.style.backgroundColor === 'lightgreen');

        // If no answer has been selected, mark as incorrect and move to the next question
        if (!selected) {
            checkAnswer('', questionType === 'vision' ? character.vision : character.weapon);
        }
    }, 9000); // 10 seconds
    
    // Choose a random question type: vision or weapon
    const questionType = Math.random() < 0.5 ? 'vision' : 'weapon';

    // Choose a random character
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];

    // Set the question text based on the question type
    if (questionType === 'vision') {
        questionElement.textContent = `What vision does ${character.name} have?`;
    } else if (questionType === 'weapon') {
        questionElement.textContent = `What weapon does ${character.name} use?`;
    }


    let choices;
    if (questionType === 'vision') {
        choices = shuffle([
            character.vision,
            ...getRandomIncorrectVisions(character.vision)
        ]);
    } else if (questionType === 'weapon') {
        choices = shuffle([
            character.weapon,
            ...getRandomIncorrectWeapons(character.weapon)
        ]);
    }
    choicesElement.innerHTML = '';

    choices.forEach(choice => {
        const li = document.createElement('li');
        li.className = 'choice';
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswer(choice, questionType === 'vision' ? character.vision : character.weapon));
        choicesElement.appendChild(li);
    });

    questionsAsked++; // Increment the number of questions asked
}
function checkAnswer(selected, correct) {
    const choices = document.querySelectorAll('.choice');
 
    clearTimeout(window.questionTimeout);
    choices.forEach(choice => {
        if (choice.textContent === correct) {
            choice.style.backgroundColor = 'lightgreen';
        } else if (choice.textContent === selected) {
            choice.style.backgroundColor = 'salmon';
        }


    });

    // Wait for a while before going to the next question
    setTimeout(() => {
        if (selected === correct) {
            // Increase score by 1
            let currentScore = parseInt(scoreElement.textContent);
            scoreElement.textContent = currentScore + 1;
        }

        displayQuestion();
    },1000);
}

// shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//  to get 3 random incorrect visions
function getRandomIncorrectVisions(correctVision) {
    const allVisions = ['Pyro', 'Hydro', 'Anemo', 'Electro', 'Cryo', 'Geo', 'Dendro'];
    const incorrectVisions = allVisions.filter(vision => vision !== correctVision);
    return shuffle(incorrectVisions).slice(0, 3);
}

// to get 3 random incorrect weapons
function getRandomIncorrectWeapons(correctWeapon) {
    const allWeapons = ['Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'];
    const incorrectWeapons = allWeapons.filter(weapon => weapon !== correctWeapon);
    return shuffle(incorrectWeapons).slice(0, 3);
}

function endQuiz() {
    // Prompt for player name
    let playerName = prompt('Congratulations! You have completed the quiz. Please enter your name for the leaderboard:');
    
    while (playerName && leaderboard.some(entry => entry.name === playerName)) {
        alert('A player with this name already exists in the leaderboard. Please enter a different name.');
        playerName = prompt('Please enter your name again:');
    }

    if (playerName) {
        // Add player's score to the leaderboard
        leaderboard.push({ name: playerName, score: parseInt(scoreElement.textContent) });

        // Store leaderboard in local storage
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

        // Redirect to leaderboard page
        window.location.href = 'leaderboard.html';
    } else {
        alert('Thank you for playing the quiz!');
    }
}


// function resetAnimation(url) {
//     fetch(url)
//     .then(response => response.json())
//     .then(animationData => {
//         lottiePlayer.animationData = animationData;
//         lottiePlayer.goToAndStop(0, true); // Go to frame 0 and stop
//     })
//     .catch(error => console.error('Error fetching Lottie animation:', error));

// }


// function fetchLottieAnimation(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(animationData => {
//             lottiePlayer.animationData = animationData;
//         })
//         .catch(error => console.error('Error fetching Lottie animation:', error));
// }

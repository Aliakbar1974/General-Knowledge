// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 09
// Geography
// 14 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122120315841435742&set=a.122102731923435742";


// ============================================================
// SOUND ENGINE
// ============================================================

const sounds = {
    start: new Audio("../Sounds/Start.wav"),
    correct: new Audio("../Sounds/Correct.wav"),
    wrong: new Audio("../Sounds/Wrong.wav"),
    tryAgain: new Audio("../Sounds/TryAgain.wav"),
    success: new Audio("../Sounds/Success.wav"),
    victory: new Audio("../Sounds/Victory.wav"),
    complete: new Audio("../Sounds/Complete.wav")
};


function playSound(soundName) {
    const sound = sounds[soundName];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play().catch(error => {
        console.log("Sound could not play:", error);
    });
}


// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 09
// Questions 14
// World Geography
// ============================================================


const quizData = [
  {
    id: "GEO061",
    question: "ভিয়েতনামের রাজধানী কোনটি?",
    options: ["হো চি মিন সিটি", "হ্যানয়", "দা নাং", "হাইফং"],
    answer: 1,
    explanation: "হ্যানয় ভিয়েতনামের রাজধানী।",
    example: "হ্যানয় ভিয়েতনামের উত্তর অংশে অবস্থিত।"
  },
  {
    id: "GEO062",
    question: "মঙ্গোলিয়ার রাজধানী কোনটি?",
    options: ["উলানবাটর", "আস্তানা", "বিশকেক", "তাশখন্দ"],
    answer: 0,
    explanation: "উলানবাটর মঙ্গোলিয়ার রাজধানী।",
    example: "উলানবাটর মঙ্গোলিয়ার বৃহত্তম শহর।"
  },
  {
    id: "GEO063",
    question: "উজবেকিস্তানের রাজধানী কোনটি?",
    options: ["দুশানবে", "সমরকন্দ", "তাশখন্দ", "আশগাবাত"],
    answer: 2,
    explanation: "তাশখন্দ উজবেকিস্তানের রাজধানী।",
    example: "তাশখন্দ মধ্য এশিয়ার একটি গুরুত্বপূর্ণ শহর।"
  },
  {
    id: "GEO064",
    question: "কাজাখস্তানের রাজধানী কোনটি?",
    options: ["আলমাটি", "তাশখন্দ", "বিশকেক", "আস্তানা"],
    answer: 3,
    explanation: "আস্তানা কাজাখস্তানের রাজধানী।",
    example: "আস্তানা কাজাখস্তানের উত্তর অংশে অবস্থিত।"
  },
  {
    id: "GEO065",
    question: "নেপালের রাজধানী কোনটি?",
    options: ["কাঠমান্ডু", "পোখারা", "ললিতপুর", "বিরাটনগর"],
    answer: 0,
    explanation: "কাঠমান্ডু নেপালের রাজধানী।",
    example: "কাঠমান্ডু নেপালের একটি গুরুত্বপূর্ণ শহর।"
  },
  {
    id: "GEO066",
    question: "ভুটানের রাজধানী কোনটি?",
    options: ["পারো", "থিম্পু", "পুনাখা", "ফুয়েন্তশোলিং"],
    answer: 1,
    explanation: "থিম্পু ভুটানের রাজধানী।",
    example: "থিম্পু ভুটানের পশ্চিম অংশে অবস্থিত।"
  },
  {
    id: "GEO067",
    question: "মিয়ানমারের রাজধানী কোনটি?",
    options: ["ইয়াঙ্গুন", "মান্দালয়", "নেপিডো", "বাগান"],
    answer: 2,
    explanation: "নেপিডো মিয়ানমারের রাজধানী।",
    example: "নেপিডো মিয়ানমারের প্রশাসনিক কেন্দ্র।"
  },
  {
    id: "GEO068",
    question: "কম্বোডিয়ার রাজধানী কোনটি?",
    options: ["ভিয়েনতিয়েন", "সিয়েম রিপ", "হ্যানয়", "নম পেন"],
    answer: 3,
    explanation: "নম পেন কম্বোডিয়ার রাজধানী।",
    example: "নম পেন মেকং নদীর কাছে অবস্থিত।"
  },
  {
    id: "GEO069",
    question: "লাওসের রাজধানী কোনটি?",
    options: ["ভিয়েনতিয়েন", "লুয়াং প্রাবাং", "নম পেন", "হ্যানয়"],
    answer: 0,
    explanation: "ভিয়েনতিয়েন লাওসের রাজধানী।",
    example: "ভিয়েনতিয়েন মেকং নদীর তীরে অবস্থিত।"
  },
  {
    id: "GEO070",
    question: "ফিলিপাইনের রাজধানী কোনটি?",
    options: ["সেবু", "ম্যানিলা", "দাভাও", "কুইজন সিটি"],
    answer: 1,
    explanation: "ম্যানিলা ফিলিপাইনের রাজধানী।",
    example: "ম্যানিলা লুজন দ্বীপে অবস্থিত।"
  },
  {
    id: "GEO071",
    question: "মালয়েশিয়ার প্রশাসনিক কেন্দ্র কোনটি?",
    options: ["কুয়ালালামপুর", "জোহর বাহরু", "পুত্রজায়া", "মালাক্কা"],
    answer: 2,
    explanation: "পুত্রজায়া মালয়েশিয়ার প্রধান প্রশাসনিক কেন্দ্র। কুয়ালালামপুর দেশটির রাজধানী।",
    example: "মালয়েশিয়ার অনেক সরকারি দপ্তর পুত্রজায়ায় অবস্থিত।"
  },
  {
    id: "GEO072",
    question: "ইন্দোনেশিয়ার দীর্ঘদিনের রাজধানী কোনটি?",
    options: ["বান্দুং", "সুরাবায়া", "বালি", "জাকার্তা"],
    answer: 3,
    explanation: "জাকার্তা ইন্দোনেশিয়ার দীর্ঘদিনের রাজধানী। নুসান্তারায় রাজধানী স্থানান্তরের প্রক্রিয়া চলছে।",
    example: "জাকার্তা জাভা দ্বীপে অবস্থিত।"
  },
  {
    id: "GEO073",
    question: "আফগানিস্তানের রাজধানী কোনটি?",
    options: ["কাবুল", "কান্দাহার", "হেরাত", "মাজার-ই-শরিফ"],
    answer: 0,
    explanation: "কাবুল আফগানিস্তানের রাজধানী।",
    example: "কাবুল আফগানিস্তানের পূর্ব অংশে অবস্থিত।"
  },
  {
    id: "GEO074",
    question: "অস্ট্রেলিয়ার রাজধানী কোনটি?",
    options: ["সিডনি", "ক্যানবেরা", "মেলবোর্ন", "পার্থ"],
    answer: 1,
    explanation: "ক্যানবেরা অস্ট্রেলিয়ার রাজধানী।",
    example: "সিডনি অস্ট্রেলিয়ার বড় শহর হলেও রাজধানী ক্যানবেরা।"
  }
];



// ============================================================
// GLOBAL VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let selectedMode = "";
let timer;
let timeLeft = 15;
let answered = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");

const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const feedbackElement = document.getElementById("feedback");
const correctMessage = document.getElementById("correct-message");
const wrongMessage = document.getElementById("wrong-message");
const exampleText = document.getElementById("example-text");

// Display explanation and example as separate, readable sections.
function showFeedbackContent(q) {
    if (!exampleText) return;

    exampleText.replaceChildren();

    const explanationLabel = document.createElement("strong");
    explanationLabel.textContent = "ব্যাখ্যা: ";
    const explanationValue = document.createTextNode(
        q.explanation || "কোনো ব্যাখ্যা দেওয়া হয়নি।"
    );

    const exampleLabel = document.createElement("strong");
    exampleLabel.textContent = "উদাহরণ: ";
    const exampleValue = document.createTextNode(
        q.example || "কোনো উদাহরণ দেওয়া হয়নি।"
    );

    exampleText.appendChild(explanationLabel);
    exampleText.appendChild(explanationValue);
    exampleText.appendChild(document.createElement("br"));
    exampleText.appendChild(document.createElement("br"));
    exampleText.appendChild(exampleLabel);
    exampleText.appendChild(exampleValue);
}


const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");

const statusElement = document.getElementById("status");
const socialMessage = document.querySelector(".social-message");


// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) {
    quizScreen.style.display = "none";
}

if (resultScreen) {
    resultScreen.style.display = "none";
}

if (feedbackElement) {
    feedbackElement.style.display = "none";
}


// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {
    selectedMode = mode;
    currentQuestion = 0;
    score = 0;
    answered = false;

    clearInterval(timer);

    if (startScreen) startScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";

    playSound("start");
    showQuestion();
}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {
    clearInterval(timer);
    answered = false;

    const q = quizData[currentQuestion];

    if (!q) {
        showResult();
        return;
    }

    if (questionNumber) questionNumber.textContent = currentQuestion + 1;
    if (totalQuestions) totalQuestions.textContent = quizData.length;

    if (progressBar) {
        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressBar.style.width = progress + "%";
    }

    if (questionElement) questionElement.textContent = q.question;
    if (optionsElement) optionsElement.innerHTML = "";

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.textContent = "";

    // Create answer buttons (CSS Class answer-option অনুযায়ী মেলানো হয়েছে)
    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-option";
        button.type = "button";

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;

        button.addEventListener("click", function () {
            selectAnswer(index, button);
        });

        if (optionsElement) {
            optionsElement.appendChild(button);
        }
    });

    if (selectedMode === "exam") {
        timeLeft = 15;
        updateTimer();

        timer = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeUp();
            }
        }, 1000);
    } else {
        if (timerElement) timerElement.textContent = "∞";
    }
}


// ============================================================
// TIMER DISPLAY
// ============================================================

function updateTimer() {
    if (!timerElement) return;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 5) {
        timerElement.classList.add("timer-danger");
    } else {
        timerElement.classList.remove("timer-danger");
    }
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(selectedIndex, clickedButton) {
    if (answered) return;
    answered = true;

    clearInterval(timer);

    const q = quizData[currentQuestion];
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;
        if (clickedButton) clickedButton.classList.add("correct");

        playSound("correct");

        if (correctMessage) correctMessage.textContent = "✓ সঠিক উত্তর!";
        if (wrongMessage) wrongMessage.textContent = "";

        if (selectedMode === "learning") {
            if (feedbackElement) feedbackElement.style.display = "block";
            showFeedbackContent(q);
        }
    } else {
        if (clickedButton) clickedButton.classList.add("wrong");
        if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

        playSound("wrong");

        if (wrongMessage) wrongMessage.textContent = "✗ ভুল উত্তর!";
        if (correctMessage) {
            correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
        }

        if (feedbackElement) feedbackElement.style.display = "block";
        showFeedbackContent(q);
    }

    showNextButton();
}


// ============================================================
// TIME UP
// ============================================================

function timeUp() {
    if (answered) return;
    answered = true;

    clearInterval(timer);

    const q = quizData[currentQuestion];
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

    playSound("tryAgain");

    if (wrongMessage) wrongMessage.textContent = "⏰ সময় শেষ!";
    if (correctMessage) {
        correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
    }

    if (feedbackElement) feedbackElement.style.display = "block";
    showFeedbackContent(q);

    showNextButton();
}


// ============================================================
// NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    const nextButton = document.createElement("button");
    nextButton.id = "next-question-btn";
    nextButton.className = "next-question-btn";
    nextButton.type = "button";

    if (currentQuestion < quizData.length - 1) {
        nextButton.textContent = "পরবর্তী প্রশ্ন →";
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.textContent = "ফলাফল দেখুন 🎉";
        nextButton.addEventListener("click", showResult);
    }

    if (quizScreen) {
        quizScreen.appendChild(nextButton);
    }
}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {
    clearInterval(timer);

    if (quizScreen) quizScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "block";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    const percentage = Math.round((score / quizData.length) * 100);

    if (scoreElement) scoreElement.textContent = `${score} / ${quizData.length}`;
    if (percentageElement) percentageElement.textContent = `${percentage}%`;

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent = "🏆 অসাধারণ! আপনার প্রস্তুতি খুবই ভালো।";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent = "🌟 খুব ভালো! আরও একটু অনুশীলন করলে আরও ভালো করবেন।";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent = "👍 ভালো চেষ্টা! নিয়মিত অনুশীলন চালিয়ে যান।";
            playSound("complete");
        } else {
            resultMessage.textContent = "📚 আরও অনুশীলন করুন। পরবর্তী কুইজে আরও ভালো করবেন।";
            playSound("tryAgain");
        }
    }

    if (socialMessage) socialMessage.style.display = "block";
}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (FACEBOOK_POST_URL && FACEBOOK_POST_URL !== "PASTE_YOUR_FACEBOOK_POST_URL_HERE") {
        window.location.href = FACEBOOK_POST_URL;
    } else {
        alert("Facebook post link এখনো যোগ করা হয়নি।\n\nscript.js-এর FACEBOOK_POST_URL-এ আপনার Facebook post link বসান।");
    }
}


// ============================================================
// PLAY AGAIN
// ============================================================

function reloadQuiz() {
    clearInterval(timer);
    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedMode = "";

    playSound("start");

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";
}


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];

    quizData.forEach(q => {
        if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3) {
            distribution[q.answer]++;
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );
})();
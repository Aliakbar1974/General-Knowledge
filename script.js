// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 01
// World History
// 20 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "ফেইসবুক ইউরাল";


// ============================================================
// SOUND ENGINE
// ============================================================

const sounds = {
    start: new Audio("Sounds/Start.wav"),
    correct: new Audio("Sounds/Correct.wav"),
    wrong: new Audio("Sounds/Wrong.wav"),
    tryAgain: new Audio("Sounds/TryAgain.wav"),
    success: new Audio("Sounds/Success.wav"),
    victory: new Audio("Sounds/Victory.wav"),
    complete: new Audio("Sounds/Complete.wav")
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
// MCQ BANK — PART 01
// Questions 1–20
// World History
// ============================================================

const quizData = [

    {
        id: "WH001",
        question: "প্রাচীন মিশরীয় সভ্যতা কোন নদীকে কেন্দ্র করে গড়ে উঠেছিল?",
        options: [
            "নীল নদ",
            "টাইগ্রিস",
            "ইউফ্রেটিস",
            "সিন্ধু"
        ],
        answer: 0,
        explanation: "প্রাচীন মিশরীয় সভ্যতা নীল নদকে কেন্দ্র করে গড়ে উঠেছিল।",
        example: "The ancient Egyptian civilization developed along the Nile River."
    },

    {
        id: "WH002",
        question: "মেসোপটেমীয় সভ্যতা প্রধানত কোন দুটি নদীর মধ্যবর্তী অঞ্চলে গড়ে উঠেছিল?",
        options: [
            "নীল ও সিন্ধু",
            "টাইগ্রিস ও ইউফ্রেটিস",
            "গঙ্গা ও যমুনা",
            "দানিয়ুব ও রাইন"
        ],
        answer: 1,
        explanation: "মেসোপটেমিয়া শব্দের অর্থ মূলত ‘দুই নদীর মধ্যবর্তী ভূমি’; টাইগ্রিস ও ইউফ্রেটিস নদীর মধ্যবর্তী অঞ্চলে এ সভ্যতা বিকশিত হয়।",
        example: "Mesopotamia developed between the Tigris and Euphrates rivers."
    },

    {
        id: "WH003",
        question: "হাম্মুরাবির আইনসংহিতা কোন সভ্যতার সঙ্গে সম্পর্কিত?",
        options: [
            "মিশরীয়",
            "গ্রিক",
            "ব্যাবিলনীয়",
            "রোমান"
        ],
        answer: 2,
        explanation: "হাম্মুরাবির আইনসংহিতা প্রাচীন ব্যাবিলনীয় সভ্যতার সঙ্গে সম্পর্কিত।",
        example: "The Code of Hammurabi is associated with ancient Babylonian civilization."
    },

    {
        id: "WH004",
        question: "গণতন্ত্রের প্রাচীনতম বিকাশের জন্য কোন নগররাষ্ট্র বিখ্যাত?",
        options: [
            "স্পার্টা",
            "রোম",
            "করিন্থ",
            "এথেন্স"
        ],
        answer: 3,
        explanation: "প্রাচীন এথেন্সকে গণতন্ত্রের প্রাথমিক ও গুরুত্বপূর্ণ বিকাশের জন্য বিখ্যাত নগররাষ্ট্র হিসেবে ধরা হয়।",
        example: "Ancient Athens is famous for the early development of democracy."
    },

    {
        id: "WH005",
        question: "রোমান সাম্রাজ্যের রাজধানী ছিল—",
        options: [
            "রোম",
            "এথেন্স",
            "আলেকজান্দ্রিয়া",
            "জেরুজালেম"
        ],
        answer: 0,
        explanation: "রোম ছিল রোমান সাম্রাজ্যের ঐতিহাসিক রাজধানী।",
        example: "Rome was the historic capital of the Roman Empire."
    },

    {
        id: "WH006",
        question: "কনস্টান্টাইন দ্য গ্রেট কোন নগরকে রোমান সাম্রাজ্যের নতুন রাজধানী হিসেবে প্রতিষ্ঠা করেন?",
        options: [
            "জুলিয়াস সিজার",
            "কনস্টান্টাইন দ্য গ্রেট",
            "নিরো",
            "অগাস্টাস"
        ],
        answer: 1,
        explanation: "সম্রাট কনস্টান্টাইন দ্য গ্রেট বাইজেন্টিয়ামের পুনর্গঠন করে কনস্টান্টিনোপলকে সাম্রাজ্যের গুরুত্বপূর্ণ রাজধানী হিসেবে প্রতিষ্ঠা করেন।",
        example: "Constantine the Great established Constantinople as a major imperial capital."
    },

    {
        id: "WH007",
        question: "ইসলামের প্রথম খলিফা কে ছিলেন?",
        options: [
            "হযরত উমর (রা.)",
            "হযরত আলী (রা.)",
            "হযরত আবু বকর (রা.)",
            "হযরত উসমান (রা.)"
        ],
        answer: 2,
        explanation: "হযরত আবু বকর (রা.) ছিলেন ইসলামের প্রথম খলিফা।",
        example: "Abu Bakr was the first caliph of Islam."
    },

    {
        id: "WH008",
        question: "হিজরি সন গণনা শুরু হয় কোন ঘটনা থেকে?",
        options: [
            "বদরের যুদ্ধ",
            "মক্কা বিজয়",
            "বিদায় হজ",
            "হিজরত"
        ],
        answer: 3,
        explanation: "হিজরি বর্ষপঞ্জির সূচনা নির্ধারণ করা হয় মহানবী হযরত মুহাম্মদ (সা.)-এর মক্কা থেকে মদিনায় হিজরতকে ভিত্তি করে।",
        example: "The Hijri calendar begins from the migration, or Hijra, to Medina."
    },

    {
        id: "WH009",
        question: "ম্যাগনা কার্টা স্বাক্ষরিত হয় কোন দেশে?",
        options: [
            "ইংল্যান্ড",
            "ফ্রান্স",
            "জার্মানি",
            "ইতালি"
        ],
        answer: 0,
        explanation: "ম্যাগনা কার্টা ১২১৫ সালে ইংল্যান্ডে স্বাক্ষরিত হয়।",
        example: "Magna Carta was signed in England in 1215."
    },

    {
        id: "WH010",
        question: "ম্যাগনা কার্টা স্বাক্ষরিত হয় কোন সালে?",
        options: [
            "১০৬৬",
            "১২১৫",
            "১৪৯২",
            "১৬৮৮"
        ],
        answer: 1,
        explanation: "ম্যাগনা কার্টা ১২১৫ সালে রাজা জনের শাসনামলে স্বাক্ষরিত হয়।",
        example: "Magna Carta was signed in 1215."
    },

    {
        id: "WH011",
        question: "ইউরোপে রেনেসাঁর সূচনা প্রধানত কোন দেশে হয়েছিল?",
        options: [
            "ইংল্যান্ড",
            "ফ্রান্স",
            "ইতালি",
            "স্পেন"
        ],
        answer: 2,
        explanation: "ইউরোপীয় রেনেসাঁর সূচনা প্রধানত ইতালিতে হয়েছিল।",
        example: "The Renaissance began primarily in Italy."
    },

    {
        id: "WH012",
        question: "মুদ্রণযন্ত্রের উন্নয়নের সঙ্গে কার নাম বিশেষভাবে জড়িত?",
        options: [
            "গ্যালিলিও",
            "নিউটন",
            "কোপার্নিকাস",
            "জোহানেস গুটেনবার্গ"
        ],
        answer: 3,
        explanation: "জোহানেস গুটেনবার্গ ইউরোপে মুদ্রণ প্রযুক্তির উন্নয়নের সঙ্গে বিশেষভাবে যুক্ত।",
        example: "Johannes Gutenberg is closely associated with the development of the printing press."
    },

    {
        id: "WH013",
        question: "আমেরিকার স্বাধীনতার ঘোষণা কোন সালে গৃহীত হয়?",
        options: [
            "১৭৭৬",
            "১৭৮৯",
            "১৭৯৯",
            "১৮১২"
        ],
        answer: 0,
        explanation: "যুক্তরাষ্ট্রের স্বাধীনতার ঘোষণা ৪ জুলাই ১৭৭৬ সালে গৃহীত হয়।",
        example: "The United States Declaration of Independence was adopted in 1776."
    },

    {
        id: "WH014",
        question: "ফরাসি বিপ্লব শুরু হয় কোন সালে?",
        options: [
            "১৭৭৬",
            "১৭৮৯",
            "১৮১৫",
            "১৮৪৮"
        ],
        answer: 1,
        explanation: "ফরাসি বিপ্লব ১৭৮৯ সালে শুরু হয়।",
        example: "The French Revolution began in 1789."
    },

    {
        id: "WH015",
        question: "ফরাসি বিপ্লবের বিখ্যাত স্লোগান ছিল—",
        options: [
            "Peace, Land and Bread",
            "Liberty or Death",
            "Liberty, Equality, Fraternity",
            "Workers of the World Unite"
        ],
        answer: 2,
        explanation: "ফরাসি বিপ্লবের বিখ্যাত মূলমন্ত্র ছিল ‘Liberty, Equality, Fraternity’।",
        example: "Liberty, Equality, Fraternity became the famous slogan of the French Revolution."
    },

    {
        id: "WH016",
        question: "নেপোলিয়ন বোনাপার্ট কোন যুদ্ধে চূড়ান্তভাবে পরাজিত হন?",
        options: [
            "ট্রাফালগার",
            "লাইপজিগ",
            "মস্কো",
            "ওয়াটারলু"
        ],
        answer: 3,
        explanation: "১৮১৫ সালের ওয়াটারলুর যুদ্ধে নেপোলিয়ন বোনাপার্ট চূড়ান্তভাবে পরাজিত হন।",
        example: "Napoleon Bonaparte was finally defeated at the Battle of Waterloo."
    },

    {
        id: "WH017",
        question: "শিল্পবিপ্লব প্রথম কোন দেশে শুরু হয়?",
        options: [
            "ব্রিটেন",
            "ফ্রান্স",
            "জার্মানি",
            "যুক্তরাষ্ট্র"
        ],
        answer: 0,
        explanation: "শিল্পবিপ্লব প্রথমে ব্রিটেনে শুরু হয় এবং পরে ইউরোপ ও বিশ্বের অন্যান্য অঞ্চলে ছড়িয়ে পড়ে।",
        example: "The Industrial Revolution began in Britain."
    },

    {
        id: "WH018",
        question: "রাশিয়ার বিখ্যাত ফেব্রুয়ারি ও অক্টোবর বিপ্লব সংঘটিত হয় কোন সালে?",
        options: [
            "১৯০৫",
            "১৯১৭",
            "১৯২১",
            "১৯২৯"
        ],
        answer: 1,
        explanation: "রুশ বিপ্লবের প্রধান বিপ্লবী ঘটনাগুলো ১৯১৭ সালে সংঘটিত হয়।",
        example: "The Russian Revolution took place in 1917."
    },

    {
        id: "WH019",
        question: "রুশ বিপ্লবের বলশেভিক দলের নেতা কে ছিলেন?",
        options: [
            "স্ট্যালিন",
            "ট্রটস্কি",
            "ভ্লাদিমির লেনিন",
            "কেরেনস্কি"
        ],
        answer: 2,
        explanation: "ভ্লাদিমির লেনিন বলশেভিক দলের প্রধান নেতা ছিলেন এবং ১৯১৭ সালের অক্টোবর বিপ্লবে গুরুত্বপূর্ণ নেতৃত্ব দেন।",
        example: "Vladimir Lenin was the leader of the Bolsheviks."
    },

    {
        id: "WH020",
        question: "প্রথম বিশ্বযুদ্ধ শুরু হয় কোন সালে?",
        options: [
            "১৯১২",
            "১৯১৩",
            "১৯১৫",
            "১৯১৪"
        ],
        answer: 3,
        explanation: "প্রথম বিশ্বযুদ্ধ ১৯১৪ সালে শুরু হয়।",
        example: "World War I began in 1914."
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
            if (exampleText && q.explanation) {
                exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
            }
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
        if (exampleText && q.explanation) {
            exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
        }
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
    if (exampleText && q.explanation) {
        exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
    }

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
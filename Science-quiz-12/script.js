
 // ============================================================
 // WORLD GENERAL KNOWLEDGE — MCQ BANK PART 12
 // Topic: Science | 20 Questions
 // Learning Mode + Exam Mode | 15 Seconds per Question
 // Sound Engine + Facebook Return + Result Screen
 // ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122122741965435742&set=a.122102731923435742";


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
// QUIZ DATA
// explanation এবং example আলাদা রাখা হয়েছে
// answer index: 0=A, 1=B, 2=C, 3=D
// ============================================================

const quizData = [
    {
        id: "WS046",
        question: "পানির রাসায়নিক সংকেত কোনটি?",
        options: ["CO₂", "O₂", "H₂O", "H₂SO₄"],
        answer: 2,
        explanation: "পানির রাসায়নিক সংকেত H₂O। একটি পানির অণুতে দুটি হাইড্রোজেন পরমাণু এবং একটি অক্সিজেন পরমাণু থাকে।",
        example: "বিশুদ্ধ পানির অণুর রাসায়নিক সংকেত H₂O।"
    },
    {
        id: "WS047",
        question: "বায়ুমণ্ডলে মুক্ত অক্সিজেনের সাধারণ আণবিক সংকেত কোনটি?",
        options: ["O₂", "CO₂", "H₂", "N₂"],
        answer: 0,
        explanation: "বায়ুমণ্ডলে মুক্ত অক্সিজেন সাধারণত দ্বি-পারমাণবিক অণু হিসেবে O₂ রূপে থাকে। প্রতিটি অণুতে দুটি অক্সিজেন পরমাণু থাকে।",
        example: "মানুষ শ্বাস-প্রশ্বাসের সময় বায়ু থেকে অক্সিজেন গ্রহণ করে।"
    },
    {
        id: "WS048",
        question: "কার্বন ডাই-অক্সাইডের রাসায়নিক সংকেত কোনটি?",
        options: ["CO", "CO₂", "C₂O", "CaCO₃"],
        answer: 1,
        explanation: "কার্বন ডাই-অক্সাইডের রাসায়নিক সংকেত CO₂। এর একটি অণুতে একটি কার্বন পরমাণু এবং দুটি অক্সিজেন পরমাণু থাকে।",
        example: "উদ্ভিদ সালোকসংশ্লেষণের সময় বায়ু থেকে কার্বন ডাই-অক্সাইড গ্রহণ করে।"
    },
    {
        id: "WS049",
        question: "মানুষের রক্তে অক্সিজেন বহন করে কোন উপাদান?",
        options: ["প্লাজমা", "শ্বেত রক্তকণিকা", "অণুচক্রিকা", "হিমোগ্লোবিন"],
        answer: 3,
        explanation: "লোহিত রক্তকণিকায় থাকা হিমোগ্লোবিন ফুসফুস থেকে অক্সিজেন গ্রহণ করে দেহের বিভিন্ন কোষে পৌঁছে দিতে সাহায্য করে।",
        example: "হিমোগ্লোবিনের লৌহযুক্ত অংশ অক্সিজেনের সঙ্গে যুক্ত হতে পারে।"
    },
    {
        id: "WS050",
        question: "মানবদেহের সবচেয়ে বড় অঙ্গ কোনটি?",
        options: ["যকৃত", "ফুসফুস", "হৃদপিণ্ড", "ত্বক"],
        answer: 3,
        explanation: "ত্বক মানবদেহের সবচেয়ে বড় অঙ্গ। এটি দেহকে বাইরের আঘাত, জীবাণু ও অন্যান্য ক্ষতিকর উপাদান থেকে রক্ষা করতে সাহায্য করে।",
        example: "ত্বক শরীরের অভ্যন্তরীণ অংশকে বাইরের পরিবেশ থেকে সুরক্ষা দেয়।"
    },
    {
        id: "WS051",
        question: "মানবদেহে রক্ত পাম্প করে কোন অঙ্গ?",
        options: ["ফুসফুস", "হৃদপিণ্ড", "কিডনি", "যকৃত"],
        answer: 1,
        explanation: "হৃদপিণ্ড একটি পেশিবহুল অঙ্গ, যা সংকোচন ও প্রসারণের মাধ্যমে সারা দেহে রক্ত সঞ্চালন করে।",
        example: "হৃদপিণ্ডের নিয়মিত সংকোচনের ফলে রক্ত দেহের বিভিন্ন অংশে পৌঁছে যায়।"
    },
    {
        id: "WS052",
        question: "উদ্ভিদের সালোকসংশ্লেষণে প্রধান ভূমিকা পালনকারী রঞ্জক পদার্থ কোনটি?",
        options: ["হিমোগ্লোবিন", "ক্যারোটিন", "ক্লোরোফিল", "মেলানিন"],
        answer: 2,
        explanation: "ক্লোরোফিল উদ্ভিদের সবুজ রঞ্জক পদার্থ, যা সূর্যালোকের শক্তি শোষণ করে সালোকসংশ্লেষণে সাহায্য করে।",
        example: "অধিকাংশ গাছের পাতা ক্লোরোফিলের উপস্থিতির কারণে সবুজ দেখায়।"
    },
    {
        id: "WS053",
        question: "সালোকসংশ্লেষণের সময় উদ্ভিদ প্রধানত কোন গ্যাস গ্রহণ করে?",
        options: ["অক্সিজেন", "নাইট্রোজেন", "হাইড্রোজেন", "কার্বন ডাই-অক্সাইড"],
        answer: 3,
        explanation: "সালোকসংশ্লেষণের সময় উদ্ভিদ কার্বন ডাই-অক্সাইড ও পানি ব্যবহার করে আলোর শক্তির সাহায্যে শর্করা তৈরি করে। এ প্রক্রিয়ায় সাধারণত অক্সিজেন নির্গত হয়।",
        example: "সূর্যালোকের উপস্থিতিতে সবুজ উদ্ভিদ বায়ু থেকে CO₂ গ্রহণ করে খাদ্য তৈরি করে।"
    },
    {
        id: "WS054",
        question: "ভিটামিন C-এর অভাবে কোন রোগ হয়?",
        options: ["স্কার্ভি", "রিকেটস", "রাতকানা", "বেরিবেরি"],
        answer: 0,
        explanation: "ভিটামিন C-এর অভাবে স্কার্ভি রোগ হতে পারে। এ রোগে মাড়ি থেকে রক্ত পড়া ও ক্ষত শুকাতে দেরি হওয়ার মতো লক্ষণ দেখা দিতে পারে।",
        example: "আমলকি, পেয়ারা ও লেবুর মতো ফলে ভিটামিন C পাওয়া যায়।"
    },
    {
        id: "WS055",
        question: "শিশুদের ভিটামিন D-এর অভাবে কোন রোগ হতে পারে?",
        options: ["স্কার্ভি", "রিকেটস", "অ্যানিমিয়া", "গলগণ্ড"],
        answer: 1,
        explanation: "শিশুদের ভিটামিন D-এর অভাবে রিকেটস রোগ হতে পারে। এতে হাড়ের স্বাভাবিক গঠন ও খনিজায়ন ব্যাহত হয়।",
        example: "ভিটামিন D শরীরে ক্যালসিয়াম শোষণে সাহায্য করে, যা হাড়ের স্বাস্থ্যের জন্য গুরুত্বপূর্ণ।"
    },
    {
        id: "WS056",
        question: "মানবদেহে ইনসুলিন প্রধানত কোন অঙ্গ থেকে নিঃসৃত হয়?",
        options: ["থাইরয়েড", "যকৃত", "অগ্ন্যাশয়", "কিডনি"],
        answer: 2,
        explanation: "ইনসুলিন অগ্ন্যাশয়ের ল্যাঙ্গারহ্যান্স দ্বীপিকার বিটা কোষ থেকে নিঃসৃত হয়। এটি রক্তে গ্লুকোজের মাত্রা নিয়ন্ত্রণে সাহায্য করে।",
        example: "খাবার খাওয়ার পর রক্তে গ্লুকোজ বেড়ে গেলে ইনসুলিন সেটি নিয়ন্ত্রণে ভূমিকা রাখে।"
    },
    {
        id: "WS057",
        question: "বিদ্যুৎ প্রবাহের SI একক কোনটি?",
        options: ["ভোল্ট", "ওহম", "ওয়াট", "অ্যাম্পিয়ার"],
        answer: 3,
        explanation: "বিদ্যুৎ প্রবাহের SI একক হলো অ্যাম্পিয়ার (Ampere)। এর প্রতীক A।",
        example: "কোনো বৈদ্যুতিক বর্তনীতে ২ অ্যাম্পিয়ার তড়িৎ প্রবাহিত হলে প্রবাহের মান 2 A লেখা হয়।"
    },
    {
        id: "WS058",
        question: "বৈদ্যুতিক বিভব পার্থক্যের SI একক কোনটি?",
        options: ["ভোল্ট", "অ্যাম্পিয়ার", "ওহম", "জুল"],
        answer: 0,
        explanation: "বৈদ্যুতিক বিভব পার্থক্যের SI একক হলো ভোল্ট (Volt)। এর প্রতীক V।",
        example: "একটি ব্যাটারির দুই প্রান্তের বিভব পার্থক্য ১.৫ ভোল্ট হতে পারে।"
    },
    {
        id: "WS059",
        question: "ক্ষমতার SI একক কোনটি?",
        options: ["জুল", "ওয়াট", "নিউটন", "পাসকেল"],
        answer: 1,
        explanation: "ক্ষমতার SI একক হলো ওয়াট (Watt)। এক ওয়াট ক্ষমতা মানে প্রতি সেকেন্ডে এক জুল শক্তি স্থানান্তর বা কাজ সম্পন্ন হওয়ার হার।",
        example: "৬০ ওয়াটের একটি বাল্বের ক্ষমতা 60 W হিসেবে প্রকাশ করা হয়।"
    },
    {
        id: "WS060",
        question: "বলের SI একক কোনটি?",
        options: ["জুল", "ওয়াট", "নিউটন", "কুলম্ব"],
        answer: 2,
        explanation: "বলের SI একক হলো নিউটন (Newton)। এর প্রতীক N। এক নিউটন বল এক কিলোগ্রাম ভরের বস্তুকে প্রতি সেকেন্ডে এক মিটার/সেকেন্ড হারে ত্বরণ দেয়।",
        example: "কোনো বস্তুকে ঠেলা বা টানার সময় তার ওপর বল প্রয়োগ করা হয়।"
    },
    {
        id: "SC151",
        question: "পরমাণুর কেন্দ্রীয় অংশকে কী বলা হয়?",
        options: ["নিউক্লিয়াস", "ইলেকট্রন", "অরবিট", "আয়ন"],
        answer: 0,
        explanation: "পরমাণুর কেন্দ্রীয় অংশকে নিউক্লিয়াস বলে। এতে প্রোটন এবং সাধারণত নিউট্রন থাকে। সাধারণ হাইড্রোজেনের নিউক্লিয়াসে শুধু একটি প্রোটন থাকে।",
        example: "পরমাণুর প্রায় সমস্ত ভর নিউক্লিয়াসে কেন্দ্রীভূত থাকে।"
    },
    {
        id: "SC152",
        question: "ইলেকট্রনের বৈদ্যুতিক আধান কেমন?",
        options: ["ধনাত্মক", "ঋণাত্মক", "নিরপেক্ষ", "পরিবর্তনশীল"],
        answer: 1,
        explanation: "ইলেকট্রন একটি ঋণাত্মক আধানযুক্ত মৌলিক কণা। এর আধানের মান প্রোটনের আধানের সমান, তবে চিহ্ন বিপরীত।",
        example: "একটি নিরপেক্ষ পরমাণুতে প্রোটন ও ইলেকট্রনের সংখ্যা সমান থাকে।"
    },
    {
        id: "SC153",
        question: "প্রোটনের বৈদ্যুতিক আধান কী?",
        options: ["ঋণাত্মক", "নিরপেক্ষ", "ধনাত্মক", "দ্বৈত"],
        answer: 2,
        explanation: "প্রোটন একটি ধনাত্মক আধানযুক্ত কণা, যা পরমাণুর নিউক্লিয়াসে থাকে। কোনো মৌলের প্রোটন সংখ্যাই তার পারমাণবিক সংখ্যা নির্ধারণ করে।",
        example: "হাইড্রোজেনের নিউক্লিয়াসে একটি প্রোটন থাকে, তাই এর পারমাণবিক সংখ্যা ১।"
    },
    {
        id: "SC154",
        question: "নিউট্রনের বৈদ্যুতিক আধান কেমন?",
        options: ["ধনাত্মক", "ঋণাত্মক", "দ্বৈত", "নিরপেক্ষ"],
        answer: 3,
        explanation: "নিউট্রনের কোনো নিট বৈদ্যুতিক আধান নেই। এটি প্রোটনের সঙ্গে অধিকাংশ পরমাণুর নিউক্লিয়াসে অবস্থান করে।",
        example: "সাধারণ হাইড্রোজেনের নিউক্লিয়াসে নিউট্রন নেই, কিন্তু হিলিয়ামের সাধারণ নিউক্লিয়াসে দুটি নিউট্রন থাকে।"
    },
    {
        id: "SC155",
        question: "পর্যায় সারণির প্রথম মৌল কোনটি?",
        options: ["হাইড্রোজেন", "হিলিয়াম", "অক্সিজেন", "কার্বন"],
        answer: 0,
        explanation: "হাইড্রোজেন পর্যায় সারণির প্রথম মৌল। এর পারমাণবিক সংখ্যা ১ এবং এটি সবচেয়ে হালকা মৌল।",
        example: "হাইড্রোজেনের রাসায়নিক প্রতীক H।"
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

if (quizScreen) quizScreen.style.display = "none";
if (resultScreen) resultScreen.style.display = "none";
if (feedbackElement) feedbackElement.style.display = "none";


// ============================================================
// SHOW FEEDBACK — explanation এবং example আলাদাভাবে
// ============================================================

function showFeedbackContent(q) {
    if (!exampleText) return;

    // পুরোনো কনটেন্ট মুছে ফেলুন
    exampleText.replaceChildren();

    const explanationLabel = document.createElement("strong");
    explanationLabel.textContent = "ব্যাখ্যা: ";

    const explanationText = document.createTextNode(
        q.explanation || "কোনো ব্যাখ্যা দেওয়া হয়নি।"
    );

    const exampleLabel = document.createElement("strong");
    exampleLabel.textContent = "উদাহরণ: ";

    const exampleValue = document.createTextNode(
        q.example || "কোনো উদাহরণ দেওয়া হয়নি।"
    );

    exampleText.appendChild(explanationLabel);
    exampleText.appendChild(explanationText);
    exampleText.appendChild(document.createElement("br"));
    exampleText.appendChild(document.createElement("br"));
    exampleText.appendChild(exampleLabel);
    exampleText.appendChild(exampleValue);
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

    if (questionNumber) {
        questionNumber.textContent = currentQuestion + 1;
    }

    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }

    if (progressBar) {
        progressBar.style.width =
            ((currentQuestion + 1) / quizData.length) * 100 + "%";
    }

    if (questionElement) {
        questionElement.textContent = q.question;
    }

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";

    if (exampleText) {
        exampleText.replaceChildren();
    }

    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "answer-option";
        button.type = "button";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const optionText = document.createElement("span");
        optionText.className = "option-text";
        optionText.textContent = option;

        button.appendChild(letter);
        button.appendChild(optionText);

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
    } else if (timerElement) {
        timerElement.textContent = "∞";
        timerElement.classList.remove("timer-danger");
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

    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".answer-option")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;

        if (clickedButton) {
            clickedButton.classList.add("correct");
        }

        playSound("correct");

        if (correctMessage) {
            correctMessage.textContent = "✓ সঠিক উত্তর!";
        }

        if (wrongMessage) {
            wrongMessage.textContent = "";
        }
    } else {
        if (clickedButton) {
            clickedButton.classList.add("wrong");
        }

        if (buttons[q.answer]) {
            buttons[q.answer].classList.add("correct");
        }

        playSound("wrong");

        if (wrongMessage) {
            wrongMessage.textContent = "✗ ভুল উত্তর!";
        }

        if (correctMessage) {
            correctMessage.textContent =
                "সঠিক উত্তর: " + q.options[q.answer];
        }
    }

    // Learning Mode-এ সঠিক উত্তরেও ব্যাখ্যা দেখাবে।
    // Exam Mode-এ উত্তর দেওয়ার পর ব্যাখ্যা দেখাবে।
    if (
        selectedMode === "learning" ||
        selectedMode === "exam"
    ) {
        if (feedbackElement) {
            feedbackElement.style.display = "block";
        }

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

    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".answer-option")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) {
        buttons[q.answer].classList.add("correct");
    }

    playSound("tryAgain");

    if (wrongMessage) {
        wrongMessage.textContent = "⏰ সময় শেষ!";
    }

    if (correctMessage) {
        correctMessage.textContent =
            "সঠিক উত্তর: " + q.options[q.answer];
    }

    if (feedbackElement) {
        feedbackElement.style.display = "block";
    }

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

    if (scoreElement) {
        scoreElement.textContent = `${score} / ${quizData.length}`;
    }

    if (percentageElement) {
        percentageElement.textContent = `${percentage}%`;
    }

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent =
                "🏆 অসাধারণ! আপনার প্রস্তুতি খুবই ভালো।";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent =
                "🌟 খুব ভালো! আরও একটু অনুশীলন করলে আরও ভালো করবেন।";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent =
                "👍 ভালো চেষ্টা! নিয়মিত অনুশীলন চালিয়ে যান।";
            playSound("complete");
        } else {
            resultMessage.textContent =
                "📚 আরও অনুশীলন করুন। পরবর্তী কুইজে আরও ভালো করবেন।";
            playSound("tryAgain");
        }
    }

    if (socialMessage) {
        socialMessage.style.display = "block";
    }
}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (
        FACEBOOK_POST_URL &&
        FACEBOOK_POST_URL !== "PASTE_YOUR_FACEBOOK_POST_URL_HERE"
    ) {
        window.location.href = FACEBOOK_POST_URL;
    } else {
        alert(
            "Facebook post link এখনো যোগ করা হয়নি।\n\n" +
            "script.js-এর FACEBOOK_POST_URL-এ " +
            "আপনার Facebook post link বসান।"
        );
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

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";

    if (statusElement) statusElement.textContent = "";
    if (socialMessage) socialMessage.style.display = "none";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    if (progressBar) progressBar.style.width = "0%";

    if (timerElement) {
        timerElement.textContent = "15";
        timerElement.classList.remove("timer-danger");
    }

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.replaceChildren();

    playSound("start");
}


// ============================================================
// ANSWER DISTRIBUTION AND DATA VALIDATION
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];
    const questionIds = new Set();
    let hasErrors = false;

    quizData.forEach(q => {
        if (questionIds.has(q.id)) {
            console.error("Duplicate question ID:", q.id);
            hasErrors = true;
        }
        questionIds.add(q.id);

        if (!Array.isArray(q.options) || q.options.length !== 4) {
            console.error(
                "Question must have exactly four options:",
                q.id
            );
            hasErrors = true;
            return;
        }

        if (
            !Number.isInteger(q.answer) ||
            q.answer < 0 ||
            q.answer >= q.options.length
        ) {
            console.error("Invalid answer index:", q.id);
            hasErrors = true;
        } else {
            distribution[q.answer]++;
        }

        if (!q.explanation || !q.example) {
            console.error(
                "Missing explanation or example:",
                q.id
            );
            hasErrors = true;
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );

    console.log("Total Questions:", quizData.length);

    if (distribution.some(count => count < 3)) {
        console.warn(
            "Warning: One or more answer positions have fewer than 3 correct answers."
        );
    }

    if (!hasErrors) {
        console.log("Quiz data validation completed without detected errors.");
    }
})();

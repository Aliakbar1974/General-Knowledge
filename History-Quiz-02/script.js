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

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122113857291435742&set=a.122102731923435742";


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
        id: "WH101",
        question: "প্রাচীন গ্রিসের সামরিক শক্তির জন্য কোন নগররাষ্ট্র বিখ্যাত ছিল?",
        options: [
            "এথেন্স",
            "স্পার্টা",
            "থিবস",
            "করিন্থ"
        ],
        answer: 1,
        explanation: "স্পার্টা প্রাচীন গ্রিসের একটি শক্তিশালী সামরিক নগররাষ্ট্র হিসেবে বিখ্যাত ছিল।",
        example: "Sparta was famous for its strong military tradition."
    },

    {
        id: "WH102",
        question: "আলেকজান্ডার দ্য গ্রেট কোন দেশের রাজা ছিলেন?",
        options: [
            "মিশর",
            "পারস্য",
            "মেসিডোনিয়া",
            "রোম"
        ],
        answer: 2,
        explanation: "আলেকজান্ডার দ্য গ্রেট প্রাচীন মেসিডোনিয়ার রাজা ছিলেন এবং বিশাল সাম্রাজ্য প্রতিষ্ঠা করেছিলেন।",
        example: "Alexander the Great was the king of Macedon."
    },

    {
        id: "WH103",
        question: "পারস্য সাম্রাজ্যের বিখ্যাত রাজা জেরক্সেস কোন দেশের শাসক ছিলেন?",
        options: [
            "পারস্য",
            "গ্রিস",
            "রোম",
            "মিশর"
        ],
        answer: 0,
        explanation: "জেরক্সেস প্রথম ছিলেন পারস্য সাম্রাজ্যের একজন বিখ্যাত রাজা।",
        example: "Xerxes I was a famous king of the Persian Empire."
    },

    {
        id: "WH104",
        question: "চীনের মহাপ্রাচীর নির্মাণের প্রধান উদ্দেশ্য কী ছিল?",
        options: [
            "বাণিজ্য সম্প্রসারণ",
            "বন্যা নিয়ন্ত্রণ",
            "ধর্মীয় অনুষ্ঠান",
            "উত্তরাঞ্চলের আক্রমণ প্রতিরোধ"
        ],
        answer: 3,
        explanation: "চীনের মহাপ্রাচীরের প্রধান উদ্দেশ্য ছিল উত্তর দিক থেকে আসা বিভিন্ন যাযাবর ও শত্রু গোষ্ঠীর আক্রমণ প্রতিরোধ করা।",
        example: "The Great Wall of China helped defend northern borders."
    },

    {
        id: "WH105",
        question: "চীনের প্রথম সম্রাট হিসেবে কে পরিচিত?",
        options: [
            "কনফুসিয়াস",
            "কিন শি হুয়াং",
            "সান ইয়াত-সেন",
            "হান উদি"
        ],
        answer: 1,
        explanation: "কিন শি হুয়াং চীনকে একীভূত করে প্রথম সম্রাট হিসেবে পরিচিত হন।",
        example: "Qin Shi Huang was the first emperor of a unified China."
    },

    {
        id: "WH106",
        question: "কনফুসিয়াস কোন দেশের দার্শনিক ছিলেন?",
        options: [
            "ভারত",
            "জাপান",
            "চীন",
            "কোরিয়া"
        ],
        answer: 2,
        explanation: "কনফুসিয়াস ছিলেন প্রাচীন চীনের একজন বিখ্যাত দার্শনিক ও চিন্তাবিদ।",
        example: "Confucius was a famous Chinese philosopher."
    },

    {
        id: "WH107",
        question: "মধ্যযুগে ক্রুসেড মূলত কোন দুটি ধর্মীয় বিশ্বের সংঘাতের সঙ্গে সম্পর্কিত ছিল?",
        options: [
            "খ্রিস্টান ও মুসলিম",
            "বৌদ্ধ ও হিন্দু",
            "ইহুদি ও বৌদ্ধ",
            "হিন্দু ও মুসলিম"
        ],
        answer: 0,
        explanation: "ক্রুসেড ছিল মধ্যযুগে ইউরোপীয় খ্রিস্টান শক্তি ও মুসলিম শক্তির মধ্যে সংঘটিত একাধিক ধর্মীয়-সামরিক অভিযান।",
        example: "The Crusades were connected with conflicts between Christian and Muslim powers."
    },

    {
        id: "WH108",
        question: "অটোমান সাম্রাজ্যের প্রতিষ্ঠাতা কে ছিলেন?",
        options: [
            "সুলেইমান",
            "দ্বিতীয় মেহমেদ",
            "বায়েজিদ",
            "উসমান প্রথম"
        ],
        answer: 3,
        explanation: "উসমান প্রথমের নাম থেকেই Ottoman বা অটোমান সাম্রাজ্যের নামের উৎপত্তি।",
        example: "Osman I founded the Ottoman dynasty."
    },

    {
        id: "WH109",
        question: "কনস্টান্টিনোপল অটোমানরা দখল করে কোন সালে?",
        options: [
            "১৪১৫",
            "১৪৫৩",
            "১৪৯২",
            "১৫১৭"
        ],
        answer: 1,
        explanation: "অটোমান সুলতান দ্বিতীয় মেহমেদ ১৪৫৩ সালে কনস্টান্টিনোপল দখল করেন।",
        example: "Constantinople was conquered by the Ottomans in 1453."
    },

    {
        id: "WH110",
        question: "কনস্টান্টিনোপল বিজয়ী অটোমান সুলতান কে ছিলেন?",
        options: [
            "সুলতান সুলেইমান",
            "উসমান প্রথম",
            "দ্বিতীয় মেহমেদ",
            "বায়েজিদ প্রথম"
        ],
        answer: 2,
        explanation: "সুলতান দ্বিতীয় মেহমেদ ১৪৫৩ সালে কনস্টান্টিনোপল জয় করেন।",
        example: "Mehmed II conquered Constantinople in 1453."
    },

    {
        id: "WH111",
        question: "ভাস্কো দা গামা সমুদ্রপথে ভারতে পৌঁছান কোন সালে?",
        options: [
            "১৪৯৮",
            "১৪৮৮",
            "১৫০২",
            "১৫১০"
        ],
        answer: 0,
        explanation: "ভাস্কো দা গামা ১৪৯৮ সালে আফ্রিকার কেপ অব গুড হোপ ঘুরে সমুদ্রপথে ভারতের কালিকটে পৌঁছান।",
        example: "Vasco da Gama reached India by sea in 1498."
    },

    {
        id: "WH112",
        question: "ভাস্কো দা গামা কোন দেশের নাবিক ছিলেন?",
        options: [
            "স্পেন",
            "ইতালি",
            "ফ্রান্স",
            "পর্তুগাল"
        ],
        answer: 3,
        explanation: "ভাস্কো দা গামা ছিলেন পর্তুগালের বিখ্যাত নাবিক ও অভিযাত্রী।",
        example: "Vasco da Gama was a Portuguese explorer."
    },

    {
        id: "WH113",
        question: "ক্রিস্টোফার কলম্বাস আমেরিকায় পৌঁছান কোন সালে?",
        options: [
            "১৪৮৮",
            "১৪৯২",
            "১৪৯৮",
            "১৫০৪"
        ],
        answer: 1,
        explanation: "ক্রিস্টোফার কলম্বাস ১৪৯২ সালে আটলান্টিক পাড়ি দিয়ে ক্যারিবীয় অঞ্চলে পৌঁছান।",
        example: "Christopher Columbus reached the Americas in 1492."
    },

    {
        id: "WH114",
        question: "মার্টিন লুথার কোন আন্দোলনের সঙ্গে যুক্ত ছিলেন?",
        options: [
            "শিল্পবিপ্লব",
            "জাতীয়তাবাদী আন্দোলন",
            "প্রোটেস্ট্যান্ট সংস্কার আন্দোলন",
            "সমাজতান্ত্রিক আন্দোলন"
        ],
        answer: 2,
        explanation: "মার্টিন লুথার ১৬শ শতকের প্রোটেস্ট্যান্ট সংস্কার আন্দোলনের অন্যতম প্রধান ব্যক্তিত্ব ছিলেন।",
        example: "Martin Luther was a key figure in the Protestant Reformation."
    },

    {
        id: "WH115",
        question: "আমেরিকার গৃহযুদ্ধের সময় যুক্তরাষ্ট্রের প্রেসিডেন্ট কে ছিলেন?",
        options: [
            "আব্রাহাম লিংকন",
            "জর্জ ওয়াশিংটন",
            "থমাস জেফারসন",
            "উড্রো উইলসন"
        ],
        answer: 0,
        explanation: "১৮৬১–১৮৬৫ সালের আমেরিকার গৃহযুদ্ধের সময় আব্রাহাম লিংকন যুক্তরাষ্ট্রের প্রেসিডেন্ট ছিলেন।",
        example: "Abraham Lincoln was the U.S. president during the Civil War."
    },

    {
        id: "WH116",
        question: "আমেরিকার গৃহযুদ্ধ প্রধানত কোন বিষয়কে কেন্দ্র করে সংঘটিত হয়েছিল?",
        options: [
            "ধর্মীয় বিরোধ",
            "উপনিবেশ বিস্তার",
            "বাণিজ্যিক বিরোধ",
            "দাসপ্রথা ও অঙ্গরাজ্যগুলোর অধিকার"
        ],
        answer: 3,
        explanation: "দাসপ্রথা ছিল আমেরিকার গৃহযুদ্ধের একটি প্রধান কারণ। অঙ্গরাজ্যগুলোর অধিকার ও কেন্দ্রীয় সরকারের ক্ষমতা নিয়েও গভীর বিরোধ ছিল।",
        example: "Slavery was a major cause of the American Civil War."
    },

    {
        id: "WH117",
        question: "প্রথম বিশ্বযুদ্ধের পর জার্মানির সঙ্গে কোন চুক্তি স্বাক্ষরিত হয়?",
        options: [
            "টর্ডেসিলাস চুক্তি",
            "ভার্সাই চুক্তি",
            "প্যারিস চুক্তি",
            "ভিয়েনা চুক্তি"
        ],
        answer: 1,
        explanation: "প্রথম বিশ্বযুদ্ধের পর ১৯১৯ সালে জার্মানির সঙ্গে ভার্সাই চুক্তি স্বাক্ষরিত হয়।",
        example: "Germany signed the Treaty of Versailles after World War I."
    },

    {
    id: "WH118",
    question: "রুশ সাম্রাজ্যের সম্রাটদের প্রচলিত উপাধি কী ছিল?",
    options: [
        "Kaiser",
        "Sultan",
        "Tsar",
        "Emperor"
    ],
    answer: 2,
    explanation: "রুশ সাম্রাজ্যের শাসকদের প্রচলিত উপাধি ছিল Tsar বা জার। দ্বিতীয় নিকোলাস ছিলেন রাশিয়ার শেষ Tsar।",
    example: "Nicholas II was the last Tsar of Russia."
},
    {
        id: "WH119",
        question: "দ্বিতীয় বিশ্বযুদ্ধ শুরু হয় কোন সালে?",
        options: [
            "১৯৩৯",
            "১৯৪০",
            "১৯৪১",
            "১৯৪২"
        ],
        answer: 0,
        explanation: "১৯৩৯ সালের ১ সেপ্টেম্বর জার্মানি পোল্যান্ড আক্রমণ করলে ইউরোপে দ্বিতীয় বিশ্বযুদ্ধ শুরু হয়।",
        example: "World War II began in 1939."
    },

    {
        id: "WH120",
        question: "দ্বিতীয় বিশ্বযুদ্ধের ইউরোপীয় যুদ্ধের সমাপ্তির সঙ্গে কোন ঘটনার সম্পর্ক রয়েছে?",
        options: [
            "জাপানের আত্মসমর্পণ",
            "নরম্যান্ডি অবতরণ",
            "বার্লিন প্রাচীর নির্মাণ",
            "জার্মানির আত্মসমর্পণ"
        ],
        answer: 3,
        explanation: "১৯৪৫ সালে নাৎসি জার্মানির আত্মসমর্পণের মাধ্যমে ইউরোপে দ্বিতীয় বিশ্বযুদ্ধের যুদ্ধপর্বের সমাপ্তি ঘটে।",
        example: "Germany's surrender ended the war in Europe in 1945."
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
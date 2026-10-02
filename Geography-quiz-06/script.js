// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 06
// World History
// 20 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122117346921435742&set=a.122102731923435742";


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
// MCQ BANK — PART 06
// Questions 1–20
// World Geography
// ============================================================


const quizData = [
    {
        id: 1,
        question: "পৃথিবীর বৃহত্তম মহাদেশ কোনটি?",
        options: ["এশিয়া", "আফ্রিকা", "ইউরোপ", "উত্তর আমেরিকা"],
        answer: 0,
        explanation: "এশিয়া পৃথিবীর বৃহত্তম মহাদেশ।",
        example: "এশিয়া মহাদেশে পৃথিবীর সবচেয়ে বেশি জনসংখ্যার দেশগুলোর অবস্থান।"
    },
    {
        id: 2,
        question: "পৃথিবীর বৃহত্তম মহাসাগর কোনটি?",
        options: ["আটলান্টিক", "প্রশান্ত", "ভারত", "আর্কটিক"],
        answer: 1,
        explanation: "প্রশান্ত মহাসাগর পৃথিবীর বৃহত্তম মহাসাগর।",
        example: "প্রশান্ত মহাসাগর এশিয়া, অস্ট্রেলিয়া ও আমেরিকা মহাদেশের মধ্যবর্তী বিশাল জলভাগ।"
    },
    {
        id: 3,
        question: "পৃথিবীর দীর্ঘতম নদী হিসেবে প্রচলিতভাবে কোনটি পরিচিত?",
        options: ["আমাজন", "মিসিসিপি", "নীল নদ", "ইয়াংসি"],
        answer: 2,
        explanation: "প্রচলিত সাধারণ জ্ঞান অনুযায়ী নীল নদকে পৃথিবীর দীর্ঘতম নদী হিসেবে উল্লেখ করা হয়।",
        example: "নীল নদ উত্তর আফ্রিকার গুরুত্বপূর্ণ নদী এবং মিশরের ভূগোলে এর বিশেষ গুরুত্ব রয়েছে।"
    },
    {
        id: 4,
        question: "আমাজন নদী কোন মহাদেশে অবস্থিত?",
        options: ["আফ্রিকা", "এশিয়া", "ইউরোপ", "দক্ষিণ আমেরিকা"],
        answer: 3,
        explanation: "আমাজন নদী দক্ষিণ আমেরিকা মহাদেশে অবস্থিত।",
        example: "আমাজন নদী দক্ষিণ আমেরিকার বিস্তীর্ণ অঞ্চলের মধ্য দিয়ে প্রবাহিত হয়েছে।"
    },
    {
        id: 5,
        question: "সাহারা মরুভূমি কোন মহাদেশে অবস্থিত?",
        options: ["আফ্রিকা", "এশিয়া", "অস্ট্রেলিয়া", "উত্তর আমেরিকা"],
        answer: 0,
        explanation: "সাহারা মরুভূমি আফ্রিকা মহাদেশে অবস্থিত।",
        example: "সাহারা উত্তর আফ্রিকার বিশাল অঞ্চলজুড়ে বিস্তৃত।"
    },
    {
        id: 6,
        question: "পৃথিবীর বৃহত্তম উষ্ণ মরুভূমি কোনটি?",
        options: ["গোবি", "সাহারা", "কালাহারি", "আরব মরুভূমি"],
        answer: 1,
        explanation: "সাহারা পৃথিবীর বৃহত্তম উষ্ণ মরুভূমি।",
        example: "সাহারা মরুভূমি উত্তর আফ্রিকার একটি বিশাল শুষ্ক অঞ্চল।"
    },
    {
        id: 7,
        question: "পৃথিবীর সর্বোচ্চ পর্বতশৃঙ্গ কোনটি?",
        options: ["K2", "কাঞ্চনজঙ্ঘা", "মাউন্ট এভারেস্ট", "মাকালু"],
        answer: 2,
        explanation: "মাউন্ট এভারেস্ট পৃথিবীর সর্বোচ্চ পর্বতশৃঙ্গ।",
        example: "মাউন্ট এভারেস্ট হিমালয় পর্বতমালায় অবস্থিত।"
    },
    {
        id: 8,
        question: "মাউন্ট এভারেস্ট কোন পর্বতমালায় অবস্থিত?",
        options: ["আন্দিজ", "আল্পস", "রকি", "হিমালয়"],
        answer: 3,
        explanation: "মাউন্ট এভারেস্ট হিমালয় পর্বতমালায় অবস্থিত।",
        example: "হিমালয় এশিয়ার একটি বিশাল পর্বতশ্রেণি।"
    },
    {
        id: 9,
        question: "আন্দিজ পর্বতমালা কোন মহাদেশে অবস্থিত?",
        options: ["দক্ষিণ আমেরিকা", "উত্তর আমেরিকা", "ইউরোপ", "এশিয়া"],
        answer: 0,
        explanation: "আন্দিজ পর্বতমালা দক্ষিণ আমেরিকা মহাদেশে অবস্থিত।",
        example: "আন্দিজ পর্বতমালা দক্ষিণ আমেরিকার পশ্চিম অংশ বরাবর বিস্তৃত।"
    },
    {
        id: 10,
        question: "বিশ্বের বৃহত্তম দ্বীপ কোনটি?",
        options: ["বোর্নিও", "গ্রিনল্যান্ড", "মাদাগাস্কার", "নিউ গিনি"],
        answer: 1,
        explanation: "গ্রিনল্যান্ড বিশ্বের বৃহত্তম দ্বীপ।",
        example: "গ্রিনল্যান্ড উত্তর আটলান্টিক ও আর্কটিক অঞ্চলের মধ্যে অবস্থিত।"
    },
    {
        id: 11,
        question: "জিব্রাল্টার প্রণালী কোন দুটি জলভাগকে যুক্ত করে?",
        options: [
            "ভারত মহাসাগর ও প্রশান্ত মহাসাগর",
            "কৃষ্ণসাগর ও ভূমধ্যসাগর",
            "আটলান্টিক মহাসাগর ও ভূমধ্যসাগর",
            "লোহিত সাগর ও আরব সাগর"
        ],
        answer: 2,
        explanation: "জিব্রাল্টার প্রণালী আটলান্টিক মহাসাগর ও ভূমধ্যসাগরকে যুক্ত করে।",
        example: "জিব্রাল্টার প্রণালী ইউরোপ ও আফ্রিকার মধ্যবর্তী অঞ্চলে অবস্থিত।"
    },
    {
        id: 12,
        question: "সুয়েজ খাল কোন দুটি জলভাগকে সংযুক্ত করেছে?",
        options: [
            "ভূমধ্যসাগর ও লোহিত সাগর",
            "কৃষ্ণসাগর ও কাস্পিয়ান সাগর",
            "আরব সাগর ও বঙ্গোপসাগর",
            "প্রশান্ত ও আটলান্টিক"
        ],
        answer: 0,
        explanation: "সুয়েজ খাল ভূমধ্যসাগর ও লোহিত সাগরকে সংযুক্ত করেছে।",
        example: "সুয়েজ খাল ইউরোপ ও এশিয়ার মধ্যে গুরুত্বপূর্ণ নৌপথ হিসেবে ব্যবহৃত হয়।"
    },
    {
        id: 13,
        question: "পানামা খাল কোন দুটি মহাসাগরকে যুক্ত করে?",
        options: [
            "ভারত ও প্রশান্ত",
            "আটলান্টিক ও প্রশান্ত",
            "আর্কটিক ও আটলান্টিক",
            "ভারত ও আটলান্টিক"
        ],
        answer: 1,
        explanation: "পানামা খাল আটলান্টিক ও প্রশান্ত মহাসাগরকে সংযুক্ত করে।",
        example: "পানামা খাল মধ্য আমেরিকার পানামায় অবস্থিত।"
    },
    {
        id: 14,
        question: "আয়তনে বিশ্বের বৃহত্তম দেশ কোনটি?",
        options: ["কানাডা", "চীন", "যুক্তরাষ্ট্র", "রাশিয়া"],
        answer: 3,
        explanation: "আয়তনে রাশিয়া বিশ্বের বৃহত্তম দেশ।",
        example: "রাশিয়ার ভূখণ্ড ইউরোপ ও এশিয়া—দুই মহাদেশেই বিস্তৃত।"
    },
    {
        id: 15,
        question: "বিশ্বের ক্ষুদ্রতম স্বাধীন রাষ্ট্র কোনটি?",
        options: ["মোনাকো", "সান মারিনো", "ভ্যাটিকান সিটি", "লিচেনস্টাইন"],
        answer: 2,
        explanation: "ভ্যাটিকান সিটি বিশ্বের ক্ষুদ্রতম স্বাধীন রাষ্ট্র।",
        example: "ভ্যাটিকান সিটি ইতালির রাজধানী রোমের ভেতরে অবস্থিত।"
    },
    {
        id: 16,
        question: "বিশ্বের সবচেয়ে গভীর মহাসাগরীয় খাদ কোনটি?",
        options: ["টোঙ্গা ট্রেঞ্চ", "মারিয়ানা ট্রেঞ্চ", "জাভা ট্রেঞ্চ", "পেরু-চিলি ট্রেঞ্চ"],
        answer: 1,
        explanation: "মারিয়ানা ট্রেঞ্চ বিশ্বের সবচেয়ে গভীর মহাসাগরীয় খাদ।",
        example: "মারিয়ানা ট্রেঞ্চ পশ্চিম প্রশান্ত মহাসাগরে অবস্থিত।"
    },
    {
        id: 17,
        question: "মৃত সাগর কোন দুই অঞ্চলের মধ্যবর্তী এলাকায় অবস্থিত?",
        options: ["ভারত ও পাকিস্তান", "মিশর ও লিবিয়া", "ইসরায়েল ও জর্ডান", "তুরস্ক ও সিরিয়া"],
        answer: 2,
        explanation: "মৃত সাগর ইসরায়েল ও জর্ডানের মধ্যবর্তী অঞ্চলে অবস্থিত।",
        example: "মৃত সাগর অত্যন্ত লবণাক্ত জলরাশির জন্য পরিচিত।"
    },
    {
        id: 18,
        question: "আয়তনে বিশ্বের বৃহত্তম স্বাদুপানির হ্রদ কোনটি?",
        options: ["লেক সুপিরিয়র", "লেক ভিক্টোরিয়া", "লেক টাঙ্গানিকা", "বৈকাল হ্রদ"],
        answer: 0,
        explanation: "আয়তনের দিক থেকে লেক সুপিরিয়র বিশ্বের বৃহত্তম স্বাদুপানির হ্রদ।",
        example: "লেক সুপিরিয়র উত্তর আমেরিকার গ্রেট লেকস অঞ্চলে অবস্থিত।"
    },
    {
        id: 19,
        question: "বিশ্বের গভীরতম হ্রদ কোনটি?",
        options: ["লেক সুপিরিয়র", "ভিক্টোরিয়া", "টিটিকাকা", "বৈকাল হ্রদ"],
        answer: 3,
        explanation: "বৈকাল হ্রদ বিশ্বের গভীরতম হ্রদ।",
        example: "বৈকাল হ্রদ রাশিয়ার সাইবেরিয়া অঞ্চলে অবস্থিত।"
    },
    {
        id: 20,
        question: "কাস্পিয়ান সাগর প্রকৃতপক্ষে কী?",
        options: ["মহাসাগরের অংশ", "বিশ্বের বৃহত্তম হ্রদ", "নদীর মোহনা", "উপসাগর"],
        answer: 1,
        explanation: "কাস্পিয়ান সাগর প্রকৃতপক্ষে বিশ্বের বৃহত্তম হ্রদ হিসেবে বিবেচিত।",
        example: "কাস্পিয়ান সাগর ইউরোপ ও এশিয়ার মধ্যবর্তী অঞ্চলে অবস্থিত।"
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
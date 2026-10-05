// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 07
// World History
// 20 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122118065529435742&set=a.122102731923435742";


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
// MCQ BANK — PART 07
// Questions 1–20
// World Geography
// ============================================================


const quizData = [
  {
    id: "GEO021",
    question: "ভিক্টোরিয়া হ্রদ কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "ইউরোপ", "আফ্রিকা", "দক্ষিণ আমেরিকা"],
    answer: 2,
    explanation: "ভিক্টোরিয়া হ্রদ আফ্রিকা মহাদেশে অবস্থিত। এটি আফ্রিকার বৃহত্তম হ্রদ এবং বিশ্বের অন্যতম বৃহৎ মিঠাপানির হ্রদ।",
    example: "উদাহরণ: ভিক্টোরিয়া হ্রদ উগান্ডা, কেনিয়া ও তানজানিয়ার সীমান্তবর্তী অঞ্চলে অবস্থিত।"
  },

  {
    id: "GEO022",
    question: "নীল নদের প্রধান দুটি শাখার একটি হলো—",
    options: ["শ্বেত নীল", "কালো নীল", "লাল নীল", "হলুদ নীল"],
    answer: 0,
    explanation: "নীল নদের দুটি প্রধান উপনদী হলো শ্বেত নীল ও নীল নীল (Blue Nile)।",
    example: "উদাহরণ: শ্বেত নীল ও নীল নীল সুদানের রাজধানী খার্তুমে মিলিত হয়ে নীল নদ গঠন করেছে।"
  },

  {
    id: "GEO023",
    question: "দানিয়ুব নদী কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "আফ্রিকা", "ইউরোপ", "উত্তর আমেরিকা"],
    answer: 2,
    explanation: "দানিয়ুব নদী ইউরোপ মহাদেশের একটি গুরুত্বপূর্ণ নদী।",
    example: "উদাহরণ: দানিয়ুব নদী ইউরোপের একাধিক দেশের মধ্য দিয়ে প্রবাহিত হয়েছে।"
  },

  {
    id: "GEO024",
    question: "রাইন নদী কোন সাগরে পতিত হয়?",
    options: ["বাল্টিক সাগর", "উত্তর সাগর", "ভূমধ্যসাগর", "কৃষ্ণসাগর"],
    answer: 1,
    explanation: "রাইন নদী জার্মানি ও নেদারল্যান্ডসের মধ্য দিয়ে প্রবাহিত হয়ে উত্তর সাগরে পতিত হয়েছে।",
    example: "উদাহরণ: রাইন নদী ইউরোপের অন্যতম গুরুত্বপূর্ণ বাণিজ্যিক জলপথ।"
  },

  {
    id: "GEO025",
    question: "বসফরাস প্রণালী কোন দুটি সাগরকে সংযুক্ত করে?",
    options: ["ভূমধ্যসাগর ও লোহিত সাগর", "আরব সাগর ও বঙ্গোপসাগর", "কৃষ্ণসাগর ও মারমারা সাগর", "কাস্পিয়ান ও কৃষ্ণসাগর"],
    answer: 2,
    explanation: "বসফরাস প্রণালী কৃষ্ণসাগরকে মারমারা সাগরের সঙ্গে সংযুক্ত করেছে।",
    example: "উদাহরণ: বসফরাস প্রণালী তুরস্কের ইস্তাম্বুল শহরের মধ্য দিয়ে প্রবাহিত।"
  },

  {
    id: "GEO026",
    question: "বেরিং প্রণালী কোন দুটি ভূখণ্ডকে পৃথক করেছে?",
    options: ["ইউরোপ ও আফ্রিকা", "এশিয়া ও উত্তর আমেরিকা", "এশিয়া ও অস্ট্রেলিয়া", "আফ্রিকা ও ইউরোপ"],
    answer: 1,
    explanation: "বেরিং প্রণালী এশিয়া মহাদেশের রাশিয়া ও উত্তর আমেরিকার আলাস্কাকে পৃথক করেছে।",
    example: "উদাহরণ: বেরিং প্রণালীর এক পাশে রাশিয়া এবং অন্য পাশে যুক্তরাষ্ট্রের আলাস্কা।"
  },

  {
    id: "GEO027",
    question: "মালাক্কা প্রণালী কোন দুটি ভূখণ্ডের মধ্যবর্তী?",
    options: ["ভারত ও শ্রীলঙ্কা", "আরব ও আফ্রিকা", "মালয় উপদ্বীপ ও সুমাত্রা", "জাপান ও কোরিয়া"],
    answer: 2,
    explanation: "মালাক্কা প্রণালী মালয় উপদ্বীপ ও ইন্দোনেশিয়ার সুমাত্রা দ্বীপের মধ্যবর্তী জলপথ।",
    example: "উদাহরণ: মালাক্কা প্রণালী আন্তর্জাতিক বাণিজ্যের একটি গুরুত্বপূর্ণ সমুদ্রপথ।"
  },

  {
    id: "GEO028",
    question: "ফুজি পর্বত কোন দেশে অবস্থিত?",
    options: ["চীন", "জাপান", "দক্ষিণ কোরিয়া", "ফিলিপাইন"],
    answer: 1,
    explanation: "ফুজি পর্বত জাপানের সর্বোচ্চ পর্বত এবং একটি বিখ্যাত আগ্নেয়গিরি।",
    example: "উদাহরণ: ফুজি পর্বত জাপানের হোনশু দ্বীপে অবস্থিত।"
  },

  {
    id: "GEO029",
    question: "আল্পস পর্বতমালা প্রধানত কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "আফ্রিকা", "ইউরোপ", "উত্তর আমেরিকা"],
    answer: 2,
    explanation: "আল্পস পর্বতমালা ইউরোপ মহাদেশে অবস্থিত।",
    example: "উদাহরণ: আল্পস পর্বতমালা ফ্রান্স, সুইজারল্যান্ড, ইতালি, অস্ট্রিয়া ও অন্যান্য দেশে বিস্তৃত।"
  },

  {
    id: "GEO030",
    question: "রকি পর্বতমালা প্রধানত কোন মহাদেশে অবস্থিত?",
    options: ["উত্তর আমেরিকা", "দক্ষিণ আমেরিকা", "ইউরোপ", "এশিয়া"],
    answer: 0,
    explanation: "রকি পর্বতমালা উত্তর আমেরিকার পশ্চিমাঞ্চলে অবস্থিত।",
    example: "উদাহরণ: রকি পর্বতমালা কানাডা ও যুক্তরাষ্ট্রের মধ্য দিয়ে বিস্তৃত।"
  },

  {
    id: "GEO031",
    question: "আতাকামা মরুভূমি কোন দেশে প্রধানত অবস্থিত?",
    options: ["পেরু", "ব্রাজিল", "আর্জেন্টিনা", "চিলি"],
    answer: 3,
    explanation: "আতাকামা মরুভূমি প্রধানত চিলির উত্তরাঞ্চলে অবস্থিত। এটি পৃথিবীর অন্যতম শুষ্ক মরুভূমি।",
    example: "উদাহরণ: আতাকামা মরুভূমি দক্ষিণ আমেরিকার প্রশান্ত মহাসাগরীয় উপকূলের কাছে অবস্থিত।"
  },

  {
    id: "GEO032",
    question: "গোবি মরুভূমি কোন দুটি দেশের মধ্যে বিস্তৃত?",
    options: ["ভারত ও পাকিস্তান", "মঙ্গোলিয়া ও চীন", "ইরান ও ইরাক", "তুরস্ক ও সিরিয়া"],
    answer: 1,
    explanation: "গোবি মরুভূমি মঙ্গোলিয়া ও চীনের উত্তরাঞ্চলে বিস্তৃত।",
    example: "উদাহরণ: গোবি মরুভূমি এশিয়ার একটি বৃহৎ শীতল মরুভূমি।"
  },

  {
    id: "GEO033",
    question: "মাদাগাস্কার কোন মহাসাগরে অবস্থিত?",
    options: ["আটলান্টিক", "প্রশান্ত", "ভারত মহাসাগর", "আর্কটিক"],
    answer: 2,
    explanation: "মাদাগাস্কার আফ্রিকার পূর্ব উপকূলের কাছে ভারত মহাসাগরে অবস্থিত একটি বৃহৎ দ্বীপদেশ।",
    example: "উদাহরণ: মাদাগাস্কার আফ্রিকা মহাদেশের দক্ষিণ-পূর্ব উপকূলের কাছে অবস্থিত।"
  },

  {
    id: "GEO034",
    question: "জাপানের রাজধানী কোনটি?",
    options: ["টোকিও", "কিয়োটো", "ওসাকা", "হিরোশিমা"],
    answer: 0,
    explanation: "টোকিও জাপানের রাজধানী এবং দেশের অন্যতম প্রধান রাজনৈতিক ও অর্থনৈতিক কেন্দ্র।",
    example: "উদাহরণ: জাপানের জাতীয় সংসদ ও প্রধান সরকারি প্রতিষ্ঠানগুলোর অনেকগুলো টোকিওতে অবস্থিত।"
  },

  {
    id: "GEO035",
    question: "আফ্রিকা ও ইউরোপের মধ্যে কোন সাগর অবস্থিত?",
    options: ["ক্যারিবিয়ান সাগর", "ভূমধ্যসাগর", "আরব সাগর", "বাল্টিক সাগর"],
    answer: 1,
    explanation: "ভূমধ্যসাগর আফ্রিকা ও ইউরোপ মহাদেশের মধ্যবর্তী গুরুত্বপূর্ণ জলভাগ।",
    example: "উদাহরণ: ভূমধ্যসাগরের উত্তর দিকে ইউরোপ এবং দক্ষিণ দিকে আফ্রিকা অবস্থিত।"
  },

  {
    id: "GEO036",
    question: "হর্ন অব আফ্রিকায় অবস্থিত দেশ কোনটি?",
    options: ["ইথিওপিয়া", "ঘানা", "নাইজেরিয়া", "সেনেগাল"],
    answer: 0,
    explanation: "ইথিওপিয়া হর্ন অব আফ্রিকা অঞ্চলের একটি গুরুত্বপূর্ণ দেশ।",
    example: "উদাহরণ: হর্ন অব আফ্রিকা অঞ্চলের অন্যান্য দেশগুলোর মধ্যে সোমালিয়া, জিবুতি ও ইরিত্রিয়া রয়েছে।"
  },

  {
    id: "GEO037",
    question: "নীল নদের উৎসের সঙ্গে কোন হ্রদের নাম বিশেষভাবে যুক্ত?",
    options: ["লেক ভিক্টোরিয়া", "লেক সুপিরিয়র", "লেক টিটিকাকা", "লেক বালখাশ"],
    answer: 0,
    explanation: "নীল নদের প্রধান উৎসধারার সঙ্গে লেক ভিক্টোরিয়ার নাম বিশেষভাবে যুক্ত।",
    example: "উদাহরণ: লেক ভিক্টোরিয়া থেকে বের হওয়া পানি শ্বেত নীল নদের প্রবাহের সঙ্গে সম্পর্কিত।"
  },

  {
    id: "GEO038",
    question: "ভলগা নদী কোন সাগরে পতিত হয়?",
    options: ["কৃষ্ণসাগর", "কাস্পিয়ান সাগর", "বাল্টিক সাগর", "উত্তর সাগর"],
    answer: 1,
    explanation: "ভলগা নদী রাশিয়ার মধ্য দিয়ে প্রবাহিত হয়ে কাস্পিয়ান সাগরে পতিত হয়েছে।",
    example: "উদাহরণ: ভলগা ইউরোপের দীর্ঘতম নদী এবং রাশিয়ার একটি গুরুত্বপূর্ণ নদী।"
  },

  {
    id: "GEO039",
    question: "ইউরোপের দীর্ঘতম নদী কোনটি?",
    options: ["দানিয়ুব", "রাইন", "ভলগা", "সেন"],
    answer: 2,
    explanation: "ভলগা নদী ইউরোপ মহাদেশের দীর্ঘতম নদী।",
    example: "উদাহরণ: ভলগা নদী রাশিয়ার ভেতর দিয়ে প্রবাহিত হয়ে কাস্পিয়ান সাগরে পতিত হয়েছে।"
  },

  {
    id: "GEO040",
    question: "মাউন্ট কিলিমাঞ্জারো কোন দেশে অবস্থিত?",
    options: ["কেনিয়া", "তানজানিয়া", "ইথিওপিয়া", "উগান্ডা"],
    answer: 1,
    explanation: "মাউন্ট কিলিমাঞ্জারো তানজানিয়ায় অবস্থিত এবং এটি আফ্রিকার সর্বোচ্চ পর্বতশৃঙ্গ।",
    example: "উদাহরণ: কিলিমাঞ্জারোর সর্বোচ্চ চূড়া উহুরু পিক নামে পরিচিত।"
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
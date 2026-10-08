// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 08
// Geography
// 20 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122118739821435742&set=a.122102731923435742";


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
// MCQ BANK — PART 08
// Questions 20
// World Geography
// ============================================================


const quizData = [
  {
    id: "GEO041",
    question: "নীল নদ কোন সাগরে পতিত হয়েছে?",
    options: ["লোহিত সাগর", "আরব সাগর", "ভূমধ্যসাগর", "কৃষ্ণসাগর"],
    answer: 2,
    explanation: "নীল নদ মিশরের মধ্য দিয়ে প্রবাহিত হয়ে ভূমধ্যসাগরে পতিত হয়েছে।",
    example: "উদাহরণ: নীল নদ মিশরের কৃষি ও সভ্যতার বিকাশে গুরুত্বপূর্ণ ভূমিকা রেখেছে।"
  },
  {
    id: "GEO042",
    question: "আয়তনের দিক থেকে আফ্রিকার বৃহত্তম দেশ কোনটি?",
    options: ["আলজেরিয়া", "সুদান", "লিবিয়া", "চাদ"],
    answer: 0,
    explanation: "আলজেরিয়া আয়তনের দিক থেকে আফ্রিকার বৃহত্তম দেশ।",
    example: "উদাহরণ: আলজেরিয়ার বিশাল অংশ সাহারা মরুভূমির অন্তর্ভুক্ত।"
  },
  {
    id: "GEO043",
    question: "আফ্রিকার সবচেয়ে জনবহুল দেশ কোনটি?",
    options: ["মিশর", "নাইজেরিয়া", "দক্ষিণ আফ্রিকা", "কেনিয়া"],
    answer: 1,
    explanation: "নাইজেরিয়া আফ্রিকা মহাদেশের সবচেয়ে জনবহুল দেশ।",
    example: "উদাহরণ: নাইজেরিয়ার বৃহৎ জনসংখ্যা প্রধানত বিভিন্ন শহর ও দক্ষিণাঞ্চলে কেন্দ্রীভূত।"
  },
  {
    id: "GEO044",
    question: "দক্ষিণ আমেরিকার সবচেয়ে বড় দেশ কোনটি?",
    options: ["আর্জেন্টিনা", "পেরু", "কলম্বিয়া", "ব্রাজিল"],
    answer: 3,
    explanation: "আয়তনের দিক থেকে ব্রাজিল দক্ষিণ আমেরিকার সবচেয়ে বড় দেশ।",
    example: "উদাহরণ: ব্রাজিল দক্ষিণ আমেরিকার প্রায় অর্ধেকের কাছাকাছি ভূখণ্ড জুড়ে বিস্তৃত।"
  },
  {
    id: "GEO045",
    question: "ইউরোপের ক্ষুদ্রতম দেশগুলোর একটি মোনাকো কোন সাগরের তীরে অবস্থিত?",
    options: ["ভূমধ্যসাগর", "উত্তর সাগর", "বাল্টিক সাগর", "কৃষ্ণসাগর"],
    answer: 0,
    explanation: "মোনাকো ভূমধ্যসাগরের তীরে ফ্রেঞ্চ রিভিয়েরা অঞ্চলে অবস্থিত।",
    example: "উদাহরণ: মোনাকো ফ্রান্সের দক্ষিণ উপকূলের কাছে ভূমধ্যসাগরের তীরে অবস্থিত।"
  },
  {
    id: "GEO046",
    question: "আইসল্যান্ড কোন মহাসাগরের উত্তর অংশে অবস্থিত?",
    options: ["প্রশান্ত মহাসাগর", "ভারত মহাসাগর", "আটলান্টিক মহাসাগর", "আর্কটিক মহাসাগর"],
    answer: 2,
    explanation: "আইসল্যান্ড উত্তর আটলান্টিক মহাসাগরে অবস্থিত একটি দ্বীপরাষ্ট্র।",
    example: "উদাহরণ: আইসল্যান্ড ইউরোপ ও গ্রিনল্যান্ডের মধ্যবর্তী উত্তর আটলান্টিক অঞ্চলে অবস্থিত।"
  },
  {
    id: "GEO047",
    question: "ফিলিপাইন কোন ধরনের রাষ্ট্র?",
    options: ["স্থলবেষ্টিত", "উপদ্বীপ রাষ্ট্র", "মরুভূমি রাষ্ট্র", "দ্বীপপুঞ্জ রাষ্ট্র"],
    answer: 3,
    explanation: "ফিলিপাইন একটি দ্বীপপুঞ্জ রাষ্ট্র, যা বহু দ্বীপ নিয়ে গঠিত।",
    example: "উদাহরণ: ফিলিপাইনের হাজার হাজার দ্বীপ পশ্চিম প্রশান্ত মহাসাগরীয় অঞ্চলে বিস্তৃত।"
  },
  {
    id: "GEO048",
    question: "ইন্দোনেশিয়া কোন মহাদেশীয় অঞ্চলের দেশ?",
    options: ["মধ্য এশিয়া", "দক্ষিণ-পূর্ব এশিয়া", "পশ্চিম এশিয়া", "উত্তর এশিয়া"],
    answer: 1,
    explanation: "ইন্দোনেশিয়া দক্ষিণ-পূর্ব এশিয়ার একটি বৃহৎ দ্বীপপুঞ্জ রাষ্ট্র।",
    example: "উদাহরণ: ইন্দোনেশিয়া এশিয়া ও অস্ট্রেলিয়ার মধ্যবর্তী সামুদ্রিক অঞ্চলে অবস্থিত।"
  },
  {
    id: "GEO049",
    question: "তুরস্কের ভৌগোলিক অবস্থানের বিশেষ বৈশিষ্ট্য কী?",
    options: [
      "সম্পূর্ণ ইউরোপে অবস্থিত",
      "সম্পূর্ণ এশিয়ায় অবস্থিত",
      "ইউরোপ ও এশিয়া উভয় মহাদেশে বিস্তৃত",
      "তিন মহাদেশে বিস্তৃত"
    ],
    answer: 2,
    explanation: "তুরস্কের ভূখণ্ড ইউরোপ ও এশিয়া উভয় মহাদেশে বিস্তৃত।",
    example: "উদাহরণ: বসফরাস প্রণালী তুরস্কের ইউরোপীয় ও এশীয় অংশকে পৃথক করেছে।"
  },
  {
    id: "GEO050",
    question: "আফ্রিকার বৃহত্তম দ্বীপ কোনটি?",
    options: ["মাদাগাস্কার", "সিসিলি", "মরিশাস", "জাঞ্জিবার"],
    answer: 0,
    explanation: "মাদাগাস্কার আফ্রিকার উপকূলের কাছে অবস্থিত এবং আফ্রিকার বৃহত্তম দ্বীপ।",
    example: "উদাহরণ: মাদাগাস্কার আফ্রিকার পূর্ব উপকূলের কাছে ভারত মহাসাগরে অবস্থিত।"
  },
  {
    id: "GEO051",
    question: "আরব উপদ্বীপের সবচেয়ে বড় দেশ কোনটি?",
    options: ["ইয়েমেন", "সৌদি আরব", "ওমান", "সংযুক্ত আরব আমিরাত"],
    answer: 1,
    explanation: "সৌদি আরব আয়তনের দিক থেকে আরব উপদ্বীপের সবচেয়ে বড় দেশ।",
    example: "উদাহরণ: সৌদি আরব আরব উপদ্বীপের বৃহৎ অংশজুড়ে বিস্তৃত।"
  },
  {
    id: "GEO052",
    question: "বিশ্বের বৃহত্তম উপদ্বীপ কোনটি?",
    options: ["ভারতীয় উপদ্বীপ", "স্ক্যান্ডিনেভীয় উপদ্বীপ", "আইবেরীয় উপদ্বীপ", "আরব উপদ্বীপ"],
    answer: 3,
    explanation: "আরব উপদ্বীপ বিশ্বের বৃহত্তম উপদ্বীপ হিসেবে পরিচিত।",
    example: "উদাহরণ: আরব উপদ্বীপের অধিকাংশ অঞ্চল মরুভূমি ও শুষ্ক জলবায়ুর অন্তর্ভুক্ত।"
  },
  {
    id: "GEO053",
    question: "স্ক্যান্ডিনেভীয় উপদ্বীপের প্রধান দেশ দুটি কোনগুলো?",
    options: ["স্পেন ও পর্তুগাল", "নরওয়ে ও সুইডেন", "ফ্রান্স ও জার্মানি", "ইতালি ও অস্ট্রিয়া"],
    answer: 1,
    explanation: "স্ক্যান্ডিনেভীয় উপদ্বীপের প্রধান দেশ হলো নরওয়ে ও সুইডেন।",
    example: "উদাহরণ: নরওয়ে ও সুইডেন উত্তর ইউরোপের স্ক্যান্ডিনেভীয় অঞ্চলে অবস্থিত।"
  },
  {
    id: "GEO054",
    question: "ইউরোপের দীর্ঘতম পর্বতমালাগুলোর একটি আল্পস কোন কোন অঞ্চলের মধ্য দিয়ে বিস্তৃত?",
    options: [
      "কেবল জার্মানি",
      "কেবল ফ্রান্স",
      "ইউরোপের কয়েকটি দেশের মধ্য দিয়ে",
      "কেবল ইতালি"
    ],
    answer: 2,
    explanation: "আল্পস পর্বতমালা ইউরোপের কয়েকটি দেশের মধ্য দিয়ে বিস্তৃত হয়েছে।",
    example: "উদাহরণ: আল্পস ফ্রান্স, সুইজারল্যান্ড, ইতালি, অস্ট্রিয়া ও অন্যান্য দেশে বিস্তৃত।"
  },
  {
    id: "GEO055",
    question: "কানাডার রাজধানী কোনটি?",
    options: ["টরন্টো", "অটোয়া", "ভ্যাঙ্কুভার", "মন্ট্রিয়ল"],
    answer: 1,
    explanation: "অটোয়া কানাডার রাজধানী। টরন্টো কানাডার বৃহত্তম শহর হলেও রাজধানী নয়।",
    example: "উদাহরণ: কানাডার পার্লামেন্ট ও কেন্দ্রীয় সরকারি প্রতিষ্ঠানগুলোর প্রধান কার্যালয় অটোয়ায় অবস্থিত।"
  },
  {
    id: "GEO056",
    question: "ব্রাজিলের রাজধানী কোনটি?",
    options: ["রিও ডি জেনেরিও", "সাও পাওলো", "সালভাদর", "ব্রাসিলিয়া"],
    answer: 3,
    explanation: "ব্রাসিলিয়া ব্রাজিলের রাজধানী। ১৯৬০ সালে রাজধানী রিও ডি জেনেরিও থেকে ব্রাসিলিয়ায় স্থানান্তরিত হয়।",
    example: "উদাহরণ: ব্রাসিলিয়া ব্রাজিলের কেন্দ্রীয় অঞ্চলে অবস্থিত পরিকল্পিত একটি শহর।"
  },
  {
    id: "GEO057",
    question: "তুরস্কের রাজধানী কোনটি?",
    options: ["ইস্তাম্বুল", "আঙ্কারা", "ইজমির", "বুরসা"],
    answer: 1,
    explanation: "আঙ্কারা তুরস্কের রাজধানী। ইস্তাম্বুল দেশটির বৃহত্তম ও অন্যতম গুরুত্বপূর্ণ শহর।",
    example: "উদাহরণ: আঙ্কারা তুরস্কের রাজনৈতিক ও প্রশাসনিক কেন্দ্র।"
  },
  {
    id: "GEO058",
    question: "সুইজারল্যান্ডের রাজধানী কোনটি?",
    options: ["জুরিখ", "জেনেভা", "বার্ন", "লুসার্ন"],
    answer: 2,
    explanation: "বার্ন সুইজারল্যান্ডের ফেডারেল শহর এবং কার্যত দেশটির রাজধানী।",
    example: "উদাহরণ: সুইজারল্যান্ডের ফেডারেল সরকার ও পার্লামেন্ট বার্নে অবস্থিত।"
  },
  {
    id: "GEO059",
    question: "নিউজিল্যান্ডের রাজধানী কোনটি?",
    options: ["অকল্যান্ড", "ক্রাইস্টচার্চ", "হ্যামিল্টন", "ওয়েলিংটন"],
    answer: 3,
    explanation: "ওয়েলিংটন নিউজিল্যান্ডের রাজধানী। অকল্যান্ড দেশটির বৃহত্তম শহর।",
    example: "উদাহরণ: ওয়েলিংটন উত্তর দ্বীপের দক্ষিণ প্রান্তের কাছে অবস্থিত।"
  },
  {
    id: "GEO060",
    question: "দক্ষিণ কোরিয়ার রাজধানী কোনটি?",
    options: ["বুসান", "ইনচন", "সিউল", "দেগু"],
    answer: 2,
    explanation: "সিউল দক্ষিণ কোরিয়ার রাজধানী এবং দেশের প্রধান রাজনৈতিক, অর্থনৈতিক ও সাংস্কৃতিক কেন্দ্র।",
    example: "উদাহরণ: দক্ষিণ কোরিয়ার গুরুত্বপূর্ণ সরকারি প্রতিষ্ঠানগুলোর অনেকগুলো সিউলে অবস্থিত।"
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
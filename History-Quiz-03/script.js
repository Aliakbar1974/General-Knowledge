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

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122114516715435742&set=a.122102731923435742";


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
// MCQ BANK — PART 01
// Questions 1–20
// World History
// ============================================================

const quizData = [

    {
        id: "WH201",
        question: "দ্বিতীয় বিশ্বযুদ্ধের সময় জাপানের ওপর পারমাণবিক বোমা নিক্ষেপ করা হয় কোন দুটি শহরে?",
        options: [
            "হিরোশিমা ও নাগাসাকি",
            "টোকিও ও কিয়োটো",
            "ওসাকা ও কোবে",
            "ইয়োকোহামা ও হিরোশিমা"
        ],
        answer: 0,
        explanation: "১৯৪৫ সালের আগস্ট মাসে যুক্তরাষ্ট্র জাপানের হিরোশিমা ও নাগাসাকি শহরে পারমাণবিক বোমা নিক্ষেপ করে।",
        example: "Atomic bombs were dropped on Hiroshima and Nagasaki in 1945."
    },

    {
        id: "WH202",
        question: "দ্বিতীয় বিশ্বযুদ্ধের সময় জাপানের পার্ল হারবার আক্রমণ কোন সালে ঘটে?",
        options: [
            "১৯৩৯",
            "১৯৪১",
            "১৯৪০",
            "১৯৪২"
        ],
        answer: 1,
        explanation: "জাপান ১৯৪১ সালের ৭ ডিসেম্বর হাওয়াইয়ের পার্ল হারবারে মার্কিন নৌঘাঁটিতে আক্রমণ করে।",
        example: "Japan attacked Pearl Harbor in 1941."
    },

    {
        id: "WH203",
        question: "জাতিসংঘ প্রতিষ্ঠার আগে আন্তর্জাতিক শান্তি রক্ষার জন্য কোন সংস্থা গঠিত হয়েছিল?",
        options: [
            "NATO",
            "Warsaw Pact",
            "League of Nations",
            "UNESCO"
        ],
        answer: 2,
        explanation: "প্রথম বিশ্বযুদ্ধের পর আন্তর্জাতিক শান্তি ও সহযোগিতা বৃদ্ধির উদ্দেশ্যে League of Nations প্রতিষ্ঠিত হয়।",
        example: "The League of Nations was created before the United Nations."
    },

    {
        id: "WH204",
        question: "League of Nations প্রতিষ্ঠার সঙ্গে কোন চুক্তির সম্পর্ক রয়েছে?",
        options: [
            "প্যারিস চুক্তি",
            "রোম চুক্তি",
            "লোকার্নো চুক্তি",
            "ভার্সাই চুক্তি"
        ],
        answer: 3,
        explanation: "Covenant of the League of Nations Treaty of Versailles-এর অংশ ছিল এবং Covenant-এর মাধ্যমে League প্রতিষ্ঠার কাঠামো নির্ধারিত হয়।",
        example: "The Covenant of the League of Nations was included in the Treaty of Versailles."
    },

    {
        id: "WH205",
        question: "Cold War মূলত কোন দুই পরাশক্তির মধ্যে সংঘটিত হয়েছিল?",
        options: [
            "যুক্তরাষ্ট্র ও সোভিয়েত ইউনিয়ন",
            "ব্রিটেন ও ফ্রান্স",
            "চীন ও জাপান",
            "জার্মানি ও ইতালি"
        ],
        answer: 0,
        explanation: "Cold War মূলত দ্বিতীয় বিশ্বযুদ্ধের পর যুক্তরাষ্ট্র ও সোভিয়েত ইউনিয়নের মধ্যে রাজনৈতিক, সামরিক ও আদর্শগত প্রতিদ্বন্দ্বিতা ছিল।",
        example: "The Cold War was mainly a rivalry between the United States and the Soviet Union."
    },

    {
        id: "WH206",
        question: "Cold War-এর সময় পশ্চিম জার্মানির সঙ্গে পূর্ব জার্মানির বিভাজনের প্রতীক ছিল কোনটি?",
        options: [
            "চীনের মহাপ্রাচীর",
            "বার্লিন প্রাচীর",
            "হ্যাড্রিয়ানের প্রাচীর",
            "মাগিনো লাইন"
        ],
        answer: 1,
        explanation: "বার্লিন প্রাচীর পূর্ব ও পশ্চিম বার্লিন এবং বৃহত্তর অর্থে পূর্ব ও পশ্চিম জার্মানির বিভাজনের প্রতীক হয়ে উঠেছিল।",
        example: "The Berlin Wall became a symbol of the division between East and West Germany."
    },

    {
        id: "WH207",
        question: "বার্লিন প্রাচীর নির্মাণ করা হয় কোন সালে?",
        options: [
            "১৯৪৯",
            "১৯৫৫",
            "১৯৬১",
            "১৯৬৮"
        ],
        answer: 2,
        explanation: "পূর্ব জার্মান কর্তৃপক্ষ ১৯৬১ সালে বার্লিন প্রাচীর নির্মাণ শুরু করে।",
        example: "The Berlin Wall was built in 1961."
    },

    {
        id: "WH208",
        question: "বার্লিন প্রাচীরের পতন ঘটে কোন সালে?",
        options: [
            "১৯৮৫",
            "১৯৮৭",
            "১৯৯১",
            "১৯৮৯"
        ],
        answer: 3,
        explanation: "১৯৮৯ সালের ৯ নভেম্বর বার্লিন প্রাচীরের পতন ঘটে। এটি পূর্ব ও পশ্চিম জার্মানির বিভাজনের অবসানের একটি গুরুত্বপূর্ণ প্রতীক হয়ে ওঠে।",
        example: "The Berlin Wall fell in 1989."
    },

    {
        id: "WH209",
        question: "সোভিয়েত ইউনিয়ন আনুষ্ঠানিকভাবে বিলুপ্ত হয় কোন সালে?",
        options: [
            "১৯৮৯",
            "১৯৯০",
            "১৯৯৩",
            "১৯৯১"
        ],
        answer: 3,
        explanation: "সোভিয়েত ইউনিয়ন ১৯৯১ সালের ডিসেম্বরে আনুষ্ঠানিকভাবে বিলুপ্ত হয়।",
        example: "The Soviet Union officially dissolved in 1991."
    },

    {
        id: "WH210",
        question: "ভারতের স্বাধীনতা আন্দোলনের অহিংস আন্দোলনের অন্যতম প্রধান নেতা কে ছিলেন?",
        options: [
            "জওহরলাল নেহরু",
            "সরদার প্যাটেল",
            "মহাত্মা গান্ধী",
            "সুভাষচন্দ্র বসু"
        ],
        answer: 2,
        explanation: "মহাত্মা গান্ধী ভারতের স্বাধীনতা আন্দোলনে অহিংস প্রতিরোধ ও অসহযোগের অন্যতম প্রধান নেতা ছিলেন।",
        example: "Mahatma Gandhi was a major leader of India's independence movement."
    },

    {
        id: "WH211",
        question: "মহাত্মা গান্ধীর নেতৃত্বে লবণ আইন অমান্য আন্দোলন কোন নামে পরিচিত?",
        options: [
            "ভারত ছাড়ো আন্দোলন",
            "অসহযোগ আন্দোলন",
            "খেলাফত আন্দোলন",
            "ডান্ডি অভিযান"
        ],
        answer: 3,
        explanation: "১৯৩০ সালে গান্ধীর নেতৃত্বে পরিচালিত লবণ আইন অমান্য করার ঐতিহাসিক পদযাত্রা ডান্ডি অভিযান বা Dandi March নামে পরিচিত।",
        example: "Gandhi led the Dandi March against the British salt law."
    },

    {
        id: "WH212",
        question: "ভারত ছাড়ো আন্দোলন শুরু হয় কোন সালে?",
        options: [
            "১৯৪২",
            "১৯৩০",
            "১৯৩৫",
            "১৯৪০"
        ],
        answer: 0,
        explanation: "ভারত ছাড়ো আন্দোলন বা Quit India Movement ১৯৪২ সালে মহাত্মা গান্ধীর নেতৃত্বে শুরু হয়।",
        example: "The Quit India Movement began in 1942."
    },

    {
        id: "WH213",
        question: "দক্ষিণ আফ্রিকায় বর্ণবাদবিরোধী আন্দোলনের সঙ্গে কোন নেতার নাম বিশেষভাবে যুক্ত?",
        options: [
            "জুলিয়াস সিজার",
            "প্যাট্রিক হেনরি",
            "ডেসমন্ড টুটু",
            "নেলসন ম্যান্ডেলা"
        ],
        answer: 3,
        explanation: "নেলসন ম্যান্ডেলা ১৯৯৪ সালের নির্বাচনের পর দেশের প্রথম democratically elected Black president হিসেবে দায়িত্ব নেন।",
        example: "Nelson Mandela was a major leader in the struggle against apartheid."
    },

    {
        id: "WH214",
        question: "নেলসন ম্যান্ডেলা দক্ষিণ আফ্রিকার প্রেসিডেন্ট হন কোন সালে?",
        options: [
            "১৯৯০",
            "১৯৯৪",
            "১৯৯৬",
            "১৯৯৮"
        ],
        answer: 1,
        explanation: "নেলসন ম্যান্ডেলা ১৯৯৪ সালে দক্ষিণ আফ্রিকার প্রথম কৃষ্ণাঙ্গ প্রেসিডেন্ট হিসেবে দায়িত্ব গ্রহণ করেন।",
        example: "Nelson Mandela became president of South Africa in 1994."
    },

    {
        id: "WH215",
        question: "চীনের কমিউনিস্ট বিপ্লয়ের পর গণপ্রজাতন্ত্রী চীন প্রতিষ্ঠিত হয় কোন সালে?",
        options: [
            "১৯৪৫",
            "১৯৪৭",
            "১৯৪৯",
            "১৯৫১"
        ],
        answer: 2,
        explanation: "মাও সে তুং-এর নেতৃত্বে কমিউনিস্ট বিজয়ের পর ১৯৪৯ সালের ১ অক্টোবর গণপ্রজাতন্ত্রী চীন প্রতিষ্ঠার ঘোষণা দেওয়া হয়।",
        example: "The People's Republic of China was established in 1949."
    },

    {
        id: "WH216",
        question: "গণপ্রজাতন্ত্রী চীনের প্রতিষ্ঠার সঙ্গে কার নাম জড়িত?",
        options: [
            "মাও সে তুং",
            "চিয়াং কাই-শেক",
            "দেং শিয়াওপিং",
            "সান ইয়াত-সেন"
        ],
        answer: 0,
        explanation: "মাও সে তুং চীনা কমিউনিস্ট বিপ্লবের নেতা ছিলেন এবং ১৯৪৯ সালে গণপ্রজাতন্ত্রী চীন প্রতিষ্ঠার ঘোষণা দেন।",
        example: "Mao Zedong proclaimed the People's Republic of China in 1949."
    },

    {
        id: "WH217",
        question: "জাপানের মেইজি পুনর্গঠন কোন শতকে সংঘটিত হয়?",
        options: [
            "সপ্তদশ শতক",
            "অষ্টাদশ শতক",
            "উনিশ শতক",
            "বিংশ শতক"
        ],
        answer: 2,
        explanation: "মেইজি পুনর্গঠন ১৮৬৮ সালে শুরু হয়, যা উনিশ শতকের একটি গুরুত্বপূর্ণ ঘটনা।",
        example: "The Meiji Restoration began in the 19th century."
    },

    {
        id: "WH218",
        question: "মেইজি পুনর্গঠনের ফলে জাপানে কী ঘটেছিল?",
        options: [
            "সামন্ততান্ত্রিক ব্যবস্থা আরও শক্তিশালী হয়",
            "আধুনিকায়ন ও শিল্পায়ন ত্বরান্বিত হয়",
            "রাজতন্ত্র বিলুপ্ত হয়",
            "জাপান উপনিবেশে পরিণত হয়"
        ],
        answer: 1,
        explanation: "মেইজি পুনর্গঠনের পর জাপানে দ্রুত রাজনৈতিক, সামরিক, অর্থনৈতিক ও সামাজিক আধুনিকায়ন এবং শিল্পায়ন ঘটে।",
        example: "The Meiji Restoration accelerated Japan's modernization and industrialization."
    },

    {
        id: "WH219",
        question: "মেক্সিকোর বিপ্লব শুরু হয় কোন সালে?",
        options: [
            "১৯০৫",
            "১৯১০",
            "১৯১৪",
            "১৯১৮"
        ],
        answer: 1,
        explanation: "মেক্সিকোর বিপ্লব সাধারণত ১৯১০ সালে ফ্রান্সিসকো মাদেরোর নেতৃত্বে শুরু হওয়া বিদ্রোহ থেকে গণনা করা হয়।",
        example: "The Mexican Revolution began in 1910."
    },

    {
        id: "WH220",
        question: "দক্ষিণ আমেরিকার স্বাধীনতা আন্দোলনের অন্যতম প্রধান নেতা কে ছিলেন?",
        options: [
            "সিমন বলিভার",
            "নেপোলিয়ন",
            "গ্যারিবল্ডি",
            "বিসমার্ক"
        ],
        answer: 0,
        explanation: "সিমন বলিভার দক্ষিণ আমেরিকার স্পেনীয় উপনিবেশগুলোর স্বাধীনতা আন্দোলনের অন্যতম প্রধান নেতা ছিলেন।",
        example: "Simón Bolívar was a major leader of South American independence movements."
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
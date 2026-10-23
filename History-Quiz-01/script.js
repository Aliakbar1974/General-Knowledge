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

const FACEBOOK_POST_URL = "https://www.facebook.com/photo?fbid=122113437615435742&set=a.122102731923435742";


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
        id: "WH001",
        question: "সিন্ধু সভ্যতার অন্যতম প্রধান নগরকেন্দ্র কোনটি?",
        options: ["মেমফিস", "থিবস", "মহেঞ্জোদারো", "উর"],
        answer: 2,
        explanation: "মহেঞ্জোদারো ছিল সিন্ধু বা হরপ্পা সভ্যতার অন্যতম প্রধান নগরকেন্দ্র। পরিকল্পিত নগরব্যবস্থা ও উন্নত নিষ্কাশনব্যবস্থার জন্য এটি পরিচিত।",
        example: "Mohenjo-daro was a major city of the Indus Valley Civilization."
    },

    {
        id: "WH002",
        question: "আকেমেনীয় পারস্য সাম্রাজ্যের প্রতিষ্ঠাতা হিসেবে কাকে সাধারণত গণ্য করা হয়?",
        options: ["সাইরাস দ্য গ্রেট", "জেরক্সেস", "দারিয়ুস তৃতীয়", "আশুরবানিপাল"],
        answer: 0,
        explanation: "সাইরাস দ্য গ্রেট খ্রিস্টপূর্ব ষষ্ঠ শতকে আকেমেনীয় পারস্য সাম্রাজ্যের ভিত্তি স্থাপন করেন এবং বিস্তৃত অঞ্চল একত্র করেন।",
        example: "Cyrus the Great established the foundations of the Achaemenid Persian Empire."
    },

    {
        id: "WH003",
        question: "আকেমেনীয় পারস্য সাম্রাজ্যের Royal Road-এর একটি প্রধান কাজ কী ছিল?",
        options: ["মন্দির নির্মাণ", "সাম্রাজ্যের সীমানা ছোট করা", "শুধু সৈন্যদের প্রশিক্ষণ", "দূরবর্তী অঞ্চলগুলোর মধ্যে দ্রুত যোগাযোগ ও প্রশাসনিক সমন্বয়"],
        answer: 3,
        explanation: "Royal Road সাম্রাজ্যের বিভিন্ন অঞ্চলের মধ্যে বার্তা, সরকারি নির্দেশ ও যাতায়াত দ্রুত করতে সাহায্য করত।",
        example: "The Royal Road helped messages travel across the Persian Empire."
    },

    {
        id: "WH004",
        question: "খ্রিস্টপূর্ব ৪৯০ সালের ম্যারাথনের যুদ্ধে গ্রিকদের প্রধান প্রতিপক্ষ কারা ছিল?",
        options: ["রোমান বাহিনী", "পারস্য বাহিনী", "মিশরীয় বাহিনী", "মঙ্গোল বাহিনী"],
        answer: 1,
        explanation: "ম্যারাথনের যুদ্ধে এথেন্সের নেতৃত্বাধীন গ্রিক বাহিনী পারস্য সাম্রাজ্যের বাহিনীর মুখোমুখি হয়।",
        example: "The Greeks fought the Persian forces at the Battle of Marathon."
    },

    {
        id: "WH005",
        question: "প্রাচীন রোমান রাষ্ট্র ও সাম্রাজ্যের ঐতিহাসিক প্রাথমিক রাজধানী কোন নগর ছিল?",
        options: ["আলেকজান্দ্রিয়া", "এথেন্স", "জেরুজালেম", "রোম"],
        answer: 3,
        explanation: "রোম ছিল প্রাচীন রোমান রাষ্ট্র ও সাম্রাজ্যের ঐতিহাসিক কেন্দ্র। পরবর্তী সময়ে সাম্রাজ্যের প্রশাসনিক কেন্দ্র একাধিক স্থানে বিকশিত হয়, তাই প্রশ্নে প্রাথমিক ঐতিহাসিক রাজধানী বলা হয়েছে।",
        example: "Rome was the historic centre of the early Roman state and empire."
    },

    {
        id: "WH006",
        question: "কনস্টান্টাইন দ্য গ্রেট কোন নগরকে রোমান সাম্রাজ্যের নতুন রাজধানী হিসেবে গড়ে তোলেন?",
        options: ["আলেকজান্দ্রিয়া", "কনস্টান্টিনোপল (প্রাচীন বাইজেন্টিয়াম)", "রোম", "এথেন্স"],
        answer: 1,
        explanation: "কনস্টান্টাইন দ্য গ্রেট প্রাচীন বাইজেন্টিয়াম নগরকে সম্প্রসারণ ও পুনর্গঠন করে কনস্টান্টিনোপল নামে নতুন সাম্রাজ্যিক রাজধানী হিসেবে প্রতিষ্ঠা করেন।",
        example: "Constantine enlarged Byzantium and established Constantinople as a new imperial capital."
    },

    {
        id: "WH007",
        question: "প্রাচীন গ্রিক অলিম্পিক ক্রীড়া কোন দেবতার সম্মানে অনুষ্ঠিত হতো?",
        options: ["জিউস", "অ্যাপোলো", "পোসাইডন", "হার্মিস"],
        answer: 0,
        explanation: "প্রাচীন অলিম্পিক ক্রীড়া অলিম্পিয়ায় দেবতা জিউসের সম্মানে অনুষ্ঠিত হতো।",
        example: "The ancient Olympic Games were held in honour of Zeus."
    },

    {
        id: "WH008",
        question: "রোমান প্রজাতন্ত্রের শেষ পর্যায়ে জুলিয়াস সিজারকে কোন সালে হত্যা করা হয়?",
        options: ["খ্রিস্টপূর্ব ৪৯", "খ্রিস্টপূর্ব ২৭", "খ্রিস্টপূর্ব ৪৪", "খ্রিস্টাব্দ ১৪"],
        answer: 2,
        explanation: "জুলিয়াস সিজারকে খ্রিস্টপূর্ব ৪৪ সালের ১৫ মার্চ রোমে হত্যা করা হয়; দিনটি Ides of March নামে পরিচিত।",
        example: "Julius Caesar was assassinated in Rome in 44 BCE."
    },

    {
        id: "WH009",
        question: "১২১৫ সালে ম্যাগনা কার্টা কোন ইংরেজ রাজার শাসনামলে স্বীকৃত হয়?",
        options: ["রাজা হেনরি অষ্টম", "রাজা জন", "রাজা এডওয়ার্ড প্রথম", "রাজা রিচার্ড প্রথম"],
        answer: 1,
        explanation: "ম্যাগনা কার্টা ১২১৫ সালে ইংল্যান্ডের রাজা জনের শাসনামলে সিলমোহরযুক্ত হয়। এটি রাজক্ষমতার ওপর কিছু সীমা আরোপের ইতিহাসে গুরুত্বপূর্ণ দলিল।",
        example: "King John sealed Magna Carta in 1215."
    },

    {
        id: "WH010",
        question: "কনস্টান্টিনোপল অটোমানদের দখলে যায় কোন সালে?",
        options: ["১৪৯২", "১৫২৬", "১২০৪", "১৪৫৩"],
        answer: 3,
        explanation: "অটোমান সুলতান দ্বিতীয় মেহমেদের বাহিনী ১৪৫৩ সালের ২৯ মে কনস্টান্টিনোপল দখল করে। এই ঘটনার মধ্য দিয়ে বাইজেন্টাইন সাম্রাজ্যের অবসান ঘটে।",
        example: "Constantinople fell to the Ottoman forces in 1453."
    },

    {
        id: "WH011",
        question: "স্প্যানিশ আর্মাডা ইংল্যান্ডের বিরুদ্ধে অভিযান চালায় কোন সালে?",
        options: ["১৫৭১", "১৬০৩", "১৫৮৮", "১৬৪৯"],
        answer: 2,
        explanation: "স্পেনের নৌবহর Spanish Armada ১৫৮৮ সালে ইংল্যান্ড আক্রমণের চেষ্টা করে, কিন্তু অভিযানটি ব্যর্থ হয়।",
        example: "The Spanish Armada attempted to invade England in 1588."
    },

    {
        id: "WH012",
        question: "সুয়েজ খাল আনুষ্ঠানিকভাবে নৌচলাচলের জন্য উন্মুক্ত হয় কোন সালে?",
        options: ["১৮৬৯", "১৮৫৯", "১৮৮৮", "১৯১৪"],
        answer: 0,
        explanation: "ভূমধ্যসাগর ও লোহিত সাগরকে সংযুক্তকারী সুয়েজ খাল ১৮৬৯ সালে আনুষ্ঠানিকভাবে উদ্বোধন করা হয়।",
        example: "The Suez Canal officially opened to navigation in 1869."
    },

    {
        id: "WH013",
        question: "হাইতি ফরাসি ঔপনিবেশিক শাসন থেকে স্বাধীনতা ঘোষণা করে কোন সালে?",
        options: ["১৭৮৯", "১৮০১", "১৮০২", "১৮০৪"],
        answer: 3,
        explanation: "দীর্ঘ বিপ্লবী সংগ্রামের পর হাইতি ১৮০৪ সালে স্বাধীনতা ঘোষণা করে এবং স্বাধীন রাষ্ট্র হিসেবে আত্মপ্রকাশ করে।",
        example: "Haiti declared independence from France in 1804."
    },

    {
        id: "WH014",
        question: "পোর্টসমাউথ চুক্তির মাধ্যমে রুশ-জাপান যুদ্ধের অবসান ঘটে কোন সালে?",
        options: ["১৯০৪", "১৯০৬", "১৯০৫", "১৯১০"],
        answer: 2,
        explanation: "রুশ-জাপান যুদ্ধের অবসান ঘটাতে পোর্টসমাউথ চুক্তি ১৯০৫ সালে স্বাক্ষরিত হয়।",
        example: "The Treaty of Portsmouth ended the Russo-Japanese War in 1905."
    },

    {
        id: "WH015",
        question: "আফ্রিকান ঐক্য সংস্থা (Organization of African Unity) প্রতিষ্ঠিত হয় কোন সালে?",
        options: ["১৯৫৮", "১৯৬৩", "১৯৭৫", "১৯৯১"],
        answer: 1,
        explanation: "আফ্রিকান ঐক্য সংস্থা ১৯৬৩ সালে প্রতিষ্ঠিত হয়; পরে ২০০২ সালে এর স্থলাভিষিক্ত হয় আফ্রিকান ইউনিয়ন।",
        example: "The Organization of African Unity was founded in 1963."
    },

    {
        id: "WH016",
        question: "১৮৮৪–১৮৮৫ সালের বার্লিন সম্মেলন প্রধানত কোন মহাদেশে ইউরোপীয় উপনিবেশ বিস্তারের সঙ্গে যুক্ত?",
        options: ["আফ্রিকা", "এশিয়া", "দক্ষিণ আমেরিকা", "ওশেনিয়া"],
        answer: 0,
        explanation: "বার্লিন সম্মেলনে ইউরোপীয় শক্তিগুলো আফ্রিকায় নিজেদের দাবি ও উপনিবেশ বিস্তারের নিয়ম নিয়ে আলোচনা করে।",
        example: "The Berlin Conference dealt with European colonial expansion in Africa."
    },

    {
        id: "WH017",
        question: "ইরানে ইসলামী বিপ্লব সংঘটিত হয় কোন সালে?",
        options: ["১৯৭৯", "১৯৬৭", "১৯৮৯", "১৯৯১"],
        answer: 0,
        explanation: "১৯৭৯ সালের ইসলামী বিপ্লবের মাধ্যমে ইরানের রাজতন্ত্রের অবসান ঘটে এবং নতুন রাজনৈতিক ব্যবস্থা প্রতিষ্ঠিত হয়।",
        example: "The Iranian Revolution took place in 1979."
    },

    {
        id: "WH018",
        question: "পানামা খাল আনুষ্ঠানিকভাবে চালু হয় কোন সালে?",
        options: ["১৯০৫", "১৯১০", "১৯১৮", "১৯১৪"],
        answer: 3,
        explanation: "আটলান্টিক ও প্রশান্ত মহাসাগরকে সংযুক্তকারী পানামা খাল ১৯১৪ সালে আনুষ্ঠানিকভাবে চালু হয়।",
        example: "The Panama Canal officially opened in 1914."
    },

    {
        id: "WH019",
        question: "ভিয়েতনাম যুদ্ধের সময় সাইগনের পতন ঘটে কোন সালে?",
        options: ["১৯৬৮", "১৯৭৩", "১৯৭৫", "১৯৭৯"],
        answer: 2,
        explanation: "১৯৭৫ সালের ৩০ এপ্রিল সাইগনের পতনের মাধ্যমে ভিয়েতনাম যুদ্ধের চূড়ান্ত পর্যায়ের অবসান ঘটে।",
        example: "The fall of Saigon occurred in April 1975."
    },

    {
        id: "WH020",
        question: "ইউরোপীয় কয়লা ও ইস্পাত সম্প্রদায় (ECSC) প্রতিষ্ঠার চুক্তি কোন সালে স্বাক্ষরিত হয়?",
        options: ["১৯৪৫", "১৯৫১", "১৯৫৭", "১৯৬৭"],
        answer: 1,
        explanation: "ইউরোপীয় কয়লা ও ইস্পাত সম্প্রদায় প্রতিষ্ঠার প্যারিস চুক্তি ১৯৫১ সালে স্বাক্ষরিত হয়; এটি পরবর্তী ইউরোপীয় একীকরণের গুরুত্বপূর্ণ ধাপ ছিল।",
        example: "The Treaty of Paris establishing the ECSC was signed in 1951."
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
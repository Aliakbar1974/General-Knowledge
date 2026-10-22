// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 11
// Space and Astronomy
// 12 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122121218049435742&set=a.122102731923435742";


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
// MCQ BANK — PART 11
// Topic: Space and Astronomy
// Total Questions: 12
// ============================================================


const quizData = [
    {
        id: "SP271",
        question: "Milky Way বা ছায়াপথ কী?",
        options: [
            "একটি গ্রহ",
            "একটি নক্ষত্রমণ্ডল",
            "একটি গ্যালাক্সি",
            "একটি নীহারিকা মাত্র"
        ],
        answer: 2,
        explanation: "Milky Way বা আকাশগঙ্গা হলো একটি গ্যালাক্সি, যার মধ্যে আমাদের সূর্য ও সৌরজগৎ অবস্থিত।",
        example: "আমাদের পৃথিবী ও সূর্য Milky Way গ্যালাক্সির অংশ।"
    },
    {
        id: "SP272",
        question: "সূর্য কোন গ্যালাক্সির অংশ?",
        options: [
            "অ্যান্ড্রোমিডা",
            "ট্রায়াঙ্গুলাম",
            "সোমব্রেরো",
            "মিল্কি ওয়ে"
        ],
        answer: 3,
        explanation: "সূর্য আমাদের ছায়াপথ অর্থাৎ মিল্কি ওয়ে (Milky Way) গ্যালাক্সির অন্তর্গত একটি নক্ষত্র।",
        example: "মিল্কি ওয়ে গ্যালাক্সিতে শত শত কোটি নক্ষত্র রয়েছে, যার একটি হলো সূর্য।"
    },
    {
        id: "SP273",
        question: "পৃথিবীর নিকটতম নক্ষত্র কোনটি?",
        options: [
            "প্রক্সিমা সেন্টোরি",
            "সিরিয়াস",
            "সূর্য",
            "আলফা সেন্টোরি A"
        ],
        answer: 2,
        explanation: "পৃথিবীর সবচেয়ে নিকটতম নক্ষত্র হলো সূর্য। সূর্য ছাড়া অন্য নিকটতম নক্ষত্র হলো প্রক্সিমা সেন্টোরি।",
        example: "সূর্য থেকে আলো পৃথিবীতে পৌঁছাতে প্রায় ৮ মিনিট ২০ সেকেন্ড সময় লাগে।"
    },
    {
        id: "SP274",
        question: "অ্যান্ড্রোমিডা কী?",
        options: [
            "একটি গ্রহ",
            "একটি উপগ্রহ",
            "একটি ধূমকেতু",
            "একটি গ্যালাক্সি"
        ],
        answer: 3,
        explanation: "অ্যান্ড্রোমিডা (Andromeda) হলো আমাদের মিল্কি ওয়ে গ্যালাক্সির নিকটবর্তী একটি বৃহৎ গ্যালাক্সি।",
        example: "রাতের মেঘমুক্ত আকাশে অ্যান্ড্রোমিডা গ্যালাক্সি আবছা আলোর মতো দেখা যেতে পারে।"
    },
    {
        id: "SP275",
        question: "মহাকাশে নভোচারীদের থাকার জন্য ব্যবহৃত International Space Station-এর সংক্ষিপ্ত রূপ কী?",
        options: [
            "ISE",
            "ISP",
            "ISA",
            "ISS"
        ],
        answer: 3,
        explanation: "International Space Station-এর সংক্ষিপ্ত রূপ হলো ISS। এটি পৃথিবীর নিম্ন কক্ষপথে অবস্থিত একটি গবেষণাগার।",
        example: "নভোচারীরা ISS-এ অবস্থান করে বিভিন্ন বৈজ্ঞানিক পরীক্ষা-নিরীক্ষা চালান।"
    },
    {
        id: "SP276",
        question: "Hubble Space Telescope প্রধানত কোথায় অবস্থান করে?",
        options: [
            "চাঁদের পৃষ্ঠে",
            "পৃথিবীর কক্ষপথে",
            "মঙ্গলগ্রহে",
            "সূর্যের কক্ষপথের বাইরে"
        ],
        answer: 1,
        explanation: "হাবল স্পেস টেলিস্কোপ পৃথিবীর বায়ুমণ্ডলের বাইরে পৃথিবীর কক্ষপথে ঘুরে মহাকাশ পর্যবেক্ষণ করে।",
        example: "পৃথিবীর কক্ষপথে অবস্থানের কারণে এটি বায়ুমণ্ডলের বাধা ছাড়াই মহাকাশের ছবি তুলতে পারে।"
    },
        {
        id: "SP277",
        question: "যে জ্যোতিষ্কের ঘটনা দিগন্তের ভেতর থেকে আলোও বের হতে পারে না, সেটি কী?",
        options: [
            "ব্ল্যাক হোল",
            "নিউট্রন নক্ষত্র",
            "শ্বেত বামন",
            "লাল দানব"
        ],
        answer: 0,
        explanation: "ব্ল্যাক হোলের ঘটনা দিগন্তের ভেতর থেকে আলোও বের হতে পারে না, কারণ সেখানকার মহাকর্ষীয় প্রভাব অত্যন্ত প্রবল।",
        example: "A black hole has an event horizon from within which light cannot escape."
    },
    {
        id: "SP278",
        question: "পৃথিবীর বায়ুমণ্ডলে প্রবেশের সময় উল্কাপিণ্ডের কারণে যে আলোকরেখা দেখা যায় তাকে সাধারণত কী বলা হয়?",
        options: [
            "Comet",
            "Meteor",
            "Galaxy",
            "Nebula"
        ],
        answer: 1,
        explanation: "মহাকাশের ছোট পাথুরে বা ধাতব বস্তু পৃথিবীর বায়ুমণ্ডলে প্রবেশের সময় যে আলোকরেখা দেখা যায়, তাকে Meteor (উল্কা) বলে।",
        example: "রাতের আকাশে অনেক সময় তারা খসে পড়ার মতো যে দৃশ্য দেখা যায় তা মূলত Meteor।"
    },
    {
        id: "SP279",
        question: "সৌরজগতের সবচেয়ে উষ্ণ গ্রহ কোনটি?",
        options: [
            "বুধ",
            "শুক্র",
            "মঙ্গল",
            "বৃহস্পতি"
        ],
        answer: 1,
        explanation: "ঘন বায়ুমণ্ডল ও প্রবল গ্রিনহাউস প্রভাবের কারণে শুক্র (Venus) সৌরজগতের সবচেয়ে উষ্ণ গ্রহ।",
        example: "যদিও বুধ সূর্যের নিকটতম গ্রহ, তবুও বায়ুমণ্ডলের গ্রিনহাউস প্রভাবের কারণে শুক্র বুধের চেয়েও বেশি উত্তপ্ত।"
    },
        {
        id: "SP280",
        question: "মঙ্গল গ্রহের দুটি প্রাকৃতিক উপগ্রহের নাম কী?",
        options: [
            "ফোবোস ও ডেইমোস",
            "টাইটান ও এনসেলাডাস",
            "আইও ও ইউরোপা",
            "ডেইমোস ও ট্রাইটন"
        ],
        answer: 0,
        explanation: "মঙ্গলের দুটি প্রাকৃতিক উপগ্রহ হলো ফোবোস ও ডেইমোস। অন্য বিকল্পের নামগুলো অন্যান্য গ্রহের উপগ্রহ।",
        example: "Mars has two natural moons: Phobos and Deimos."
    },
    {
        id: "SP281",
        question: "Apollo 11 চাঁদে অবতরণ করে কোন সালে?",
        options: [
            "১৯৬৭",
            "১৯৬৮",
            "১৯৬৯",
            "১৯৭০"
        ],
        answer: 2,
        explanation: "যুক্তরাষ্ট্রের মানববাহী মহাকাশ অভিযান Apollo 11 ১৯৬৯ সালের ২০ জুলাই চাঁদে অবতরণ করে।",
        example: "এই মিশনে নীল আর্মস্ট্রং চাঁদের পৃষ্ঠে প্রথম পা রাখেন এবং বাজ অলড্রিন পরে তাঁর সঙ্গে চাঁদে হাঁটেন।"
    },
        {
        id: "SP282",
        question: "GPS নেভিগেশন ব্যবস্থা প্রধানত কোন ধরনের কৃত্রিম উপগ্রহের ওপর নির্ভর করে?",
        options: [
            "নেভিগেশন উপগ্রহ",
            "আবহাওয়া পর্যবেক্ষণ উপগ্রহ",
            "যোগাযোগ উপগ্রহ",
            "পৃথিবী পর্যবেক্ষণ উপগ্রহ"
        ],
        answer: 0,
        explanation: "GPS অবস্থান নির্ণয়ের জন্য নির্দিষ্ট কক্ষপথে থাকা নেভিগেশন উপগ্রহ থেকে প্রেরিত সংকেত ব্যবহার করে।",
        example: "GPS receivers use signals from navigation satellites to determine location."
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

    if (questionNumber) {
        questionNumber.textContent = currentQuestion + 1;
    }

    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }

    if (progressBar) {
        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressBar.style.width = progress + "%";
    }

    if (questionElement) {
        questionElement.textContent = q.question;
    }

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) {
        correctMessage.textContent = "";
    }

    if (wrongMessage) {
        wrongMessage.textContent = "";
    }

    if (exampleText) {
        exampleText.textContent = "";
    }

    // Create answer buttons
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
    } else {
        if (timerElement) {
            timerElement.textContent = "∞";
            timerElement.classList.remove("timer-danger");
        }
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

        if (selectedMode === "learning") {
            if (feedbackElement) {
                feedbackElement.style.display = "block";
            }

            if (exampleText) {
                exampleText.textContent =
                    "ব্যাখ্যা: " + q.explanation +
                    "\n\nউদাহরণ: " + q.example;
            }
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

        if (feedbackElement) {
            feedbackElement.style.display = "block";
        }

        if (exampleText) {
            exampleText.textContent =
                "ব্যাখ্যা: " + q.explanation +
                "\n\nউদাহরণ: " + q.example;
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

    if (exampleText) {
        exampleText.textContent =
            "ব্যাখ্যা: " + q.explanation +
            "\n\nউদাহরণ: " + q.example;
    }

    showNextButton();
}


// ============================================================
// NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");

    if (oldButton) {
        oldButton.remove();
    }

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

    if (quizScreen) {
        quizScreen.style.display = "none";
    }

    if (resultScreen) {
        resultScreen.style.display = "block";
    }

    const nextButton = document.getElementById("next-question-btn");

    if (nextButton) {
        nextButton.remove();
    }

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

    playSound("start");

    if (resultScreen) {
        resultScreen.style.display = "none";
    }

    if (quizScreen) {
        quizScreen.style.display = "none";
    }

    if (startScreen) {
        startScreen.style.display = "block";
    }

    if (statusElement) {
        statusElement.textContent = "";
    }

    if (socialMessage) {
        socialMessage.style.display = "none";
    }

    const nextButton = document.getElementById("next-question-btn");

    if (nextButton) {
        nextButton.remove();
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (timerElement) {
        timerElement.textContent = "15";
        timerElement.classList.remove("timer-danger");
    }
}


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];
    const questionIds = new Set();

    quizData.forEach(q => {
        if (
            Number.isInteger(q.answer) &&
            q.answer >= 0 &&
            q.answer <= 3
        ) {
            distribution[q.answer]++;
        }

        if (questionIds.has(q.id)) {
            console.error("Duplicate question ID:", q.id);
        }

        questionIds.add(q.id);

        if (!Array.isArray(q.options) || q.options.length !== 4) {
            console.error("Question must have exactly four options:", q.id);
        }

        if (
            !Number.isInteger(q.answer) ||
            q.answer < 0 ||
            q.answer >= q.options.length
        ) {
            console.error("Invalid answer index:", q.id);
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
})();
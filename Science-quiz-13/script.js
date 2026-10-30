
 // ============================================================
 // WORLD GENERAL KNOWLEDGE — MCQ BANK PART 13
 // Topic: Science | 15 Questions
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
        id: "SC156",
        question: "স্বর্ণের রাসায়নিক প্রতীক কোনটি?",
        options: ["Ag", "Au", "Fe", "Cu"],
        answer: 1,
        explanation: "স্বর্ণের রাসায়নিক প্রতীক Au। এটি ল্যাটিন শব্দ Aurum থেকে এসেছে।",
        example: "স্বর্ণের প্রতীক Au এবং পারমাণবিক সংখ্যা ৭৯।"
    },
    {
        id: "SC157",
        question: "রূপার রাসায়নিক প্রতীক কোনটি?",
        options: ["Au", "Al", "Ag", "Ar"],
        answer: 2,
        explanation: "রূপার রাসায়নিক প্রতীক Ag। এটি ল্যাটিন শব্দ Argentum থেকে এসেছে।",
        example: "রূপার প্রতীক Ag এবং পারমাণবিক সংখ্যা ৪৭।"
    },
    
{
    id: "SC158",
    question: "লোহার রাসায়নিক প্রতীক কোনটি?",
    options: ["Ir", "In", "I", "Fe"],
    answer: 3,
    explanation: "লোহার রাসায়নিক প্রতীক Fe। এটি ল্যাটিন শব্দ Ferrum থেকে এসেছে।",
    example: "লোহার প্রতীক Fe এবং পারমাণবিক সংখ্যা ২৬।"
},

    {
        id: "SC159",
        question: "pH-এর মান ৭ হলে দ্রবণটি সাধারণত কেমন?",
        options: ["নিরপেক্ষ", "অম্লীয়", "ক্ষারীয়", "লবণাক্ত"],
        answer: 0,
        explanation: "সাধারণ তাপমাত্রায় pH ৭ হলে জলীয় দ্রবণকে নিরপেক্ষ বলা হয়।",
        example: "২৫°C তাপমাত্রায় বিশুদ্ধ পানির pH প্রায় ৭।"
    },
    {
        id: "SC160",
        question: "বিশুদ্ধ পানির pH প্রায় কত (২৫°C তাপমাত্রায়)?",
        options: ["৫", "৭", "৯", "১২"],
        answer: 1,
        explanation: "২৫°C তাপমাত্রায় বিশুদ্ধ পানির pH প্রায় ৭, তাই এটি নিরপেক্ষ।",
        example: "বিশুদ্ধ পানিতে H⁺ ও OH⁻ আয়নের ঘনত্ব সমান থাকে।"
    },
    {
        id: "SC161",
        question: "শব্দ কোন মাধ্যমে চলতে পারে না?",
        options: ["পানি", "বায়ু", "শূন্যস্থান", "কঠিন পদার্থ"],
        answer: 2,
        explanation: "শব্দ চলাচলের জন্য জড় মাধ্যম প্রয়োজন। শূন্যস্থানে কোনো জড় মাধ্যম না থাকায় শব্দ চলতে পারে না।",
        example: "মহাকাশের শূন্যস্থানে বিস্ফোরণ ঘটলেও শব্দ সরাসরি শোনা যায় না।"
    },
    {
        id: "SC162",
        question: "আলোর বেগ শূন্যস্থানে প্রায় কত?",
        options: [
            "৩ × ১০⁶ মিটার/সেকেন্ড",
            "৩ × ১০⁷ মিটার/সেকেন্ড",
            "৩ × ১০³ কিলোমিটার/সেকেন্ড",
            "৩ × ১০⁵ কিলোমিটার/সেকেন্ড"
        ],
        answer: 3,
        explanation: "শূন্যস্থানে আলোর বেগ প্রায় ৩ × ১০⁸ মিটার/সেকেন্ড বা ৩ × ১০⁵ কিলোমিটার/সেকেন্ড।",
        example: "সূর্যের আলো পৃথিবীতে পৌঁছাতে প্রায় ৮ মিনিট ২০ সেকেন্ড সময় নেয়।"
    },
    {
        id: "SC163",
        question: "সর্বজনীন মহাকর্ষ সূত্রের সঙ্গে কার নাম জড়িত?",
        options: ["নিউটন", "আইনস্টাইন", "ফ্যারাডে", "পাস্কাল"],
        answer: 0,
        explanation: "স্যার আইজ্যাক নিউটন সর্বজনীন মহাকর্ষ সূত্র প্রণয়ন করেন।",
        example: "পৃথিবী ও সূর্যের মধ্যকার মহাকর্ষীয় আকর্ষণ এই সূত্র দিয়ে ব্যাখ্যা করা যায়।"
    },
    {
        id: "SC164",
        question: "আপেক্ষিকতার তত্ত্বের সঙ্গে কার নাম বিশেষভাবে যুক্ত?",
        options: ["নিউটন", "আইনস্টাইন", "ডারউইন", "বোর"],
        answer: 1,
        explanation: "আলবার্ট আইনস্টাইন বিশেষ ও সাধারণ আপেক্ষিকতার তত্ত্ব প্রণয়ন করেন।",
        example: "আইনস্টাইনের বিশেষ আপেক্ষিকতার তত্ত্ব ১৯০৫ সালে প্রকাশিত হয়।"
    },
    {
        id: "SC165",
        question: "বিবর্তন তত্ত্বের সঙ্গে কার নাম বিশেষভাবে যুক্ত?",
        options: ["গ্রেগর মেন্ডেল", "লুই পাস্তুর", "চার্লস ডারউইন", "রবার্ট হুক"],
        answer: 2,
        explanation: "চার্লস ডারউইন প্রাকৃতিক নির্বাচনের মাধ্যমে বিবর্তনের তত্ত্ব সুস্পষ্টভাবে ব্যাখ্যা করেন।",
        example: "ডারউইনের বিখ্যাত বই On the Origin of Species প্রকাশিত হয় ১৮৫৯ সালে।"
    },
    {
        id: "SC166",
        question: "জেনেটিক্সের জনক হিসেবে কে পরিচিত?",
        options: ["ডারউইন", "পাস্তুর", "ওয়াটসন", "গ্রেগর মেন্ডেল"],
        answer: 3,
        explanation: "বংশগতির মৌলিক সূত্র আবিষ্কারের জন্য গ্রেগর মেন্ডেলকে জেনেটিক্সের জনক বলা হয়।",
        example: "মটরশুঁটি গাছ নিয়ে মেন্ডেলের গবেষণা বংশগতিবিদ্যার ভিত্তি স্থাপন করে।"
    },
    {
        id: "SC167",
        question: "DNA-এর পূর্ণরূপ কী?",
        options: [
            "Deoxyribonucleic Acid",
            "Deoxygenated Nucleic Acid",
            "Double Nucleic Acid",
            "Deoxyribose Nitrogen Acid"
        ],
        answer: 0,
        explanation: "DNA-এর পূর্ণরূপ Deoxyribonucleic Acid। এটি জীবের বংশগত তথ্য বহন করে।",
        example: "মানুষের কোষের নিউক্লিয়াসে DNA থাকে।"
    },
    {
        id: "SC168",
        question: "মানবদেহের স্বাভাবিক তাপমাত্রা প্রায় কত?",
        options: ["৩৫°C", "৩৭°C", "৩৯°C", "৪১°C"],
        answer: 1,
        explanation: "মানবদেহের স্বাভাবিক গড় তাপমাত্রা প্রায় ৩৭°C। তবে ব্যক্তি ও পরিস্থিতিভেদে কিছুটা পরিবর্তন হতে পারে।",
        example: "৩৭°C মানবদেহের স্বাভাবিক গড় তাপমাত্রা হিসেবে পরিচিত।"
    },
    {
        id: "SC169",
        question: "মানুষের ABO রক্তের গ্রুপ আবিষ্কারের সঙ্গে কার নাম জড়িত?",
        options: ["লুই পাস্তুর", "আলেকজান্ডার ফ্লেমিং", "কার্ল ল্যান্ডস্টেইনার", "এডওয়ার্ড জেনার"],
        answer: 2,
        explanation: "কার্ল ল্যান্ডস্টেইনার ১৯০০ সালে ABO রক্তের গ্রুপ পদ্ধতি আবিষ্কার করেন।",
        example: "মানুষের ABO রক্তের গ্রুপ হলো A, B, AB ও O।"
    },
    {
        id: "SC170",
        question: "পেনিসিলিন আবিষ্কার করেন কে?",
        options: ["আলেকজান্ডার ফ্লেমিং", "লুই পাস্তুর", "রবার্ট কোখ", "জোসেফ লিস্টার"],
        answer: 0,
        explanation: "আলেকজান্ডার ফ্লেমিং ১৯২৮ সালে পেনিসিলিনের অ্যান্টিব্যাকটেরিয়াল প্রভাব আবিষ্কার করেন।",
        example: "পেনিসিলিন ব্যাকটেরিয়াজনিত কিছু সংক্রমণের চিকিৎসায় ব্যবহৃত হয়।"
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

document.addEventListener('DOMContentLoaded', () => {
const quizData = [
    {
        question: "What is the minimum work function for cesium?",
        options: [
            "A) 2.19 eV",
            "B) 0.529 eV",
            "C) 1.9 eV",
            "D) 13.6 eV"
        ],
        correctAnswer: "C) 1.9 eV"
    },
    {
        question: "The equation for work function (W) can be written as:",
        options: [
            "A) W = eV",
            "B) W = hc/λ0",
            "C) W = h/λ",
            "D) W = mv^2/2"
        ],
        correctAnswer: "B) W = hc/λ0"
    },
    {
        question: "Photoelectric effect is directly proportional to:",
        options: [
            "A) Frequency of incident radiation",
            "B) Wavelength of incident radiation",
            "C) Intensity of incident radiation",
            "D) Speed of incident radiation"
        ],
        correctAnswer: "A) Frequency of incident radiation"
    },
    
    {
        question: "The principle stating that the photoelectric effect is directly proportional to the incident radiation refers to:",
        options: [
            "A) The intensity of the incident radiation",
            "B) The frequency of the incident radiation",
            "C) The wavelength of the incident radiation",
            "D) The energy of the incident radiation"
        ],
        correctAnswer: "B) The frequency of the incident radiation"
    },{
        question: "Maximum kinetic energy (KEmax) of photoelectrons is given by:",
        options: [
            "A) eV",
            "B) hc/λ",
            "C) eVs",
            "D) hv - W0"
        ],
        correctAnswer: "D) hv - W0"
    },
    {
        question: "The formula for intensity in terms of electric field is:",
        options: [
            "A) I = Є0E^2",
            "B) I = ½ Є0E^2C",
            "C) I = E^2/Є0",
            "D) I = Є0E^2/2"
        ],
        correctAnswer: "B) I = ½ Є0E^2C"
    },
    {
        question: "De Broglie wavelength formula is:",
        options: [
            "A) λ = h/E",
            "B) λ = h/mv",
            "C) λ = mv/h",
            "D) λ = E/hc"
        ],
        correctAnswer: "B) λ = h/mv"
    },
    {
        question: "Radius of the electron in hydrogen-like atoms is given by:",
        options: [
            "A) rn = n^2a0",
            "B) rn = (n^2/Z)a0",
            "C) rn = Zn^2a0",
            "D) rn = a0/(n^2Z)"
        ],
        correctAnswer: "B) rn = (n^2/Z)a0"
    },
    {
        question: "Energy in nth orbit of an electron is given by:",
        options: [
            "A) En = E1(Z/n^2)",
            "B) En = E1(n^2/Z)",
            "C) En = E1(Z^2/n^2)",
            "D) En = E1(Z/n)^2"
        ],
        correctAnswer: "C) En = E1(Z^2/n^2)"
    },
    {
        question: "The correct formula for minimum wavelength for X-rays is:",
        options: [
            "A) λmin = hc/eV",
            "B) λmin = eV/hc",
            "C) λmin = hc/eV0",
            "D) λmin = 12400/V0 Å"
        ],
        correctAnswer: "D) λmin = 12400/V0 Å"
    },
    {
        question: "For alpha decay process, the Q value is given by:",
        options: [
            "A) Q = [m(ZXA) - m(Z-1YA) - m(2He4)]C^2",
            "B) Q = [m(ZXA) - m(Z-2YA-4) - m(2He4)]C^2",
            "C) Q = [m(ZXA) + m(Z-2YA-4) + m(2He4)]C^2",
            "D) Q = [m(ZXA) + m(Z-1YA) + m(2He4)]C^2"
        ],
        correctAnswer: "B) Q = [m(ZXA) - m(Z-2YA-4) - m(2He4)]C^2"
    },
    {
        question: "The half-life (T1/2) of a radioactive substance is calculated as:",
        options: [
            "A) T1/2 = λ/0.693",
            "B) T1/2 = 0.693/λ",
            "C) T1/2 = λ*0.693",
            "D) T1/2 = 1/(λ*0.693)"
        ],
        correctAnswer: "B) T1/2 = 0.693/λ"
    },
    {
        question: "Binding energy (B) of a nucleus is given by the formula:",
        options: [
            "A) B = (ZMp + NMn - M)c^2",
            "B) B = (ZMp + NMn + M)c^2",
            "C) B = (ZMp - NMn - M)c^2",
            "D) B = (ZMn + NMp - M)c^2"
        ],
        correctAnswer: "A) B = (ZMp + NMn - M)c^2"
    },
    {
        question: "For beta-minus decay, the Q value is calculated as:",
        options: [
            "A) Q = [m(ZXA) - m(Z+1YA)]c^2",
            "B) Q = [m(ZXA) + m(Z+1YA)]c^2",
            "C) Q = [m(ZXA) - m(Z-1YA)]c^2",
            "D) Q = [m(ZXA) + m(Z-1YA)]c^2"
        ],
        correctAnswer: "A) Q = [m(ZXA) - m(Z+1YA)]c^2"
    },
    {
        question: "The momentum of a photon is given by:",
        options: [
            "A) p = h*v",
            "B) p = h/λ",
            "C) p = λ/h",
            "D) p = hv/c"
        ],
        correctAnswer: "B) p = h/λ"
    },
    {
        question: "The average life (Tav) of a radioactive isotope is given by:",
        options: [
            "A) Tav = λ/0.693",
            "B) Tav = 0.693*λ",
            "C) Tav = T1/2/0.693",
            "D) Tav = 0.693/T1/2"
        ],
        correctAnswer: "C) Tav = T1/2/0.693"
    },
    {
        question: "Moseley’s Law is represented by the formula:",
        options: [
            "A) √v = a(Z - b)",
            "B) v = a(Z - b)^2",
            "C) v^2 = a(Z - b)",
            "D) √v = a(Z^2 - b)"
        ],
        correctAnswer: "A) √v = a(Z - b)"
    },
    {
        question: "The intensity of light in terms of electric field (I) is correctly given by:",
        options: [
            "A) I = E^2/2Є0c",
            "B) I = Є0E^2c",
            "C) I = ½ Є0E^2c",
            "D) I = 2Є0E^2/c"
        ],
        correctAnswer: "C) I = ½ Є0E^2c"
    },
    {
        question: "The radius of the nucleus (R) can be calculated using:",
        options: [
            "A) R = R0A^1/3",
            "B) R = R0A^1/2",
            "C) R = R0A^2/3",
            "D) R = R0/A^1/3"
        ],
        correctAnswer: "A) R = R0A^1/3"
    },
    {
        question: "For electron capture, the Q value is calculated as:",
        options: [
            "A) Q = [m(ZXA) - m(Z-1YA)]c^2",
            "B) Q = [m(ZXA) + m(Z-1YA)]c^2",
            "C) Q = [m(ZXA) - m(Z+1YA)]c^2",
            "D) Q = [m(ZXA) + m(Z+1YA)]c^2"
        ],
        correctAnswer: "A) Q = [m(ZXA) - m(Z-1YA)]c^2"
    },
    {
        question: "The wavelength corresponding to spectral lines is calculated by:",
        options: [
            "A) 1/λ = R(1/n1^2 - 1/n2^2)",
            "B) λ = R(1/n1^2 + 1/n2^2)",
            "C) λ = R(1/n1^2 - 1/n2^2)",
            "D) 1/λ = R(n1^2 - n2^2)"
        ],
        correctAnswer: "A) 1/λ = R(1/n1^2 - 1/n2^2)"
    },
    {
        question: "What is the formula for calculating the stopping potential (Vs) in the context of the photoelectric effect?",
        options: [
            "A) Vs = KEmax/e",
            "B) Vs = eKEmax",
            "C) Vs = hv/e",
            "D) Vs = W/h"
        ],
        correctAnswer: "A) Vs = KEmax/e"
    },
    {
        question: "Which formula represents the relationship between the intensity (I) and the electric field (E) in electromagnetic waves?",
        options: [
            "A) I = E^2/Є0",
            "B) I = Є0E^2",
            "C) I = E/2Є0C",
            "D) I = ½ Є0E^2C"
        ],
        correctAnswer: "D) I = ½ Є0E^2C"
    },
    {
        question: "What is the formula for the energy (En) in the nth orbit of an electron around the nucleus in a hydrogen-like atom?",
        options: [
            "A) En = -13.6eV(Z^2/n^2)",
            "B) En = -13.6eV(Z/n^2)",
            "C) En = 13.6eV(Z/n^2)",
            "D) En = -13.6eV(n^2/Z)"
        ],
        correctAnswer: "A) En = -13.6eV(Z^2/n^2)"
    },
    {
        question: "The formula for the momentum of a photon is:",
        options: [
            "A) p = h*v",
            "B) p = E/c",
            "C) p = h/λ",
            "D) p = λ/h"
        ],
        correctAnswer: "C) p = h/λ"
    },
    {
        question: "The correct formula for the minimum wavelength (λmin) of X-rays produced in an X-ray tube is:",
        options: [
            "A) λmin = hc/eV",
            "B) λmin = eV/hc",
            "C) λmin = hc/eV0",
            "D) λmin = 12400/V0 Å"
        ],
        correctAnswer: "D) λmin = 12400/V0 Å"
    },
    {
        question: "For beta-plus decay, the Q value is correctly given by:",
        options: [
            "A) Q = [m(ZXA) - m(Z+1YA)]C^2",
            "B) Q = [m(ZXA) - m(Z-1YA)]C^2",
            "C) Q = [m(ZXA) - m(Z-1YA) - 2me]C^2",
            "D) Q = [m(ZXA) - m(Z+1YA) - 2me]C^2"
        ],
        correctAnswer: "C) Q = [m(ZXA) - m(Z-1YA) - 2me]C^2"
    },
    {
        question: "The average radius of a nucleus (R) can be expressed as:",
        options: [
            "A) R = R0A^1/3",
            "B) R = R0A^2/3",
            "C) R = R0A^1/2",
            "D) R = R0/A^1/3"
        ],
        correctAnswer: "A) R = R0A^1/3"
    },
    {
        question: "Moseley's Law is formulated as:",
        options: [
            "A) √v = a(Z - b)",
            "B) v = a(Z - b)^2",
            "C) v^2 = a(Z - b)",
            "D) √v = a(Z^2 - b)"
        ],
        correctAnswer: "A) √v = a(Z - b)"
    },
    {
        question: "The activity (A) of a radioactive sample is determined by the formula:",
        options: [
            "A) A = A0e^-λt",
            "B) A = λN",
            "C) A = N0e^-λt",
            "D) A = λ/A0"
        ],
        correctAnswer: "B) A = λN"
    },
    {
        question: "The radius of an electron's orbit in a hydrogen-like atom, considering the nucleus's motion, is given by:",
        options: [
            "A) rn = (0.529 Å) (n^2/Z) (m/μ)",
            "B) rn = (0.529 Å) (n^2/Z)",
            "C) rn = (0.529 Å) (Z/n^2) (m/μ)",
            "D) rn = (0.529 Å) (Z/n^2)"
        ],
        correctAnswer: "A) rn = (0.529 Å) (n^2/Z) (m/μ)"
    },
    {
        question: "The energy in the nth orbit of an electron, considering the nucleus's motion, is:",
        options: [
            "A) En = (-13.6 eV) (Z^2/n^2)(μ/m)",
            "B) En = (-13.6 eV) (n^2/Z^2)(μ/m)",
            "C) En = (13.6 eV) (Z^2/n^2)",
            "D) En = (-13.6 eV) (Z^2/n^2)"
        ],
        correctAnswer: "A) En = (-13.6 eV) (Z^2/n^2)(μ/m)"
    },
    {
        question: "The stopping potential (Vs) in the photoelectric effect is determined to:",
        options: [
            "A) Be proportional to the frequency of the incident light",
            "B) Be independent of the intensity of the light",
            "C) Decrease with increasing wavelength of the incident light",
            "D) Increase with increasing intensity of the light"
        ],
        correctAnswer: "B) Be independent of the intensity of the light"
    },
    {
        question: "For alpha decay, the Q value equation is:",
        options: [
            "A) Q = [m(zXA) - m(z-2YA-4) - m(2He4)]C^2",
            "B) Q = [m(zXA) + m(z-2YA) + m(2He4)]C^2",
            "C) Q = [m(zXA) - m(z+2YA+4) + m(2He4)]C^2",
            "D) Q = [m(zXA) + m(z-1YA) - m(2He4)]C^2"
        ],
        correctAnswer: "A) Q = [m(zXA) - m(z-2YA-4) - m(2He4)]C^2"
    },
    {
        question: "The de Broglie wavelength of a particle is represented by:",
        options: [
            "A) λ = h/p",
            "B) λ = hp",
            "C) λ = h/(mv)",
            "D) λ = mv/h"
        ],
        correctAnswer: "A) λ = h/p"
    },
    {
        question: "Which series is in the ultraviolet region?",
        options: [
            "A) Lyman",
            "B) Balmer",
            "C) Paschen",
            "D) Brackett"
        ],
        correctAnswer: "A) Lyman"
    },
    {
        question: "The formula for the specific activity is based on:",
        options: [
            "A) The activity per unit mass",
            "B) The activity per unit volume",
            "C) The decay constant and half-life",
            "D) The initial and final number of nuclei"
        ],
        correctAnswer: "A) The activity per unit mass"
    },
    {
        question: "The wavelength corresponding to spectral lines in hydrogen-like atoms is given by:",
        options: [
            "A) 1/λ = R(1/n1^2 - 1/n2^2)",
            "B) λ = R(1/n1 + 1/n2)",
            "C) λ = R(n1^2 - n2^2)",
            "D) 1/λ = R(n1 - n2)"
        ],
        correctAnswer: "A) 1/λ = R(1/n1^2 - 1/n2^2)"
    },
    {
        question: "Beta-minus decay results in:",
        options: [
            "A) An increase in the atomic number by 1",
            "B) A decrease in the atomic number by 1",
            "C) No change in the atomic number",
            "D) A decrease in the atomic mass by 4"
        ],
        correctAnswer: "A) An increase in the atomic number by 1"
    },
    {
        question: "The binding energy of a nucleus is calculated using the formula:",
        options: [
            "A) B = (ZMp + NMn - M)c^2",
            "B) B = (ZMp - NMn + M)c^2",
            "C) B = (ZMn + NMp - M)c^2",
            "D) B = ZMp + NMn + Mc^2"
        ],
        correctAnswer: "A) B = (ZMp + NMn - M)c^2"
    },
    {
        question: "The principle stating that the photoelectric effect is directly proportional to the incident radiation refers to:",
        options: [
            "A) The intensity of the incident radiation",
            "B) The frequency of the incident radiation",
            "C) The wavelength of the incident radiation",
            "D) The energy of the incident radiation"
        ],
        correctAnswer: "B) The frequency of the incident radiation"
    }
];
    
    
    



    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;
    let answersSelected = new Array(quizData.length).fill(false); // Tracks if a question was answered correctly
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');
    const backButton = document.getElementById('back-btn');
    const questionNumberElement = document.getElementById('question-number');
    const totalQuestionsElement = document.getElementById('total-questions');
    const scoreContainer = document.getElementById('score-container'); // Make sure this exists in your HTML
    const scoreMessage = document.getElementById('score-message'); // Make sure this exists in your HTML
    const tryAgainButton = document.getElementById('try-again-btn'); // The Try Again button

    totalQuestionsElement.textContent = quizData.length.toString();

    function clearOptions() {
        optionsElement.innerHTML = '';
    }

    function updateQuestion() {
        const question = quizData[currentQuestionIndex];
        questionElement.textContent = question.question;
        questionNumberElement.textContent = (currentQuestionIndex + 1).toString();
        clearOptions();
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => selectOption(option, index, button);
            optionsElement.appendChild(button);
        });

        backButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
        nextButton.style.display = 'block';
        scoreContainer.style.display = "none"; // Hide score container when showing a new question
    }

    function selectOption(option, index, button) {
        if (!answersSelected[currentQuestionIndex]) {
            if (option === quizData[currentQuestionIndex].correctAnswer) {
                correctAnswersCount++;
                button.classList.add('correct');
                answersSelected[currentQuestionIndex] = true;
            } else {
                button.classList.add('incorrect');
                const correctIndex = quizData[currentQuestionIndex].options.findIndex(opt => opt === quizData[currentQuestionIndex].correctAnswer);
                optionsElement.children[correctIndex].classList.add('correct');
            }
            optionsElement.childNodes.forEach(child => child.disabled = true); // Disable all buttons after selection
        }
    }

    function showScore() {
        const scorePercent = (correctAnswersCount / quizData.length) * 100;
        let message = `Your score: ${correctAnswersCount} out of ${quizData.length} (${scorePercent.toFixed(2)}%)`;
        if (scorePercent > 69) {
            message += "<br><br> Congrats!!! Proud of you!!";
        }
        scoreMessage.innerHTML = message;
        scoreContainer.style.display = "block";
        tryAgainButton.style.display = "block"; // Show the Try Again button
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        answersSelected.fill(false);
        updateQuestion(); // Show the first question again
        scoreContainer.style.display = "none"; // Hide the score container
    }

    tryAgainButton.addEventListener('click', resetQuiz);

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            updateQuestion();
        } else {
            questionElement.textContent = "Quiz completed!";
            clearOptions();
            nextButton.style.display = 'none';
            backButton.style.display = 'none';
            showScore();
        }
    });

    backButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateQuestion();
        }
    });

    updateQuestion(); // Initialize the first question
});


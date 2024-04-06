document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "What is the electric field E due to a thin spherical shell of uniform surface charge density σ for points outside the shell (r ≥ R)?",
            options: [
                "A) E = σ/(2ε₀r²)",
                "B) E = q/(2πε₀r²)",
                "C) E = q/(4πε₀r²)",
                "D) E = σε₀r"
            ],
            correctAnswer: "C) E = q/(4πε₀r²)"
        },
        {
            question: "Coulomb's Law describes the force between two point charges. What is the formula for this force?",
            options: [
                "A) F = kq₁q₂/r",
                "B) F = k(q₁+q₂)/r²",
                "C) F = kq₁q₂/r²",
                "D) F = kq₁q₂/r²"
            ],
            correctAnswer: "C) F = kq₁q₂/r²"
        },
        {
            question: "In the equatorial plane of an electric dipole, the electric field E for r ≫ a (where a is the separation between the charges of the dipole) is approximately:",
            options: [
                "A) E = -p/(2πε₀r³)",
                "B) E = -p/(4πε₀r²)",
                "C) E = -p/(4πε₀r³)",
                "D) E = 2p/(4πε₀r³)"
            ],
            correctAnswer: "C) E = -p/(4πε₀r³)"
        },
        {
            question: "What is the electric field E inside a conductor in electrostatic equilibrium?",
            options: [
                "A) E = σ/ε₀",
                "B) E = 0",
                "C) E = q/(4πε₀r²)",
                "D) E = λ/(2πε₀r)"
            ],
            correctAnswer: "B) E = 0"
        },
        {
            question: "The electric field E due to an infinite thin plane sheet of uniform surface charge density σ is directed:",
            options: [
                "A) Perpendicular to the plane, outward on both sides.",
                "B) Parallel to the plane, in the direction of increasing σ.",
                "C) In a circular pattern around the plane.",
                "D) Towards the center of the plane."
            ],
            correctAnswer: "A) Perpendicular to the plane, outward on both sides."
        },
        {
            question: "What is the formula for the electric field E at a point due to a point charge q?",
            options: [
                "A) E = kq/r",
                "B) E = kq/r^2",
                "C) E = q/(4πε₀r)",
                "D) E = kq/r^3"
            ],
            correctAnswer: "B) E = kq/r^2"
        },
        {
            question: "How does the electric field E due to an infinitely long straight wire with uniform linear charge density λ at a distance r from the wire, relate to r?",
            options: [
                "A) E = λ/r",
                "B) E = λ/(2πε₀r)",
                "C) E = λr",
                "D) E = 2λ/(πε₀r^2)"
            ],
            correctAnswer: "B) E = λ/(2πε₀r)"
        },
        {
            question: "What is the electric field E due to an infinite plane sheet of uniform surface charge density σ?",
            options: [
                "A) E = σ/ε₀",
                "B) E = σ/(2ε₀)",
                "C) E = 2πσ/ε₀",
                "D) E = σε₀"
            ],
            correctAnswer: "B) E = σ/(2ε₀)"
        },
        {
            question: "For an electric dipole in a uniform electric field, the torque τ experienced by the dipole is given by:",
            options: [
                "A) τ = pE",
                "B) τ = p + E",
                "C) τ = p × E",
                "D) τ = p/E"
            ],
            correctAnswer: "C) τ = p × E"
        },
        {
            question: "The electric flux Δϕ through a small area element ΔS in the presence of an electric field E is given by:",
            options: [
                "A) Δϕ = E + ΔS",
                "B) Δϕ = E - ΔS",
                "C) Δϕ = E ⋅ ΔS",
                "D) Δϕ = E/ΔS"
            ],
            correctAnswer: "C) Δϕ = E ⋅ ΔS"
        },
        {
            question: "What is the formula for the electric potential V(r) due to a point charge Q at a distance r?",
            options: [
                "A) V(r) = Q/(2πε₀r)",
                "B) V(r) = 2Q/(4πε₀r)",
                "C) V(r) = Q/(4πε₀r)",
                "D) V(r) = Q/(πε₀r)"
            ],
            correctAnswer: "C) V(r) = Q/(4πε₀r)"
        },
        {
            question: "The electrostatic potential V(r) at a point with position vector r due to a point dipole of dipole moment p placed at the origin is given by:",
            options: [
                "A) V(r) = p⋅r/(4πε₀r³)",
                "B) V(r) = p⋅r/(4πε₀r²)",
                "C) V(r) = r⋅p/(πε₀r)",
                "D) V(r) = 2p⋅r/(4πε₀r)"
            ],
            correctAnswer: "A) V(r) = p⋅r/(4πε₀r³)"
        },
        {
            question: "The potential energy U of two charges q₁ and q₂, separated by distance r₁₂, is given by:",
            options: [
                "A) U = q₁q₂/(4πε₀r₁₂)",
                "B) U = 2q₁q₂/(4πε₀r₁₂)",
                "C) U = (q₁+q₂)/(4πε₀r₁₂)",
                "D) U = q₁q₂/(2πε₀r₁₂)"
            ],
            correctAnswer: "A) U = q₁q₂/(4πε₀r₁₂)"
        },
        {
            question: "The capacitance C of a parallel plate capacitor with a vacuum between the plates is given by:",
            options: [
                "A) C = ε₀A/d",
                "B) C = 2ε₀A/d",
                "C) C = Aε₀/d",
                "D) C = ε₀A+d"
            ],
            correctAnswer: "A) C = ε₀A/d"
        },
        {
            question: "For capacitors connected in series, the total capacitance C is given by:",
            options: [
                "A) C = C₁ + C₂ + C₃ + ...",
                "B) 1/C = 1/C₁ + 1/C₂ + 1/C₃ + ...",
                "C) C = C₁⋅C₂⋅C₃⋅...",
                "D) 1/C = C₁⋅C₂⋅C₃⋅..."
            ],
            correctAnswer: "B) 1/C = 1/C₁ + 1/C₂ + 1/C₃ + ..."
        },
        {
            question: "The energy U stored in a capacitor of capacitance C, with charge Q and voltage V, is given by:",
            options: [
                "A) U = 1/2 QV",
                "B) U = QV",
                "C) U = Q²/(2C)",
                "D) Both A and C are correct."
            ],
            correctAnswer: "D) Both A and C are correct."
        },
        {
            question: "The potential difference ϕ(r) − ϕ(R) between the inside and outside of a spherical shell is given by:",
            options: [
                "A) ϕ(r) − ϕ(R) = q/(4πε₀(1/r₀ - 1/R))",
                "B) ϕ(r) − ϕ(R) = q/(4πε₀(1/R - 1/r₀))",
                "C) ϕ(r) − ϕ(R) = q/(2πε₀(1/r₀ - 1/R))",
                "D) ϕ(r) − ϕ(R) = 2q/(4πε₀(1/r₀ - 1/R))"
            ],
            correctAnswer: "A) ϕ(r) − ϕ(R) = q/(4πε₀(1/r₀ - 1/R))"
        },
         {
    question: "The potential at a point P due to a charge configuration q1, q2, …, qn with position vectors r1, r2, …, rn is given by the superposition principle. Which of the following represents this principle correctly?",
    options: [
        "A) V = 1/(4πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)",
        "B) V = 1/(4πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)",
        "C) V = 4πε₀ * (q1/r1p + q2/r2p + … + qn/rnp)",
        "D) V = 1/(2πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)"
    ],
    correctAnswer: "A) V = 1/(4πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)"
},
{
    question: "The potential energy (PE) of a charge q in an external potential V(r) is given by:",
    options: [
        "A) PE = q + V(r)",
        "B) PE = qV(r)",
        "C) PE = qV(r)",
        "D) PE = q - V(r)"
    ],
    correctAnswer: "B) PE = qV(r)"
},
{
    question: "The potential energy (PE) of a dipole of dipole moment p in a uniform electric field E is given by:",
    options: [
        "A) PE = p ⋅ E",
        "B) PE = -p ⋅ E",
        "C) PE = p + E",
        "D) PE = p / E"
    ],
    correctAnswer: "B) PE = -p ⋅ E"
},
{
    question: "For capacitors connected in parallel, the total capacitance C is given by:",
    options: [
        "A) C = C₁ ⋅ C₂ ⋅ C₃ ⋅ …",
        "B) 1/C = 1/C₁ + 1/C₂ + 1/C₃ + …",
        "C) C = C₁ + C₂ + C₃ + …",
        "D) 1/C = C₁ ⋅ C₂ ⋅ C₃ ⋅ …"
    ],
    correctAnswer: "C) C = C₁ + C₂ + C₃ + …"
},
{
    question: "The electric energy density ρ in a region with electric field E is given by:",
    options: [
        "A) ρ = 1/2 ε₀E",
        "B) ρ = ε₀E²",
        "C) ρ = 1/2 ε₀E²",
        "D) ρ = 2ε₀E²"
    ],
    correctAnswer: "C) ρ = 1/2 ε₀E²"
},
{
    question: "The potential at a point P due to a charge configuration q1, q2, …, qn with position vectors r1, r2, …, rn is given by the superposition principle. Which of the following represents this principle correctly?",
    options: [
        "A) V = 1/(4πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)",
        "B) V = 1/(4πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)",
        "C) V = 4πε₀ * (q1/r1p + q2/r2p + … + qn/rnp)",
        "D) V = 1/(2πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)"
    ],
    correctAnswer: "A) V = 1/(4πε₀) * (q1/r1p + q2/r2p + … + qn/rnp)"
},
{
    question: "The potential energy (PE) of a charge q in an external potential V(r) is given by:",
    options: [
        "A) PE = q + V(r)",
        "B) PE = qV(r)",
        "C) PE = qV(r)",
        "D) PE = q - V(r)"
    ],
    correctAnswer: "B) PE = qV(r)"
},
{
    question: "The potential energy (PE) of a dipole of dipole moment p in a uniform electric field E is given by:",
    options: [
        "A) PE = p ⋅ E",
        "B) PE = -p ⋅ E",
        "C) PE = p + E",
        "D) PE = p / E"
    ],
    correctAnswer: "B) PE = -p ⋅ E"
},
{
    question: "For capacitors connected in parallel, the total capacitance C is given by:",
    options: [
        "A) C = C₁ ⋅ C₂ ⋅ C₃ ⋅ …",
        "B) 1/C = 1/C₁ + 1/C₂ + 1/C₃ + …",
        "C) C = C₁ + C₂ + C₃ + …",
        "D) 1/C = C₁ ⋅ C₂ ⋅ C₃ ⋅ …"
    ],
    correctAnswer: "C) C = C₁ + C₂ + C₃ + …"
},
{
    question: "The electric energy density ρ in a region with electric field E is given by:",
    options: [
        "A) ρ = 1/2 ε₀E",
        "B) ρ = ε₀E²",
        "C) ρ = 1/2 ε₀E²",
        "D) ρ = 2ε₀E²"
    ],
    correctAnswer: "C) ρ = 1/2 ε₀E²"
},
{
    question: "What is the expression for the Lorentz force F on a charge q moving with velocity v in the presence of magnetic (B) and electric fields (E)?",
    options: [
        "A) F = q(v + B + E)",
        "B) F = q(v × E)",
        "C) F = q(E + v × B)",
        "D) F = q(v − B + E)"
    ],
    correctAnswer: "C) F = q(E + v × B)"
},
{
    question: "The force F on a straight conductor of length λ carrying a steady current I placed in a uniform external magnetic field B is given by:",
    options: [
        "A) F = Iλ × B",
        "B) F = I(λ + B)",
        "C) F = IλB",
        "D) F = λ × B"
    ],
    correctAnswer: "A) F = Iλ × B"
},
{
    question: "What is the cyclotron frequency νc of a charge q executing a circular orbit in a magnetic field B?",
    options: [
        "A) νc = qB / πm",
        "B) νc = qB / 2πm",
        "C) νc = 2qB / πm",
        "D) νc = qB / m"
    ],
    correctAnswer: "B) νc = qB / 2πm"
},
{
    question: "According to the Biot-Savart Law, the magnetic field dB due to a current element Idλ at a point P is given by:",
    options: [
        "A) dB = μ₀Idλ × r / 4πr³",
        "B) dB = μ₀Idλ / 4πr²",
        "C) dB = μ₀Idλr",
        "D) dB = μ₀Idλ + r / 4πr²"
    ],
    correctAnswer: "A) dB = μ₀Idλ × r / 4πr³"
},
{
    question: "What is the magnetic field B at the center of a circular coil of radius R carrying a current I?",
    options: [
        "A) B = μ₀I / 2R",
        "B) B = μ₀I / R",
        "C) B = μ₀I / R",
        "D) B = 2μ₀I / R"
    ],
    correctAnswer: "A) B = μ₀I / 2R"
},
{
    question: "Ampere’s Circuital Law, when applied to a closed loop C bounding an open surface S, states:",
    options: [
        "A) ∮B⋅dλ = μ₀I",
        "B) B⋅L = μ₀Ie",
        "C) Both A and B are correct.",
        "D) Neither A nor B is correct."
    ],
    correctAnswer: "C) Both A and B are correct."
},
{
    question: "The magnetic field B at a distance R from a long, straight wire carrying a current I is:",
    options: [
        "A) B = μ₀I / 2πR",
        "B) B = 2μ₀I / πR",
        "C) B = μ₀I / R",
        "D) B = μ₀I / R"
    ],
    correctAnswer: "A) B = μ₀I / 2πR"
},
{
    question: "The magnetic moment m of a planar loop carrying a current I, having N closely wound turns, and an area A, is:",
    options: [
        "A) m = NI",
        "B) m = NIA",
        "C) m = NIA",
        "D) m = IA"
    ],
    correctAnswer: "B) m = NIA"
},
{
    question: "What is the equilibrium deflection Φ in a moving coil galvanometer, when the torque due to a magnetic field is balanced by a counter-torque from a spring?",
    options: [
        "A) kΦ = NIAB",
        "B) Φ = NIA / kB",
        "C) kΦ = NIA / B",
        "D) kΦ = NIA / AB"
    ],
    correctAnswer: "A) kΦ = NIAB"
},
{
    question: "The smallest value of the magnetic moment μλ due to an electron circulating around the nucleus, called the Bohr magneton (μB), is:",
    options: [
        "A) μB = 9.27 × 10⁻²⁴ J/T",
        "B) μλ = eλ / 2m",
        "C) Both A and B correctly describe different aspects of the magnetic moment.",
        "D) Neither A nor B is correct."
    ],
    correctAnswer: "C) Both A and B correctly describe different aspects of the magnetic moment."
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
    
    
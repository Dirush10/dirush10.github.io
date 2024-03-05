document.addEventListener('DOMContentLoaded', () => {
        const quizData = [
            {
                question: "The cause of the potential barrier in a p−n diode is:",
                options: [
                    "depletion of positive charges near the junction",
                    "concentration of positive charges near the junction",
                    "depletion of negative charges near the junction",
                    "concentration of positive and negative charges near the junction"
                ],
                correctAnswer: "concentration of positive charges near the junction"
            },
            {
                question: "A semi-conducting device is connected in a series in circuit with a battery and a resistance. A current is allowed to pass through the circuit. If the polarity of the battery is reversed, the current drops to almost zero. The device may be:",
                options: [
                    "a p−n junction",
                    "an intrinsic semiconductor",
                    "a p−type semiconductor",
                    "an n−type semiconductor"
                ],
                correctAnswer: "a p−n junction"
            },
            {
                question: "The transfer ratio β of a transistor is 50. The input resistance of the transistor when used in the common emitter configuration is 1kΩ. The peak value of the collector AC current for an AC input voltage of 0.01 V peak is:",
                options: [
                    "100μA",
                    "0.01mA",
                    "0.25mA",
                    "500μA"
                ],
                correctAnswer: "500μA"
            },
            {
                question: "Which one of the following gates will have an output of 1?",
                options: [
                    "Option A", // Options were not provided
                    "Option B", // Replace these placeholders as needed
                    "Option C",
                    "Option D"
                ],
                correctAnswer: "Option C" // Adjust based on the actual correct option
            },
            {
                question: "The truth table given below is for which gate?\nInput: A B C\nOutput:\n0 0 1\n0 1 1\n1 0 1\n1 1 0",
                options: [
                    "XOR",
                    "OR",
                    "AND",
                    "NAND"
                ],
                correctAnswer: "NAND"
            },
            {
                question: "Which of the following when added as an impurity into silicon produces n-type semiconductor?",
                options: [
                    "P",
                    "Al",
                    "B",
                    "Mg"
                ],
                correctAnswer: "P"
            },
            {
                question: "In a junction diode, the holes are due to:",
                options: [
                    "protons",
                    "extra electrons",
                    "neutrons",
                    "missing electrons"
                ],
                correctAnswer: "missing electrons"
            },
            {
                question: "Depletion layer consists of:",
                options: [
                    "electrons",
                    "protons",
                    "mobile charge carriers",
                    "immobile ions"
                ],
                correctAnswer: "immobile ions"
            },
            {
                question: "In forward bias, the width of depletion layer in a p-n junction diode:",
                options: [
                    "increases",
                    "decreases",
                    "remains constant",
                    "first increases then decreases"
                ],
                correctAnswer: "decreases"
            },
            {
                question: "In p-type semiconductor, the major charge carriers are:",
                options: [
                    "holes",
                    "electrons",
                    "protons",
                    "neutrons"
                ],
                correctAnswer: "holes"
            },
            {
                question: "Sodium has body centred packing. If the distance between two nearest atoms is 3.7Ao then the lattice parameter is:",
                options: [
                    "3.3Ao",
                    "3.9Ao",
                    "4.3Ao",
                    "4.8Ao"
                ],
                correctAnswer: "4.3Ao"
            },
            {
                question: "The following circuit represents:",
                options: [
                    "OR gate",
                    "XOR gate",
                    "AND gate",
                    "NAND gate"
                ],
                correctAnswer: "XOR gate"
            },
            {
                question: "If α and β are current gains in common-base and common-emitter configurations of a transistor, then β is equal to:",
                options: [
                    "1α",
                    "α/(1+α)",
                    "α/(1−α)",
                    "α−1/α"
                ],
                correctAnswer: "α/(1−α)"
            },
            {
                question: "The truth table given below:\nInputs: A B Y\n0 0 0\n1 0 0\n0 1 0\n1 1 1\nRepresents:",
                options: [
                    "AND gate",
                    "NOR gate",
                    "OR gate",
                    "NAND gate"
                ],
                correctAnswer: "AND gate"
            },
            {
                question: "In which of the following figures, junction diode is forward biased:",
                options: [
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D"
                ],
                correctAnswer: "Option B" // Placeholder, adjust as needed
            },
           
                {
                    question: "In a common-base configuration of a transistor ΔiC/ΔiE = 0.98, then the current gain in common emitter configuration of the transistor will be:",
                    options: ["49", "98", "4.9", "24.5"],
                    correctAnswer: "49"
                },
                {
                    question: "If the internal resistance of a cell is negligible, then the current flowing through the circuit is:",
                    options: ["350A", "550A", "450A", "250A"],
                    correctAnswer: "550A"
                },
                {
                    question: "The truth table given below represents:\nInput: A B Y\n1 1 0\n0 1 1\n1 0 1\n0 0 1",
                    options: ["NOT gate", "OR gate", "XOR gate", "NAND gate"],
                    correctAnswer: "NAND gate"
                },
                {
                    question: "In a bcc structure of lattice constant 'a', the minimum distance between atoms is:",
                    options: ["3/2×a", "2×a", "a/2", "a/√2"],
                    correctAnswer: "a/√2"
                },
                {
                    question: "The number of atoms per unit cell in a bcc lattice is:",
                    options: ["1", "2", "4", "9"],
                    correctAnswer: "2"
                },
                {
                    question: "For a transistor IC/IE = 0.96, the current gain in common-emitter configuration is",
                    options: ["6", "12", "24", "48"],
                    correctAnswer: "24"
                },
                {
                    question: "For conduction in a p−n junction, the biasing is:",
                    options: ["high potential on n-side and low potential on p-side", "high potential on p-side and low potential on n-side", "same potential on both p and n-sides", "undetermined"],
                    correctAnswer: "high potential on p-side and low potential on n-side"
                },
                {
                    question: "For a given circuit of an ideal p−n junction diode, which of the following is correct?",
                    options: ["In forward biasing the voltage across R is V", "In reverse biasing the voltage across R Is 2V", "In forward biasing the voltage across R is 2V", "In reverse biasing the voltage across R is 2V"],
                    correctAnswer: "In forward biasing the voltage across R is V"
                },
                {
                    question: "The truth table for a logic gate is:\nInput: A B Y\n1 1 0\n0 1 1\n1 0 1\n0 0 1\nThe logic gate is:",
                    options: ["NAND gate", "XOR gate", "NOR gate", "OR gate"],
                    correctAnswer: "NAND gate"
                },
                {
                    question: "Reverse bias applied to a junction diode:",
                    options: ["increases the majority carrier current", "increases the minority carrier current", "lowers the potential barrier", "raises the potential barrier"],
                    correctAnswer: "raises the potential barrier"
                },

             
                    {
                        question: "Following diagram performs the logic function of:",
                        options: ["OR gate", "AND gate", "XOR gate", "NAND gate"],
                        correctAnswer: "AND gate"
                    },
                    {
                        question: "Barrier potential of a p−n junction diode does not depend on:",
                        options: ["forward bias", "doping density", "diode design", "temperature"],
                        correctAnswer: "diode design"
                    },
                    {
                        question: "If a full wave rectifier circuit is operating from 50 Hz mains, the fundamental frequency in the ripple will be:",
                        options: ["70.7 Hz", "100 Hz", "25 Hz", "59 Hz"],
                        correctAnswer: "100 Hz"
                    },
                    {
                        question: "A n−p−n transistor conducts when:",
                        options: [
                            "collector is positive and emitter is at same potential as the base",
                            "both collector and emitter are negative with respect to the base",
                            "both collector and emitter are positive with respect to the base",
                            "collector is positive and emitter is negative with respect to the base"
                        ],
                        correctAnswer: "collector is positive and emitter is negative with respect to the base"
                    },
                    {
                        question: "In semiconductors at room temperature:",
                        options: [
                            "the valence band is partially empty and the conduction band is partially filled",
                            "the valence band is completely filled and the conduction band is partially filled",
                            "the valence band is completely filled",
                            "the conduction band is completely empty"
                        ],
                        correctAnswer: "the valence band is partially empty and the conduction band is partially filled"
                    },
                    {
                        question: "The output of OR gate is 1:",
                        options: [
                            "only if both inputs are zero",
                            "if either or both inputs are 1",
                            "only if both inputs are 1",
                            "if either input is zero"
                        ],
                        correctAnswer: "if either or both inputs are 1"
                    },
                    {
                        question: "In a p−n junction photocell, the value of the photo-electromotive force produced by monochromatic light is proportional to:",
                        options: [
                            "the barrier voltage at the p−n junction",
                            "the intensity of the light falling on the cell",
                            "the frequency of the light falling on the cell",
                            "the voltage applied at the p−n junction"
                        ],
                        correctAnswer: "the intensity of the light falling on the cell"
                    },
                    {
                        question: "Of the diodes shown in the following diagrams, which one is reverse biased:",
                        options: [
                            "path/to/diodeA.png",
                            "path/to/diodeB.png",
                            "path/to/diodeC.png", // This one is the correct answer
                            "path/to/diodeD.png"
                        ],
                        correctAnswer: "path/to/diodeC.png"
                    },
                    {
                        question: "Application of a forward bias to a p−n junction:",
                        options: [
                            "increases the number of donors on the n-side",
                            "increases the electric field in the depletion zone",
                            "increases the potential difference across the depletion zone",
                            "widens the depletion zone"
                        ],
                        correctAnswer: "increases the number of donors on the n-side"
                    },
                    {
                        question: "Zener diode is used for:",
                        options: ["producing oscillations in an oscillator", "amplification", "stabilization", "rectification"],
                        correctAnswer: "stabilization"
                    },
                    {
                        question: "Carbon, silicon, and germanium atoms have four valence electrons each. Their valence and conduction bands are separated by energy band gaps represented by EgC, EgSi, and EgGe respectively. Which one of the following relationships is true in their case?",
                        options: [
                            "EgC > EgSi",
                            "EgC = EgSi",
                            "EgC < EgGe",
                            "EgC < EgSi"
                        ],
                        correctAnswer: "EgC > EgSi"
                    },
                    {
                        question: "Choose the only false statement from the following:",
                        options: [
                            "Substances with an energy gap of the order of 10 eV are insulators.",
                            "The conductivity of a semiconductor increases with an increase in temperature.",
                            "In conductors, the valence and conduction bands may overlap.",
                            "The resistivity of a semiconductor increases with an increase in temperature."
                        ],
                        correctAnswer: "The resistivity of a semiconductor increases with an increase in temperature."
                    },
                    {
                        question: "Copper has a face-centered cubic (fcc) lattice with interatomic spacing equal to 2.54Ao. The value of the lattice constant for this lattice is:",
                        options: ["1.27Ao", "5.08Ao", "2.54Ao", "3.59Ao"],
                        correctAnswer: "3.59Ao"
                    },
                    {
                        question: "A transistor-oscillator using a resonant circuit with an inductor L (of negligible resistance) and a capacitor C in series produce oscillations of frequency f. If L is doubled and C is changed to 4C, the frequency will be:",
                        options: ["f/4", "8f", "f/2√2", "f/2"],
                        correctAnswer: "f/2√2"
                    },
                    {
                        question: "A transistor is operated in a common emitter configuration at constant collector voltage Vc=1.5 V such that a change in the base current from 100μA to 150μA produces a change in the collector current from 5 mA to 10 mA. The current gain (β) is:",
                        options: ["67", "75", "100", "50"],
                        correctAnswer: "100"
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
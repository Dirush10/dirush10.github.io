document.addEventListener('DOMContentLoaded', () => {

       const quizData = [
    {
        question: "Rutherford’s Model of the Atom: According to Rutherford's gold foil experiment, the nucleus of an atom is:",
        options: [
            "A) Negatively charged and located at the center of the atom",
            "B) Positively charged and occupies a large volume of the atom",
            "C) Positively charged and located at the center of the atom",
            "D) Uniformly distributed throughout the atom"
        ],
        correctAnswer: "C) Positively charged and located at the center of the atom"
    },
    {
        question: "Bohr's Model: According to Bohr's model, electrons orbit the nucleus in:",
        options: [
            "A) Fixed paths with variable energy",
            "B) Random paths with fixed energy",
            "C) Fixed paths with fixed energy",
            "D) Random paths with variable energy"
        ],
        correctAnswer: "C) Fixed paths with fixed energy"
    },
    {
        question: "Energy Levels: The energy levels of electrons in an atom are:",
        options: [
            "A) Continuously distributed",
            "B) The same for all electrons",
            "C) Discrete and quantized",
            "D) Dependent on the electron's velocity"
        ],
        correctAnswer: "C) Discrete and quantized"
    },
    {
        question: "Spectral Lines: The discrete lines in the hydrogen spectrum are due to:",
        options: [
            "A) Electrons absorbing energy and jumping to higher energy levels",
            "B) Protons moving between energy levels",
            "C) Electrons moving from higher to lower energy levels",
            "D) Neutrons being released from the nucleus"
        ],
        correctAnswer: "C) Electrons moving from higher to lower energy levels"
    },
        {
            question: "Rutherford’s gold foil experiment led to the discovery that:",
            options: [
                "A) Atoms are mostly empty space",
                "B) Electrons orbit the nucleus in fixed paths",
                "C) Atoms are indivisible",
                "D) The nucleus is negatively charged"
            ],
            correctAnswer: "A) Atoms are mostly empty space"
        },
        {
            question: "In the Bohr model of the atom, electrons:",
            options: [
                "A) Orbit the nucleus in random paths",
                "B) Move in fixed orbits with quantized energies",
                "C) Are evenly distributed in the electron cloud",
                "D) Can move between orbits without emitting radiation"
            ],
            correctAnswer: "B) Move in fixed orbits with quantized energies"
        },
        {
            question: "Quantum numbers are used to describe:",
            options: [
                "A) The position of protons in the nucleus",
                "B) The exact trajectory of an electron around the nucleus",
                "C) The energy, shape, and orientation of electron orbitals",
                "D) The velocity of electrons in their orbits"
            ],
            correctAnswer: "C) The energy, shape, and orientation of electron orbitals"
        },
        {
            question: "The Pauli Exclusion Principle states that:",
            options: [
                "A) No two electrons in an atom can have the same four quantum numbers",
                "B) Electrons in atoms move in circular orbits",
                "C) Electrons repel each other within an atom",
                "D) Atoms cannot have more than 8 electrons in their outermost shell"
            ],
            correctAnswer: "A) No two electrons in an atom can have the same four quantum numbers"
        },
        {
            question: "Electron configurations affect the chemical properties of elements because they determine:",
            options: [
                "A) The size of the nucleus",
                "B) The distribution of neutrons in the atom",
                "C) The atom’s ability to bond with other atoms",
                "D) The mass of the atom"
            ],
            correctAnswer: "C) The atom’s ability to bond with other atoms"
        },
        {
            question: "Spectral lines in the hydrogen atom are due to:",
            options: [
                "A) Electrons moving between energy levels",
                "B) Protons moving between energy levels",
                "C) Neutrons being emitted or absorbed",
                "D) The nucleus changing its state"
            ],
            correctAnswer: "A) Electrons moving between energy levels"
        },
        {
            question: "Ionization energy is:",
            options: [
                "A) The energy required to remove the most loosely bound electron from an atom",
                "B) The energy released when an electron is added to a neutral atom",
                "C) The energy needed to break down the nucleus into protons and neutrons",
                "D) The energy required to move an electron within its current orbital"
            ],
            correctAnswer: "A) The energy required to remove the most loosely bound electron from an atom"
        },
        {
            question: "The Schrödinger equation is significant in atomic theory because it:",
            options: [
                "A) Validates the Bohr model of the atom",
                "B) Describes the behavior of electrons in orbitals as wavefunctions",
                "C) Predicts the exact location of electrons in an atom",
                "D) Determines the mass of the electron"
            ],
            correctAnswer: "B) Describes the behavior of electrons in orbitals as wavefunctions"
        },
        {
            question: "Which of the following best describes isotopes?",
            options: [
                "A) Atoms with the same number of protons but different numbers of electrons",
                "B) Atoms of the same element with different numbers of neutrons",
                "C) Atoms of different elements with the same number of neutrons",
                "D) Atoms that share the same electron configuration"
            ],
            correctAnswer: "B) Atoms of the same element with different numbers of neutrons"
        },
        {
            question: "The principal quantum number (n):",
            options: [
                "A) Specifies the shape of an electron's orbital",
                "B) Indicates the main energy level of the electron in the atom",
                "C) Determines the electron's spin direction",
                "D) Describes the electron's orientation in space"
            ],
            correctAnswer: "B) Indicates the main energy level of the electron in the atom"
        },
        {
            question: "Angular momentum quantum number (l) indicates the:",
            options: [
                "A) Size of the electron cloud",
                "B) Shape of the orbital",
                "C) Orientation of the orbital in space",
                "D) Spin of the electron"
            ],
            correctAnswer: "B) Shape of the orbital"
        },
        {
            question: "Which series in the hydrogen spectrum is in the visible light range?",
            options: [
                "A) Lyman",
                "B) Balmer",
                "C) Paschen",
                "D) Brackett"
            ],
            correctAnswer: "B) Balmer"
        },
        {
            question: "The Aufbau principle explains:",
            options: [
                "A) The process by which protons are added to the nucleus",
                "B) The sequential filling of electron orbitals",
                "C) The repulsion between electrons in an atom",
                "D) The structure of the periodic table"
            ],
            correctAnswer: "B) The sequential filling of electron orbitals"
        },
        {
            question: "Hund’s Rule states that electrons fill orbitals:",
            options: [
                "A) Of the lowest energy first",
                "B) One at a time before pairing up",
                "C) Based on their spin direction",
                "D) According to the electron's mass"
            ],
            correctAnswer: "B) One at a time before pairing up"
        },
        {
            question: "The Zeeman effect occurs when:",
            options: [
                "A) An atom is placed in a magnetic field, causing a splitting of spectral lines",
                "B) An atom absorbs energy, causing an electron to jump to a higher energy level",
                "C) An atom emits energy, causing an electron to fall to a lower energy level",
                "D) An atom's electrons move to higher energy levels without absorbing energy"
            ],
            correctAnswer: "A) An atom is placed in a magnetic field, causing a splitting of spectral lines"
        },
        {
            question: "Valence electrons are:",
            options: [
                "A) The electrons in the highest occupied energy level of an atom",
                "B) Electrons that are involved in bonding",
                "C) Both A and B",
                "D) None of the above"
            ],
            correctAnswer: "C) Both A and B"
        },
            {
                question: "What is the primary conclusion of the photoelectric effect?",
                options: [
                    "A) Light is always a wave.",
                    "B) Light behaves only as a particle.",
                    "C) Light can exhibit both wave-like and particle-like properties.",
                    "D) The energy of electrons is quantized."
                ],
                correctAnswer: "C) Light can exhibit both wave-like and particle-like properties."
            },
            {
                question: "Which of the following phenomena is evidence for the particle nature of light?",
                options: [
                    "A) Diffraction",
                    "B) Interference",
                    "C) Photoelectric effect",
                    "D) Polarization"
                ],
                correctAnswer: "C) Photoelectric effect"
            },
            {
                question: "The work function of a metal is the energy:",
                options: [
                    "A) Needed to remove an electron from the nucleus.",
                    "B) Required to break a metal into its constituent ions.",
                    "C) Required to remove the most loosely bound electron from the surface of the metal.",
                    "D) Of the highest energy photon emitted by the metal."
                ],
                correctAnswer: "C) Required to remove the most loosely bound electron from the surface of the metal."
            },
            {
                question: "According to de Broglie, particles of matter have wave properties, which is demonstrated by:",
                options: [
                    "A) The photoelectric effect",
                    "B) Electron diffraction",
                    "C) X-ray diffraction",
                    "D) The Compton effect"
                ],
                correctAnswer: "B) Electron diffraction"
            },
            {
                question: "The kinetic energy of an electron emitted in photoelectric effect can be increased by increasing the:",
                options: [
                    "A) Intensity of the incident light.",
                    "B) Wavelength of the incident light.",
                    "C) Frequency of the incident light above the threshold frequency.",
                    "D) Work function of the metal."
                ],
                correctAnswer: "C) Frequency of the incident light above the threshold frequency."
            },
            {
                question: "Which statement is true regarding the photoelectric effect?",
                options: [
                    "A) The number of photoelectrons ejected is proportional to the frequency of the incident light.",
                    "B) The maximum kinetic energy of the ejected photoelectrons is independent of the intensity of the incident light.",
                    "C) The photoelectric effect can occur even if the incident light's frequency is below the threshold frequency, given sufficient intensity.",
                    "D) Electrons are ejected after a noticeable delay following the light's incidence."
                ],
                correctAnswer: "B) The maximum kinetic energy of the ejected photoelectrons is independent of the intensity of the incident light."
            },
            {
                question: "The phenomenon that best supports the wave nature of electrons is:",
                options: [
                    "A) The photoelectric effect",
                    "B) X-ray production",
                    "C) Electron diffraction",
                    "D) Radioactive decay"
                ],
                correctAnswer: "C) Electron diffraction"
            },
            {
                question: "Heisenberg's uncertainty principle implies that:",
                options: [
                    "A) It is impossible to determine the exact position and exact momentum of an electron simultaneously.",
                    "B) The path of an electron in an atom can be precisely calculated.",
                    "C) Electrons move in predictable orbits.",
                    "D) The momentum of an electron is uncertain because of its wave nature."
                ],
                correctAnswer: "A) It is impossible to determine the exact position and exact momentum of an electron simultaneously."
            },
            {
                question: "The stopping potential in a photoelectric effect experiment is dependent on the:",
                options: [
                    "A) Intensity of the incident light.",
                    "B) Work function of the metal.",
                    "C) Frequency of the incident light.",
                    "D) Angle of incidence of the light on the metal surface."
                ],
                correctAnswer: "C) Frequency of the incident light."
            },
            {
                question: "Planck's constant (h) is a fundamental constant that appears in the equation for:",
                options: [
                    "A) The energy levels of an atom.",
                    "B) The kinetic energy of photoelectrons.",
                    "C) The wavelength of matter waves.",
                    "D) Both B and C."
                ],
                correctAnswer: "D) Both B and C."
            },
          
                {
                    question: "Einstein's Photoelectric Equation: The kinetic energy of photoelectrons emitted from a surface can be calculated using:",
                    options: [
                        "A) hf = φ + KE_max, where φ is the work function",
                        "B) KE_max = hf + φ",
                        "C) hf = KE_max - φ",
                        "D) KE_max = φ - hf"
                    ],
                    correctAnswer: "A) hf = φ + KE_max, where φ is the work function"
                },
                {
                    question: "Intensity of Radiation: In the photoelectric effect, the intensity of incident light primarily affects the:",
                    options: [
                        "A) Threshold frequency",
                        "B) Number of photoelectrons emitted",
                        "C) Work function of the metal",
                        "D) Maximum kinetic energy of emitted electrons"
                    ],
                    correctAnswer: "B) Number of photoelectrons emitted"
                },
                {
                    question: "Heisenberg Uncertainty Principle: This principle implies that it is impossible to simultaneously determine the exact:",
                    options: [
                        "A) Velocity and position of an electron",
                        "B) Energy and mass of an electron",
                        "C) Position and charge of an electron",
                        "D) Wavelength and frequency of an electron"
                    ],
                    correctAnswer: "A) Velocity and position of an electron"
                },
                {
                    question: "Compton Effect: The Compton effect provides evidence for:",
                    options: [
                        "A) The particle nature of light",
                        "B) The wave nature of light",
                        "C) The dual nature of electromagnetic radiation",
                        "D) The stationary nature of electrons"
                    ],
                    correctAnswer: "A) The particle nature of light"
                },
                {
                    question: "Photoelectric Effect Threshold Frequency: The threshold frequency is the minimum frequency required to:",
                    options: [
                        "A) Increase the intensity of light",
                        "B) Decrease the kinetic energy of emitted electrons",
                        "C) Emit electrons from a metal surface",
                        "D) Increase the wavelength of light"
                    ],
                    correctAnswer: "C) Emit electrons from a metal surface"
                },
                {
                    question: "De Broglie Wavelength: According to de Broglie, the wavelength associated with a moving particle is:",
                    options: [
                        "A) Directly proportional to its velocity",
                        "B) Inversely proportional to its mass",
                        "C) Inversely proportional to its momentum",
                        "D) Directly proportional to its kinetic energy"
                    ],
                    correctAnswer: "C) Inversely proportional to its momentum"
                },
                {
                    question: "Wave-Particle Duality: Which experiment demonstrates the wave nature of electrons?",
                    options: [
                        "A) Gold foil experiment",
                        "B) Photoelectric effect",
                        "C) Electron diffraction",
                        "D) Compton scattering"
                    ],
                    correctAnswer: "C) Electron diffraction"
                },
                {
                    question: "Work Function: The work function of a material is the energy required to:",
                    options: [
                        "A) Break its chemical bonds",
                        "B) Emit a photon",
                        "C) Release an electron from its surface",
                        "D) Increase its temperature"
                    ],
                    correctAnswer: "C) Release an electron from its surface"
                },
                {
                    question: "Planck's Quantum Theory: According to Planck's quantum theory, energy is emitted or absorbed in:",
                    options: [
                        "A) Continuous manner",
                        "B) Discrete packets called quanta",
                        "C) Waves with constant amplitude",
                        "D) Particles with variable energy"
                    ],
                    correctAnswer: "B) Discrete packets called quanta"
                },
                {
                    question: "Threshold Wavelength: The threshold wavelength is defined as the maximum wavelength of light that can:",
                    options: [
                        "A) Pass through a transparent material",
                        "B) Cause photoelectric emission",
                        "C) Be absorbed by a metal",
                        "D) Reflect off a surface"
                    ],
                    correctAnswer: "B) Cause photoelectric emission"
                },
                {
                    question: "Davisson-Germer Experiment: The Davisson-Germer experiment provided evidence for the:",
                    options: [
                        "A) Particle nature of electrons",
                        "B) Wave nature of electrons",
                        "C) Invariability of electron mass with speed",
                        "D) Existence of neutrons"
                    ],
                    correctAnswer: "B) Wave nature of electrons"
                },
                {
                    question: "Photons: A photon is:",
                    options: [
                        "A) A particle with mass and charge",
                        "B) A quantum of electromagnetic energy",
                        "C) A type of subatomic particle found in the nucleus",
                        "D) A wave packet with variable frequency"
                    ],
                    correctAnswer: "B) A quantum of electromagnetic energy"
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
            }
        
            function selectOption(option, index, button) {
                if (answersSelected[currentQuestionIndex] === false) { // Check if the question was not previously answered correctly
                    if (option === quizData[currentQuestionIndex].correctAnswer) {
                        correctAnswersCount++;
                        answersSelected[currentQuestionIndex] = true; // Mark as answered correctly
                        button.classList.add('correct');
                    } else {
                        button.classList.add('incorrect');
                        const correctIndex = quizData[currentQuestionIndex].options.indexOf(quizData[currentQuestionIndex].correctAnswer);
                        optionsElement.children[correctIndex].classList.add('correct');
                    }
                }
                optionsElement.childNodes.forEach(child => child.disabled = true); // Disable all buttons after selection
            }
        
            function showScore() {
                const scorePercent = (correctAnswersCount / quizData.length) * 100;
                let message = `Your score: ${correctAnswersCount} out of ${quizData.length} (${scorePercent.toFixed(2)}%)`;
                if (scorePercent > 80) {
                    message += "<br><br>Proud of you, keep going. You're gonna rock!";
                }
                scoreMessage.innerHTML = message;
                scoreContainer.style.display = "block";
            }
        
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
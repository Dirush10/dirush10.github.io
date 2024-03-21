document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "What is the primary function of the ovaries in the female reproductive system?",
            options: [
                "A) Production of female gametes and several steroid hormones",
                "B) Transport of ovum to the uterus",
                "C) Site of fertilization",
                "D) Development and nurturing of the fetus"
            ],
            correctAnswer: "A) Production of female gametes and several steroid hormones"
        },
        {
            question: "The fimbriae are associated with which part of the female reproductive system?",
            options: [
                "A) Uterus",
                "B) Ovaries",
                "C) Fallopian tubes",
                "D) Cervix"
            ],
            correctAnswer: "C) Fallopian tubes"
        },
        {
            question: "Which layer of the uterus undergoes cyclical changes during the menstrual cycle?",
            options: [
                "A) Perimetrium",
                "B) Myometrium",
                "C) Endometrium",
                "D) Epimetrium"
            ],
            correctAnswer: "C) Endometrium"
        },
        {
            question: "The hymen can be torn by:",
            options: [
                "A) The first coitus only",
                "B) Sudden fall or active sports",
                "C) Childbirth",
                "D) Both A and B"
            ],
            correctAnswer: "D) Both A and B"
        },
        {
            question: "Mammary glands secrete milk, which is stored in:",
            options: [
                "A) Mammary ducts",
                "B) Alveoli lumens",
                "C) Mammary ampulla",
                "D) Lactiferous ducts"
            ],
            correctAnswer: "B) Alveoli lumens"
        },
        {
            question: "The scrotum is essential for spermatogenesis because it:",
            options: [
                "A) Increases the temperature around the testes",
                "B) Decreases the temperature around the testes by 2–2.5°C compared to the body's internal temperature",
                "C) Provides nutrition to the testes",
                "D) Protects the testes from external physical damage"
            ],
            correctAnswer: "B) Decreases the temperature around the testes by 2–2.5°C compared to the body's internal temperature"
        },
        {
            question: "Leydig cells are responsible for:",
            options: [
                "A) The production of sperms",
                "B) Providing nutrition to germ cells",
                "C) The synthesis and secretion of androgens",
                "D) The transportation of sperms to the epididymis"
            ],
            correctAnswer: "C) The synthesis and secretion of androgens"
        },
        {
            question: "Which of the following structures is directly involved in the maturation and storage of sperm?",
            options: [
                "A) Seminal vesicles",
                "B) Epididymis",
                "C) Urethra",
                "D) Vas deferens"
            ],
            correctAnswer: "B) Epididymis"
        },
        {
            question: "The function of the seminal plasma is to:",
            options: [
                "A) Produce sperms",
                "B) Support the fertilization process",
                "C) Provide a medium rich in fructose, calcium, and certain enzymes for sperm viability",
                "D) Store sperm"
            ],
            correctAnswer: "C) Provide a medium rich in fructose, calcium, and certain enzymes for sperm viability"
        },
        {
            question: "Gametogenesis in males results in the formation of:",
            options: [
                "A) Four diploid spermatids",
                "B) Four haploid spermatids",
                "C) Two diploid spermatocytes",
                "D) Two haploid spermatocytes"
            ],
            correctAnswer: "B) Four haploid spermatids"
        },
        {
            question: "Which hormone stimulates the Leydig cells to produce androgens?",
            options: [
                "A) Follicle-stimulating hormone (FSH)",
                "B) Luteinising hormone (LH)",
                "C) Gonadotropin-releasing hormone (GnRH)",
                "D) Testosterone"
            ],
            correctAnswer: "B) Luteinising hormone (LH)"
        },
        {
            question: "What structure in the sperm contains enzymes important for fertilizing the ovum?",
            options: [
                "A) Nucleus",
                "B) Acrosome",
                "C) Mitochondria",
                "D) Tail"
            ],
            correctAnswer: "B) Acrosome"
        },
        {
            question: "During oogenesis, primary oocytes are arrested in which phase of meiosis?",
            options: [
                "A) Metaphase I",
                "B) Prophase I",
                "C) Anaphase I",
                "D) Telophase I"
            ],
            correctAnswer: "B) Prophase I"
        },
        {
            question: "What results from the first meiotic division of the primary oocyte?",
            options: [
                "A) Two equal-sized haploid cells",
                "B) One large haploid secondary oocyte and one tiny first polar body",
                "C) Two large haploid secondary oocytes",
                "D) One secondary oocyte and two first polar bodies"
            ],
            correctAnswer: "B) One large haploid secondary oocyte and one tiny first polar body"
        },
        {
            question: "What is the significance of the secondary oocyte retaining most of the cytoplasm?",
            options: [
                "A) It enhances the oocyte's mobility.",
                "B) It provides necessary nutrients for the early stages of the embryo.",
                "C) It facilitates easier fertilization by the sperm.",
                "D) It increases the size of the first polar body."
            ],
            correctAnswer: "B) It provides necessary nutrients for the early stages of the embryo."
        },
        {
            question: "Which follicle stage is characterized by a fluid-filled cavity known as the antrum?",
            options: [
                "A) Primary follicle",
                "B) Secondary follicle",
                "C) Tertiary follicle",
                "D) Graafian follicle"
            ],
            correctAnswer: "C) Tertiary follicle"
        },
        {
            question: "What process follows the transformation of the tertiary follicle into the mature Graafian follicle?",
            options: [
                "A) Spermatogenesis",
                "B) Ovulation",
                "C) Fertilization",
                "D) Implantation"
            ],
            correctAnswer: "B) Ovulation"
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
    
    
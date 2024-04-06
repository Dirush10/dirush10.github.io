document.addEventListener('DOMContentLoaded', () => {
    const subjectContainer = document.getElementById('subject-container');
    const chapterContainer = document.getElementById('chapter-container');
    
    subjectContainer.addEventListener('click', (event) => {
        if (event.target.className.includes('subject-btn')) {
            const subject = event.target.getAttribute('data-subject');
            loadChapters(subject);
        }
    });
    
    function loadChapters(subject) {
        chapterContainer.innerHTML = ''; // Clear previous chapters
        const chapters = getChaptersForSubject(subject); // Function to get chapters based on the subject
        chapters.forEach((chapter) => {
            const button = document.createElement('button');
            button.className = 'chapter-btn';
            button.textContent = chapter.name;
            button.onclick = () => window.location.href = chapter.url; // Redirect to the quiz page for the chapter
            chapterContainer.appendChild(button);
        });
        chapterContainer.style.display = 'block'; // Show the chapter buttons
    }

    // Example function to get chapters based on the subject
    function getChaptersForSubject(subject) {
        const chapters = {
            physics: [
                { name: "Dual Nature of Radiation and Matter & Atoms", url: "physics-ch1.html" },
                { name: "Semi Conductors", url: "physics-ch2.html" },
                { name: "Physics Formulas 1", url:"physics-formula.html" },
                { name: "Physics Formulas 2",url:"physics-formula2.html"},
                // Add more chapters as needed
            ],
            chemistry: [
                { name: "Chapter 1: Atomic Structure", url: "chemistry-chapter1.html" },
                // Add more chapters as needed
            ],
            biology: [

                {name: "Biology Reproduction", url:"biology-ch1.html"},
            ]
            // Add more subjects and their chapters as needed
        };
        return chapters[subject] || [];
    }
    // Example of fading in chapters with GSAP (after including GSAP library)
gsap.from(".chapter-btn", { duration: 1, opacity: 0, stagger: 0.2, ease: "power2.out" });

});

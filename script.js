let currentSlide = 1;
const totalSlides = 10;

function showSlide(index) {
    if (index < 1) index = 1;
    if (index > totalSlides) index = totalSlides;

    currentSlide = index;
    document.querySelectorAll('.slide').forEach((slide, i) => {
        slide.classList.toggle('active', (i + 1) === currentSlide);
    });

    document.getElementById('slide-num').innerText = `${currentSlide} / ${totalSlides}`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function selectOption(btn, slideNum) {
    const parent = document.getElementById(`quiz-options-${slideNum}`);
    parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    
    const feedback = document.getElementById(`feedback-${slideNum}`);
    if (feedback) {
        feedback.innerHTML = "<p style='color: #00B894; margin-top: 10px; font-weight: bold;'>✅ Jawaban berhasil tersimpan!</p>";
    }
}

function checkAnswer(btn, isCorrect, slideNum) {
    selectOption(btn, slideNum);
    const feedback = document.getElementById(`feedback-${slideNum}`);
    if (isCorrect) {
        feedback.innerHTML = "<p style='color: #00B894; margin-top: 10px; font-weight: bold;'>🎉 Tepat sekali! Menyapa guru adalah contoh Norma Kesopanan.</p>";
    } else {
        feedback.innerHTML = "<p style='color: #FF7675; margin-top: 10px; font-weight: bold;'>❌ Kurang tepat, coba lagi ya!</p>";
    }
}

function selectReflection(card) {
    document.querySelectorAll('.reflection-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
}

// Keyboard arrow key navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Music Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('playButton'); // Pastikan ID-nya benar
    const audio = document.getElementById('audioPlayer'); // Pastikan ID-nya benar
    const playText = document.querySelector('.play-text');
    const pauseText = document.querySelector('.pause-text');

    // Fungsi untuk mengontrol pemutaran audio
    musicBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            musicBtn.classList.add('playing');
            playText.style.top = '-100%';
            pauseText.style.top = '50%';
        } else {
            audio.pause();
            musicBtn.classList.remove('playing');
            playText.style.top = '50%';
            pauseText.style.top = '150%';
        }
    });

    // Optional: Reset tombol ketika musik selesai
    audio.addEventListener('ended', function() {
        musicBtn.classList.remove('playing');
        playText.style.top = '50%';
        pauseText.style.top = '150%';
    });
});
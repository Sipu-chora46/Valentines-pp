
// Preload audios for better performance
const audios = {
    rose: new Audio('C:/Users/sudip/Desktop/Ushi_Paglu/audio/Roseday.mp3'),
    propose: new Audio('C:/Users/sudip/Desktop/Ushi_Paglu/audio/propose.mp3'),
  //chocolate: new Audio('audio/chocolate-yum.mp3'),
  //teddy: new Audio('audio/teddy-pop.mp3'),
  //promise: new Audio('audio/promise-sign.mp3'),
  //hug: new Audio('audio/hug-warm.mp3'),
    kiss: new Audio('C:/Users/sudip/Desktop/Ushi_Paglu/audio/kiss.mp3'), // Your existing file
    valentine: new Audio('C:/Users/sudip/Desktop/Ushi_Paglu/audio/valentine.mp3')
};

// Helper function to play audio for a specific duration
function playAudioForDuration(audioKey, duration = 3000) { // Default 3 seconds
    const audio = audios[audioKey];
    if (audio) {
        audio.currentTime = 0; // Reset to start
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0; // Reset for next play
        }, duration);
    }
}





// Apply 3D styling to all buttons on load
document.querySelectorAll('button, .tile').forEach(el => {
    el.classList.add('btn-3d');
});

// Navigation
document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', () => {
        const day = tile.dataset.day;
        document.getElementById('dashboard').classList.add('hidden');
        document.getElementById(`${day}-day`).classList.remove('hidden');
    });
});

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.day-section').forEach(section => section.classList.add('hidden'));
        document.getElementById('dashboard').classList.remove('hidden');
    });
});

// Rose Day
document.getElementById('garden').addEventListener('click', (e) => {
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.textContent = '🌹';
    rose.style.left = `${e.offsetX}px`;
    rose.style.top = `${e.offsetY}px`;
    document.getElementById('garden').appendChild(rose);

    playAudioForDuration('rose', 2000);
});

// Propose Day
document.getElementById('no-btn').addEventListener('mouseover', () => {
    const btn = document.getElementById('no-btn');
    btn.style.position = 'absolute';
    btn.style.left = `${Math.random() * 80}%`;
    btn.style.top = `${Math.random() * 80}%`;
});

document.getElementById('yes-btn').addEventListener('click', () => {
    // Hide buttons
    document.getElementById('yes-btn').style.display = 'none';
    document.getElementById('no-btn').style.display = 'none';
    
     // Create and show sticker (using an image)
    const sticker = document.createElement('img');
    sticker.className = 'sticker';
    sticker.src = 'C:/Users/sudip/Desktop/Ushi_Paglu/Stickers/sticker2.gif'; // Replace with your image path/URL (e.g., 'images/heart-sticker.png' or 'https://example.com/sticker.png')
    sticker.alt = 'Love Sticker'; // Accessibility text
    document.getElementById('propose-day').appendChild(sticker);
    
    // Optional: Add a message
    const message = document.createElement('p');
    message.textContent = 'Yay! You said yes! ❤️ \n Own your words a little, and don\'t get overboard with your breakup stuff';
    message.className = 'text-2xl text-red-600 mt-4';
    document.getElementById('propose-day').appendChild(message);

    playAudioForDuration('propose', 3000);
});

// Chocolate Day
const compliments = ['You\'re sweet!', 'My favorite treat!', 'Irresistible!', 'Its not about the Chocolate, Its YOU'];
document.querySelectorAll('.chocolate').forEach(choc => {
    choc.addEventListener('click', () => {
        document.getElementById('compliment').textContent = compliments[Math.floor(Math.random() * compliments.length)];
    });
});

// Teddy Day
document.getElementById('gift-box').addEventListener('click', () => {
    const box = document.getElementById('gift-box');
    const teddy = document.getElementById('teddy-svg');
    
    // Add open class to animate the lid
    box.classList.add('box-open');
    
    // Reveal and animate the teddy
    teddy.classList.remove('teddy-hidden');
    teddy.classList.add('teddy-pop');
    
    // Optional: Change teddy expression after pop-out (as before)
    setTimeout(() => {
        const svg = document.getElementById('teddy-svg');
        svg.innerHTML = '<circle cx="100" cy="80" r="40" fill="#8B4513"/><circle cx="85" cy="70" r="5" fill="#000"/><circle cx="115" cy="70" r="5" fill="#000"/><ellipse cx="100" cy="90" rx="10" ry="5" fill="#FF0000"/><rect x="90" y="120" width="20" height="40" fill="#8B4513"/><circle cx="80" cy="140" r="10" fill="#8B4513"/><circle cx="120" cy="140" r="10" fill="#8B4513"/>';
    }, 1000); // Delay for expression change
});

// Promise Day
document.getElementById('sign-btn').addEventListener('click', () => {
    const promise = document.getElementById('promise-input').value;
    document.getElementById('promise-text').textContent = promise;
    document.getElementById('certificate').classList.remove('hidden');
});

// Hug Day
document.getElementById('hug-btn').addEventListener('click', () => {
    const overlay = document.getElementById('hug-overlay');
    overlay.classList.remove('hidden');

     // Create and show sticker in the overlay (using an image)
    const sticker = document.createElement('img');
    sticker.className = 'sticker';
    sticker.src = 'C:/Users/sudip/Desktop/Ushi_Paglu/Stickers/Hug_sticker.gif'; // Replace with your image path/URL (e.g., 'https://example.com/sticker.png' or 'sticker.jpg' if in the same folder)
    sticker.alt = 'Hug Sticker'; // Descriptive text for accessibility
    overlay.appendChild(sticker);
    
    // Hide overlay after 3 seconds and remove sticker
    setTimeout(() => {
        overlay.classList.add('hidden');
        overlay.removeChild(sticker); // Clean up the sticker
    }, 3000);

});

// Kiss Day
const canvas = document.getElementById('kiss-canvas');
const ctx = canvas.getContext('2d');
canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    ctx.font = '30px Arial';
    ctx.fillText('💋', x, y);
    playAudioForDuration('kiss', 1000);
});

// Valentine's Day
let slideIndex = 0;
setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].classList.add('hidden');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.remove('hidden');
}, 3000);

document.getElementById('hearts-btn').addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['heart'],
        colors: ['#FFB6C1', '#DC143C']
    });
     playAudioForDuration('valentine', 5000);
});
document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const fallingElementsContainer = document.getElementById('fallingElements');
    const audio = document.getElementById('birthdayAudio');

    // Toggle surprise message and play audio
    surpriseButton.addEventListener('click', () => {
        surpriseMessage.classList.toggle('hidden');
        audio.play();
    });

    // Create falling roses and confetti
    for (let i = 0; i < 50; i++) {
        createFallingElement('🌹', 12);
        createFallingElement('🎉', 10);
    }

    function createFallingElement(symbol, size) {
        const element = document.createElement('div');
        element.classList.add('element');
        element.style.left = `${Math.random() * 100}%`;
        element.style.fontSize = `${size}px`;
        element.textContent = symbol;
        element.style.animationDuration = `${Math.random() * 5 + 5}s`;
        fallingElementsContainer.appendChild(element);
    }
});

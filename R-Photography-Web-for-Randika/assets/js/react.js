// Select all elements with the class 'heart-icon' (or any other relevant class)
const heartIcons = document.querySelectorAll('.heart-icon');

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Check if an animation is already active on this icon
        if (heartIcon.classList.contains('animating')) {
            return;
        }

        // Add a class to indicate the animation is in progress
        heartIcon.classList.add('animating');

        for (let i = 0; i < 5; i++) { // Create 5 hearts
            const heartAnimation = document.createElement('span');
            heartAnimation.classList.add('heart-animation');
            heartAnimation.innerHTML = '❤️';

            // Randomize heart size and position
            const size = Math.random() * 10 + 10; // Heart size between 10px and 20px
            heartAnimation.style.fontSize = `${size}px`;

            const offset = Math.random() * 100 - 50; // Position hearts randomly
            heartAnimation.style.left = `calc(50% + ${offset}px)`;

            heartIcon.parentElement.appendChild(heartAnimation);

            // Remove the heart after the animation ends
            setTimeout(() => {
                heartAnimation.remove();
            }, 1000);
        }

        // Optionally, change the color of the icon to indicate it's been clicked
        heartIcon.style.color = '#e0245e';
        heartIcon.style.transform = 'scale(1.2)';

        setTimeout(() => {
            heartIcon.style.transform = 'scale(1)';

            // Remove the animating class after the animation completes
            heartIcon.classList.remove('animating');
        }, 1000); // Matches the duration of the heart animations
    });
});


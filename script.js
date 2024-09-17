const toggleButton = document.querySelector('.toggle_theme');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');


toggleButton.addEventListener('click', function() {
    const root = document.documentElement;
    root.classList.toggle('dark');

    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
});
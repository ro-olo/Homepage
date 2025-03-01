const toggleButton = document.querySelector('.toggle_theme');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
const root = document.documentElement;
const previewContainer = document.querySelector('.preview_container');

// dark mode 

function applyInitialTheme() {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        root.classList.toggle('dark', storedTheme === 'dark');
    } else {
        root.classList.toggle('dark', prefersDarkScheme);
    }
    updateIconVisibility();
}

toggleButton.addEventListener('click', function() {
    root.classList.toggle('dark');
    const isDarkMode = root.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateIconVisibility();
});

function updateIconVisibility() {
    sunIcon.classList.toggle('hidden', root.classList.contains('dark'));
    moonIcon.classList.toggle('hidden', !root.classList.contains('dark'));
}

applyInitialTheme();

// Function to create a project card
function createProjectCard(projectName, imgSrc, githubLink, description) {
    return `
    <div class="project_card">
        <div class="screenshot">
            <img src="${imgSrc}" alt="Screenshot of ${projectName} project"> 
        </div>
        <div class="name_and_icons">
            <h3 class="project_title">${projectName}</h3>
            <div class="project_icons">
                <a href="${githubLink}" target="_blank" role="button" class="a_icon" aria-label="GitHub repository for ${projectName} project">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub logo"/>
                </a>
                <a role="button" aria-label="Open ${projectName} project in a new page" class="a_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
                </a>
            </div>
        </div>
        <div class="project_description">
            <p>${description}</p>
        </div>
    </div>
    `;
}

// Example usage of the function
const projects = [
    { name: 'R-P-S', img: 'img/RPS.png', github: 'https://github.com/ro-olo/RPS.git', description: 'Rock Paper Scissors game, five rounds to win.' },
    { name: 'Etch-a-sketch', img: 'img/sketch.png', github: 'https://github.com/ro-olo/Etch-a-Sketch.git', description: 'Drawing pad in which you can select a color and create some pixel art by coloring the squares of the grid.' },
    { name: 'Dashboard', img: 'img/dash_light.png', github: 'https://github.com/ro-olo/dashboard.git', description: 'Stylish dashboard created using Grid.' },
    { name: 'Calculator', img: 'img/calculator.png', github: 'https://github.com/ro-olo/Calculator.git', description: 'Interactive calculator built using JavaScript for real-time calculations.' },
    { name: 'Dashboard-Dark', img: 'img/dash_dark.png', github: 'https://github.com/ro-olo/dashboard.git', description: 'Dashboard created using Grid with Dark mode.' },
    { name: 'Form', img: 'img/form.png', github: 'https://github.com/ro-olo/Sign-up_form.git', description: 'A stylish and responsive form designed with HTML and CSS.' }
];

// Clear existing content in the preview container
previewContainer.innerHTML = '';

projects.forEach(project => {
    previewContainer.innerHTML += createProjectCard(project.name, project.img, project.github, project.description);
});
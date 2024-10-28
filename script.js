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

// function to create a project card

function createProjectCard(title, imgSrc, githubLink, description) {
    // project card structure: project_card div, screenshot div, img, 
    // name_and_icons div, project_title h3, project_icons div,
    // github a a_icon, github image img, pagelink a a_icon, pagelink icon svg, path for svg
    
    const card = document.createElement('div');
    card.classList.add('project_card');

    const screenshotDiv = document.createElement('div');
    screenshotDiv.classList.add('screenshot');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    screenshotDiv.appendChild(img);

    const nameAndIconsDiv = document.createElement('div');
    nameAndIconsDiv.classList.add('name_and_icons');

    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project_title');

    const projectIcons = document.createElement('div');
    projectIcons.classList.add('project_icons');
    projectTitle.textContent = title;

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('project_icons');

    const githubLinkEl = document.createElement('a');
    githubLinkEl.href = githubLink;
    githubLinkEl.target = "_blank";
    githubLinkEl.role = "button";
    githubLinkEl.classList.add('a_icon');

    const githubImg = document.createElement('img');
    githubImg.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    githubImg.alt = 'GitHub';
    githubLinkEl.appendChild(githubImg);

    const pageLinkEl = document.createElement('a');
    pageLinkEl.role = 'button';
    pageLinkEl.ariaLabel = 'Open in a new page';
    pageLinkEl.classList.add('a_icon');

    const pageLinkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    pageLinkIcon.setAttribute('viewBox', '0 0 24 24');
    pageLinkIcon.setAttribute('aria-hidden', 'true');

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z");
    
    pageLinkIcon.appendChild(path);
    pageLinkEl.appendChild(pageLinkIcon);

    iconsDiv.appendChild(githubLinkEl);
    iconsDiv.appendChild(pageLinkEl);

    nameAndIconsDiv.appendChild(projectTitle);
    nameAndIconsDiv.appendChild(iconsDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('project_description');
    const descriptionP = document.createElement('p');
    descriptionP.textContent = description;
    descriptionDiv.appendChild(descriptionP);

    // parents: descriptionDiv, nameANdIconsDiv, screenshotDiv

    card.appendChild(screenshotDiv);
    card.appendChild(nameAndIconsDiv);
    card.appendChild(descriptionDiv);

    previewContainer.appendChild(card);
}

obj = [
    {"name" : "R-P-S", "imgSource":"img.RPS.png", "gitHubLink":" https://github.com/ro-olo/RPS.git", "description": "Rock Paper Scissors game, five rounds to win"}
]

obj.array.forEach(element => {
     projectname =element.name 
     img = element.imgSource
     github = element.gitHubLink
     description = element.description

     createProjectCard(prohectName, img , github, description)
});

// createProjectCard(
//     'R-P-S',
//     'img/RPS.png',
//     'https://github.com/ro-olo/RPS.git',
//     'Rock Paper Scissors game, five rounds to win.',
// )

createProjectCard(
    'Etch-a-sketch',
    'img/sketch.png',
    'https://github.com/ro-olo/Etch-a-Sketch.git',
    'Drawing pad in which you can select a color and create some pixel art by coloring the squares of the grid.'
)

createProjectCard(
    'Dashboard',
    'img/dash_light.png',
    'https://github.com/ro-olo/dashboard.git',
    'Stylish dashboard created using Grid.',
)

createProjectCard(
    'Calculator',
    'img/calculator.png',
    'https://github.com/ro-olo/Calculator.git',
    'Interactive calculator built using JavaScript for real-time calculations.',
)

createProjectCard(
    'Dashboard-Dark',
    'img/dash_dark.png',
    'https://github.com/ro-olo/dashboard.git',
    'Dashboard created using Grid with Dark mode.',
)

createProjectCard(
    'Form',
    'img/form.png',
    'https://github.com/ro-olo/Sign-up_form.git',
    'A stylish and responsive form designed with HTML and CSS.',
)
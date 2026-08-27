

const body = document.getElementsByTagName("body")[0];

const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `© ${thisYear} Jocelyn Maldonado`;

footer.appendChild(copyright);


// Skills
const skills = ["Python", "MATLAB", "C++", "GitHub", "HTML", "CSS"];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


//Created footer and add copyright information
const body = document.getElementsByTagName("body")[0];

const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `© ${thisYear} Jocelyn Maldonado-Bolanos`;

footer.appendChild(copyright);


//Skills section
const skills = ["Python", "MATLAB", "C++", "GitHub", "HTML", "CSS"];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


//Handle Message form Submission 
const messageForm = document.forms["leave_message"];


messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;



    console.log(name, email, message);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: <span>${message}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    event.target.reset();


});


//creating fetch github repositories and add them to the projetcs section
fetch("https://api.github.com/users/mbjocelyn/repos")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let repositories = data;
        console.log(repositories);
    
   
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })

    .catch(function(error) {
        console.log("There was an error fetching the repositories:", error);
    });




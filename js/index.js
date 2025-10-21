
// ==================== Footer & Copyright ====================
// Step 1: Create a Date object for today
const today = new Date();

// Step 2: Get the current year dynamically
const thisYear = today.getFullYear();

// Step 3: Check if a <footer> exists, otherwise create it
let footer = document.querySelector("footer");
if (!footer) {
  footer = document.createElement("footer");
  document.body.appendChild(footer);
}

// Footer styling moved to CSS file

// Step 4: Create a new <p> element
const copyright = document.createElement("p");

// Step 5: Set the inner HTML (use Unicode © symbol)
copyright.innerHTML = `\u00A9 ${thisYear} Beatriz Santos`;

// Step 6: Append the <p> to the footer
footer.appendChild(copyright);

// ==================== Skills Section ====================

// Step 1: Create an array of skills
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "C++",
  "GitHub",
  "CI/CD",
];

// Step 2: Select the skills section by id
const skillsSection = document.querySelector("#skills");

// Step 3: Select the <ul> inside the skills section
const skillsList = skillsSection.querySelector("ul");

// Step 4: Loop through the skills array
for (let i = 0; i < skills.length; i++) {
  // Create a new <li> element
  const skill = document.createElement("li");

  // Set the text content to the current skill
  skill.innerText = skills[i];

  // Append the <li> to the <ul>
  skillsList.appendChild(skill);
}

// ==================== Fetch GitHub Repositories ====================

// Fetch repositories from GitHub API
fetch("https://api.github.com/users/Beatriz-S/repos")
  .then((response) => {
    return response.json();
  })
  .then((repositories) => {
    console.log(repositories);

    // Select the projects section by id
    const projectSection = document.querySelector("#projects");

    // Select the <ul> inside the projects section
    const projectList = projectSection.querySelector("ul");

    // Loop through the repositories array
    for (let i = 0; i < repositories.length; i++) {
      // Create a new <li> element
      const project = document.createElement("li");

      // Set the inner text to the repository name
      project.innerText = repositories[i].name;

      // Append the project to the project list
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });


// Handle Message Form Submit
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the values from the form fields
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    // Log the three variables to the console
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);
    
    // Display messages in list
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    // Clear the form
    messageForm.reset();
});

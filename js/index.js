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

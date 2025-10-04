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

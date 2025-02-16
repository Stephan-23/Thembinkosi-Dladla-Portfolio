// Toggle Chatbot
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');

chatbotToggle.addEventListener('click', () => {   //To Open the chatbot
    chatbotContainer.classList.toggle('open');
});

chatbotClose.addEventListener('click', () => {   //to close the chatbot
    chatbotContainer.classList.remove('open');
});

// Chatbot Functionality
const chatWindow = document.getElementById('chat-window');
const inputField = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = inputField.value.trim();
    if (message === '') return;

    appendMessage('user', message);
    inputField.value = '';

    setTimeout(() => {
        const response = getBotResponse(message);
        appendMessage('bot', response);
    }, 1000);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(userMessage) {
    const botData = {
        name: "Thembinkosi Dladla",
        birthdate: "December 17, 2001",
        education: "University of KwaZulu-Natal, Bachelor of Science in Computer Science and Information Technology",
        skills: "C#, C++, SQL, Python, HTML5, CSS, JavaScript, Java, .NET, Microsoft SQL, Database Management, Git",
        work: "Full Stack Development at CAPACITI (since Dec 2024) and COMP201 Data Structures Tutor (Aug 2023 - Nov 2023)",
        hobbies: "Running, listening to music, going to the gym",
        contact: "Email: dladlathembinkosi75@gmail.com | GitHub: github.com/Stephan-23 | LinkedIn: linkedin.com/in/thembinkosi-stephan-dladla"
    };

    if (matches(userMessage, ["your name", "who are you"])) return `My name is ${botData.name}.`;
    if (matches(userMessage, ["your age", "how old are you"])) return `I was born on ${botData.birthdate}, so you can do the math!`;
    if (matches(userMessage, ["your education", "where did you study", "where did you go to school"])) return `I studied at ${botData.education}.`;
    if (matches(userMessage, ["your skills", "what are you good at", "what can you do"])) return `I have experience with ${botData.skills}.`;
    if (matches(userMessage, ["your work", "where do you work", "what do you do"])) return `Currently, I work in ${botData.work}.`;
    if (matches(userMessage, ["your hobbies", "what do you like", "what do you do for fun"])) return `I enjoy ${botData.hobbies}.`;
    if (matches(userMessage, ["your contact", "how can I reach you", "give me your email"])) return `Here’s how you can reach me: ${botData.contact}.`;

    return "I’m not sure how to answer that. Ask me about my name, education, skills, work, hobbies, or contact info!";
}

function matches(input, keywords) {
    return keywords.some(keyword => input.toLowerCase().includes(keyword));
}

// Initial chatbot message
setTimeout(() => {
    appendMessage('bot', `Hi, I'm Thembinkosi Dladla! What would you like to know about me?`);
}, 500);
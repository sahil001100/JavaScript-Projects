// Chat bubble click
document.getElementById("chat-bubble").addEventListener("click", () => {
  // alert("Chat feature coming soon!");
});

// Chatbot modal toggle
const chatBubble = document.getElementById("chat-bubble");
const chatModal = document.getElementById("chat-modal");
const closeChat = document.getElementById("close-chat");

chatBubble.addEventListener("click", () => {
  chatModal.style.display = "flex";
});

closeChat.addEventListener("click", () => {
  chatModal.style.display = "none";
});

// Auto-reply logic
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", handleMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleMessage();
});

// Handle user message
function handleMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Show user message
  const userMsg = document.createElement("p");
  userMsg.className = "user";
  userMsg.textContent = message;
  chatMessages.appendChild(userMsg);
  userInput.value = "";

  // Show typing indicator
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Auto-reply after delay
  setTimeout(() => {
    typing.remove(); // Remove typing indicator

    const botMsg = document.createElement("p");
    botMsg.className = "bot";
    botMsg.textContent = getAutoReply(message);
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}

// Get auto-reply message
function getAutoReply(input) {
  input = input.toLowerCase();
  if (input.includes("price") || input.includes("cost")) {
    return "Our pricing depends on your needs. Would you like a quote?";
  } else if (input.includes("support") || input.includes("help")) {
    return "Our support team is available 24/7. What issue are you facing?";
  } else if (input.includes("hello") || input.includes("hi")) {
    return "Hi there! 👋 How can I assist you today?";
  } else {
    return "Thanks for your message! We'll get back to you shortly.";
  }
}

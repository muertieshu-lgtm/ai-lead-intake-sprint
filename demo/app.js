const chat = document.querySelector("#chat");
const form = document.querySelector("#intake-form");

function addMessage(html) {
  const message = document.createElement("div");
  message.className = "message";
  message.innerHTML = html;
  chat.append(message);
}

addMessage("<strong>Assistant:</strong> Hi, I can help route your request. Answer a few questions and I will summarize the lead for the business.");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const service = data.get("service");
  const timeline = data.get("timeline");
  const details = data.get("details") || "No extra details provided.";
  const email = data.get("email");

  chat.innerHTML = "";
  addMessage(`<strong>Lead type:</strong> ${service}`);
  addMessage(`<strong>Timeline:</strong> ${timeline}`);
  addMessage(`<strong>Context:</strong> ${details}`);
  addMessage(`<strong>CRM handoff:</strong> Send a follow-up to ${email} and prioritize based on timeline.`);
});

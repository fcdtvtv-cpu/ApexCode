
const ticketForm = document.getElementById("ticketForm");
const formFeedback = document.getElementById("formFeedback");
const ticketMessage = document.getElementById("ticketMessage");

if (ticketForm && formFeedback) {
  ticketForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!ticketForm.reportValidity()) {
      return;
    }

    formFeedback.textContent =
      "Форма пока демонстрационная: отправка обращений станет доступна после подключения сервера.";

    formFeedback.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
}

// Счётчик символов описания
if (ticketMessage) {
  ticketMessage.addEventListener("input", () => {
    const remaining = 3000 - ticketMessage.value.length;
    const counter = document.querySelector(".form-footer > span");

    if (counter) {
      counter.textContent = `Осталось символов: ${remaining}`;
    }
  });
}

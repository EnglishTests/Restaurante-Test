const vocabulary = [
    { question: "¿Cómo se escribe 'mesa' en inglés?", answer: "Table", pronunciation: "teibol" },
    { question: "¿Cómo se escribe 'silla' en inglés?", answer: "Chair", pronunciation: "cher" },
    { question: "¿Cómo se escribe 'menú' en inglés?", answer: "Menu", pronunciation: "meniu" },
    { question: "¿Cómo se escribe 'plato' en inglés?", answer: "Plate", pronunciation: "pleit" },
    { question: "¿Cómo se escribe 'vaso' en inglés?", answer: "Glass", pronunciation: "glas" },
    { question: "¿Cómo se escribe 'cuchara' en inglés?", answer: "Spoon", pronunciation: "spun" },
    { question: "¿Cómo se escribe 'tenedor' en inglés?", answer: "Fork", pronunciation: "fork" },
    { question: "¿Cómo se escribe 'cuchillo' en inglés?", answer: "Knife", pronunciation: "naif" },
    { question: "¿Cómo se escribe 'servilleta' en inglés?", answer: "Napkin", pronunciation: "napkin" },
    { question: "¿Cómo se escribe 'camarero' en inglés?", answer: "Waiter", pronunciation: "ueiter" },
    { question: "¿Cómo se escribe 'cuenta' en inglés?", answer: "Bill", pronunciation: "bil" },
    { question: "¿Cómo se escribe 'propina' en inglés?", answer: "Tip", pronunciation: "tip" },
    { question: "¿Cómo se escribe 'cocina' en inglés?", answer: "Kitchen", pronunciation: "kitshen" },
    { question: "¿Cómo se escribe 'comida' en inglés?", answer: "Food", pronunciation: "fud" },
    { question: "¿Cómo se escribe 'desayuno' en inglés?", answer: "Breakfast", pronunciation: "brekfast" },
    { question: "¿Cómo se escribe 'almuerzo' en inglés?", answer: "Lunch", pronunciation: "lonch" },
    { question: "¿Cómo se escribe 'cena' en inglés?", answer: "Dinner", pronunciation: "diner" },
    { question: "¿Cómo se escribe 'postre' en inglés?", answer: "Dessert", pronunciation: "dizert" },
    { question: "¿Cómo se escribe 'bebida' en inglés?", answer: "Drink", pronunciation: "drink" }
];

const questionsContainer = document.getElementById("questions");

vocabulary.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
        <label>${item.question}</label><br>
        <input type="text" id="answer${index}" autocomplete="off">
        <span id="result${index}"></span>
        <br>
        <button type="button" class="audio-button" onclick="speak('${item.answer}')">🔊</button>
        <span class="pronunciation">(${item.pronunciation})</span>
        <br>
    `;
    questionsContainer.appendChild(div);
});

function checkAnswers() {
    let correctCount = 0;
    vocabulary.forEach((item, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim();
        const resultSpan = document.getElementById(`result${index}`);
        if (userAnswer.toLowerCase() === item.answer.toLowerCase()) {
            resultSpan.textContent = "✔ Correcto";
            resultSpan.className = "correct";
            correctCount++;
        } else {
            resultSpan.textContent = `✘ Incorrecto. Respuesta: ${item.answer}`;
            resultSpan.className = "incorrect";
        }
    });
    document.getElementById("result").textContent = `Puntaje: ${correctCount} de ${vocabulary.length}`;
}

function restartTest() {
    document.querySelectorAll("input[type=text]").forEach(input => input.value = "");
    document.getElementById("result").textContent = "";
    vocabulary.forEach((_, index) => {
        document.getElementById(`result${index}`).textContent = "";
    });
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}

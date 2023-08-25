const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const randomButton = document.getElementById("random-button");

const api_url = "https://api.adviceslip.com/advice";

async function getRandomAdvice() {
    // Fetch response data and save it in new variable
    const response = await fetch(api_url);
    let data = await response.json();

    // Save random id and advice to new variables
    const id = data.slip.id;
    const advice = data.slip.advice;

    // call function to display content passing id and advice content
    displayAdvice(id, advice);
}

function displayAdvice(id, advice) {
    // display api content to page elements
    adviceId.textContent = id;
    adviceContent.textContent = advice;
}

randomButton.addEventListener("click", getRandomAdvice)

getRandomAdvice()
const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const api_url = "https://api.adviceslip.com/advice";

async function getRandomAdvice() {
    const response = await fetch(api_url);
    let data = await response.json();
    console.log(typeof data)
    const id = data.slip.id;
    const advice = data.slip.advice;
    console.log(id, advice)

}

getRandomAdvice()
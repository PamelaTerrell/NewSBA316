function greetUser() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${name}! Welcome!`;
    document.getElementById('greeting').innerText = greetingMessage;
}

function highlightItems() {
    const selectedElements = document.querySelectorAll("p");
    selectedElements.forEach((element) => {
        element.style.backgroundColor = "yellow";
    });
}

function displayDate() {
    document.getElementById("demo").innerHTML = new Date();
}

function displayGen() {
    const myYear = parseInt(document.getElementById("yearInput").value, 10);
    let message = "";

    if (myYear > 1945 && myYear < 1964) {
        message = "You are a Baby Boomer!";
    } else {
        message = "You are not a Baby Boomer!";
    }

    document.getElementById("generationMessage").innerText = message;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dateButton").addEventListener("click", displayDate);
    document.getElementById("myYear").addEventListener("click", displayGen);
});

function addListItem() {
    const myList = document.getElementById('myList');
    let newListItem = document.createElement('li');
    newListItem.textContent = "Generation Alpha = 2013 - 2025";
    myList.appendChild(newListItem);
}

window.onload = addListItem; 


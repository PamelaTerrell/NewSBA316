

let NAME;

    document.getElementById("mySubmit").onclick = function(){
    NAME = document.getElementById('myText').value;

   
    document.getElementById("myH1").textContent = `Hello ${NAME}`

}



function highlightItems(){
    const selectedElements = document.querySelectorAll("p");

    selectedElements.forEach((element) => {
        element.style.backgroundColor = "yellow";
    })
}

document.getElementById("dateButton").addEventListener("click" , displayDate);

function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myYear").addEventListener("click , displayGen");

function displayGen(myYear){
    if (myYear > 1945 && < 1964);
        "You are a Baby Boomer!"
}



const myList = document.getElementById('myList');

let newListItem = document.createElement('li');
newListItem.textContent = "Generation Alpha = 2013 - 2025";

myList.appendChild(newListItem);

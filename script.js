
answer = window.prompt("Are you ready to learn about yourself?");


if (answer == "yes"){
    alert("Great!  Let's go!");
}

if (answer == "sure"){
    alert("Great!  Let's go!");
}

else if (answer == "no"){
    alert("What a shame.  Goodbye.");
}

let NAME;

    document.getElementById("mySubmit").onclick = function(){
    NAME = document.getElementById('myText').value;

   
    document.getElementById("myH1").textContent = `Well Hello, ${NAME}`

    event.preventDefault()
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



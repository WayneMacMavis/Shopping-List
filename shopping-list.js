var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

for(var i=0; i<list.length; i++) {
    list[i].addEventListener("click", function (e) {
           e.currentTarget.classList.toggle("done");
    })
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li).addEventListener("click", function (e) {
        e.currentTarget.classList.toggle("done");
    input.value = "";
    })
}

function addListAfterClick() {
    if(inputLength() > 0) {
     createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.keyCode === 13) {
       createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

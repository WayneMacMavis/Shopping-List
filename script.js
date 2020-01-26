var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var list = document.querySelectorAll("ul > li");
var listLength = list.length


// function crossOut() {

	for (var i = 0; i < listLength; i++) {
		list[i].addEventListener("click", function()  {
		this.classList.toggle("done");
		})
	}



function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
	
	var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("delete"));
		li.appendChild(deleteButton);
		ul.appendChild(li);

		// crossOut ();

	var list = document.querySelectorAll("ul > li");
		var listLength = list.length
		for (var i = 0; i < listLength; i++) {
		list[i].addEventListener("click", function () {
		this.classList.toggle("done");
			});
		
		}

	input.value = "";
}

// function crossOut() {

// 		var list = document.querySelectorAll("ul > li");
// 		var listLength = list.length
// 		for (i = 0; i < listLength; i++) {
// 		list[i].addEventListener("click", function()  {
// 		this.classList.toggle("done");
// 		})
// 	}
// }

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		// crossOut();
		// var list = document.querySelectorAll("ul > li");
		// var listLength = list.length
		// for (var i = 0; i < listLength; i++) {
		// list[i].addEventListener("click", function() {
		// this.classList.toggle("done");
		// 	});
		
		// }
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		
		// // crossOut();
		// var list = document.querySelectorAll("ul > li");
		// var listLength = list.length
		// for (var i = 0; i < listLength; i++) {
		// list[i].addEventListener("click", function() {
		// this.classList.toggle("done");
			
		// 	});
		// }
	}

}
	

// add delete button
	
	for (var i = 0; i < list.length; i++) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	list[i].appendChild(deleteButton);
	deleteButton.classList.add("delete");  

	}



//callback functions

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// for (i = 0; i < listLength; i++) {
// list[i].addEventListener("click", crossOut);

// }

	



// remove li on click

// var delButton = document.getElementsByClassName("delete");
// var delButtonLength = delButton.length
// for (i = 0; i < delButtonLength; i++) {
// 	delButton[i].addEventListener("click", function (e) {
// 	e.target.










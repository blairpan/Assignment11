$(document).ready(function(){
	
	$('button').click(function newToDo() {
		var inputItem = document.getElementById("newThing").value;
		var t = document.createTextNode(inputItem);
		var newItem = document.createElement("li");
		newItem.appendChild(t);
		document.getElementById("todoli").appendChild(newItem);
	});


	$('ul').on('click', 'li', function(){
    	$(this).hide("slow");
    });
    
});







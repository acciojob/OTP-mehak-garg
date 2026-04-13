//your JS code here. If required.
let input=document.querySelectorAll(".code");
input.forEach((item,i)=>{
	item.addEventListener("input",()=>{
		input[i+1].focus();
		
	})})

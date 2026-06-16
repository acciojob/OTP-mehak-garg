//your JS code here. If required.
let input=document.querySelectorAll(".code");
input.forEach((item,i)=>{
	item.addEventListener("input",()=>{
		if (i < input.length - 1) {
    input[i + 1].focus();
}})
						  
		item.addEventListener("keydown",function(event){
			
			if(event.code==="Backspace")
			{
				if (i > 0) {
    input[i].value = "";
    input[i - 1].focus();
}
			}
		})
	})

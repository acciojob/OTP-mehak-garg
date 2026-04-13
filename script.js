//your JS code here. If required.
let input=document.querySelectorAll(".code");
input.forEach((item,i)=>{
	item.addEventListener("input",()=>{
		input[i+1].focus();})
						  
		item.addEventListener("keydown",function(event){
			if(event.code==="Backspace")
			{
				input[i-1].value="";
                input[i-1].focus();
			}
		})
	})

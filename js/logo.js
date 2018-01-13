class Logo{
	constructor(){
		this.ele=document.createElement("div");
		this.ele.className="logo";
		document.body.appendChild(this.ele);
	}
	
	hide(){
		this.ele.style.display="none";
	}
}

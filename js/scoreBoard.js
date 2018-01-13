class scoreBoard{
	constructor(){
		this.ele=document.createElement("span");
		document.getElementById("body_main").appendChild(this.ele);
		this.score=0;
		this.ele.innerHTML="分数："+this.score;
	}
	
	updateScore(score){
		this.score+=score;
		this.ele.innerHTML="分数："+this.score;
	}
}

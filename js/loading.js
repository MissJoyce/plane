class Loading{
	constructor(callbackfunc){
		//console.log("加载中");
		this.ele=document.createElement("div");
		this.ele.className="loading";
		document.body.appendChild(this.ele);
		this.interval=2100;
		var i=1;
		var timer = setInterval(function(){
			i++;
			if(i==4){
				i=1;
			}
			var url=`url(images/loading${i}.png) no-repeat`;
			this.ele.style.background=url;
			
		}.bind(this),200);
		
		setTimeout(function(){
			clearInterval(timer);
			this.ele.remove();
			//用于处理加载进度结束后创建飞机等操作
			callbackfunc();
		}.bind(this),this.interval);
	}
	
	
}

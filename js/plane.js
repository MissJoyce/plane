class Plane extends Spirit{
	constructor(options){
		super();
		this.ele.className="my-warplain";
		console.log("我方飞机")
		this.init();
		this.fly();
		//游戏难度
		this.options=options;
		this.shoot();
		
	}
	//我方飞机的初始位置
	init(){
		var w = this.ele.offsetWidth;
		var h=this.ele.offsetHeight;
		var clientW=document.body.clientWidth;
		var clientH=document.body.clientHeight;
		
		this.ele.style.left=(clientW-w)/2+"px";
		this.ele.style.top=clientH-h+"px";
	}
	//飞机随鼠标移动
	fly(){
		document.onmousemove=function(e){
			var e = e || event;
			this.ele.style.left=e.clientX-this.ele.offsetWidth/2+"px";
			this.ele.style.top=e.clientY-this.ele.offsetHeight/2+"px";
			var body_main = document.getElementById('body_main'); 
			
			var L=body_main.offsetLeft;
			var LW=body_main.offsetLeft+body_main.offsetWidth;
			var T=document.body.clientHeight;
			//飞机的活动范围
			if(this.ele.offsetLeft<=L){
				this.ele.style.left=L+"px";
			}else if(this.ele.offsetLeft>=LW-this.ele.offsetWidth){
				this.ele.style.left=LW-this.ele.offsetWidth+"px";
			}
			
			if(this.ele.offsetTop<=0){
				this.ele.style.top=0;
			}else if(this.ele.offsetTop>=T-this.ele.offsetHeight){
				this.ele.style.top=T-this.ele.offsetHeight+"px";
			}
		}.bind(this);
	}
	
	//飞机发射子弹
	shoot(){
		setInterval(function(){
			var planex=this.ele.offsetLeft;
			var planey=this.ele.offsetTop;
			var planewidth=this.ele.offsetWidth;
			//参数用于子弹的位置，options控制难度
			var bullet=new Bullet(planex,planey,planewidth,this.options);
			en.bullets.push(bullet);
		}.bind(this),200);
	}
}

class Bullet extends Spirit{
	constructor(planex,planey,planeWidth,options){
		super();
		this.planex=planex;
		this.planey=planey;
		this.W=planeWidth;
		this.options=options;
		this.init();
		this.run();
	}
	
	init(){
		this.ele.className="bullet";
		this.ele.style.left=this.planex+this.W/2-this.ele.offsetWidth/2+"px";
		this.ele.style.top=this.planey-this.ele.offsetHeight+"px";
	}
	
	run(){
		this.ele.timer=setInterval(function(){
			//
			this.ele.style.top=this.ele.offsetTop-10-this.options*2+"px";
			if(this.ele.offsetTop<=-this.ele.offsetHeight){
				//子弹超出屏幕清除定时器，清除子弹本身
				clearInterval(this.ele.timer);
				this.ele.remove();
			}
		}.bind(this),50);
	}
	
	bomb(){
		this.ele.className="bullet_die";
		var that=this;
		clearInterval(this.ele.timer);
		//删除数组中的这个爆炸的子弹
		var index = en.bullets.indexOf(this);
		en.bullets.splice(index,1);
		//console.log(en.bullets);
		setInterval(function(){
			that.ele.style.background="url(images/die2.png) no-repeat";
			that.ele.remove();
		},100);
	}
}

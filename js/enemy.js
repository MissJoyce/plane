class Enemy extends Spirit{
	constructor(){
		super();
		//this.run();
	}
	
	
	
	
	run(){
		//敌机的初始位置
		var body_main = document.getElementById('body_main'); 
		var L=body_main.offsetLeft;
		var T=body_main.offsetHeight;
		var L2=L+body_main.offsetWidth;
		var W=this.ele.offsetWidth;
		
		this.ele.style.left=L+Math.random()*(L2-L-W+1)+"px";
		this.ele.style.top=-this.ele.offsetHeight+"px";
	
		//敌机运动
		this.ele.timer=setInterval(function(){
			
			this.ele.style.top=this.ele.offsetTop+10+"px";
			if(this.ele.offsetTop>T){
				clearInterval(this.ele.timer);
				this.ele.remove();
				//同时删除数组中的敌机
				var index=en.enemies.indexOf(this);
				en.enemies.splice(index,1);
			}
		}.bind(this),100);
	}
	
	//敌机中弹，失血并积分
	hurt(callback){
		this.blood--;
		if(this.blood<=0){
			this.bomb();
			callback(this.score)
		}
	}
	//敌机爆炸
	bomb(){
		//clearInterval(this.ele.timer);
		var index=en.enemies.indexOf(this);
		en.enemies.splice(index,1);
		//console.log(en.enemies);
		var i=0;
		var timer=setInterval(function(){
			var imgName=this.imgArr[i];
			//console.log(imgName);
			this.ele.style.background=`url(images/${imgName}) no-repeat`;
			
			i++;
			
			if(i==this.imgArr.length){
				clearInterval(timer);
				this.ele.remove();
			}
		}.bind(this),300);
	}
	
	
	
}

class smallEnemy extends Enemy{
	constructor(){
		super();
		this.ele.className="enemy-small";
		this.blood=1;
		this.score=10;
		this.imgArr=['plane1_die1.png', 'plane1_die2.png', 'plane1_die3.png'];
		this.run(); 
	}
}

class middleEnemy extends Enemy{
	constructor(){
		super();
		this.ele.className="enemy-middle";
		this.blood=3;
		this.score=20;
		this.imgArr = ['plane2_die1.png', 'plane2_die2.png', 'plane2_die3.png', 'plane2_die4.png']
		this.run();
	}
}

class largeEnemy extends Enemy{
	constructor(){
		super();
		this.ele.className="enemy-large";
		this.blood=6;
		this.score=30;
		this.imgArr = ['plane3_die1.png', 'plane3_die2.png',
			'plane3_die3.png', 'plane3_die4.png',
			'plane3_die5.png', 'plane3_die6.png'
		]
		this.run();
	}
}
class Engine{
	constructor(){
		console.log("引擎");
		//难度选择
		var that=this;
		this.bullets=[];
		this.enemies=[];
		
		//logo
		this.logo=new Logo();
		this.op = new gameOption(function(options){
			console.log("难度选择之后");
			//选择了游戏难度之后出现游戏加载
			that.loading=new Loading(function(){
				console.log("加载进度之后");
				//logo消失
				that.logo.hide();
				//options为游戏难度
				that.plane=new Plane(options);
				//分数板
				that.scoreBoard=new scoreBoard();
				//敌机出现
				that.enemyShow();
				that.run();
				
			});
		});
	}
	
	//显示敌机
	enemyShow(){
		var that=this;
		setInterval(function(){
			var enemy=new smallEnemy();
			that.enemies.push(enemy);
			
		},500);
		setInterval(function(){
			var enemy=new middleEnemy();
			that.enemies.push(enemy);
			
		},2000);
		setInterval(function(){
			var enemy=new largeEnemy();
			that.enemies.push(enemy);
			
		},3000);
	}
	
	
	//碰撞检测
	crash(obj1,obj2){
		var l1=obj1.offsetLeft;
		var r1=obj1.offsetLeft+obj1.offsetWidth;
		var t1=obj1.offsetTop;
		var b1=obj1.offsetTop+obj1.offsetHeight;
		
		var l2=obj2.offsetLeft;
		var r2=obj2.offsetLeft+obj2.offsetWidth;
		var t2=obj2.offsetTop;
		var b2=obj2.offsetTop+obj2.offsetHeight;
		
		if(l1>r2||r1<l2||t1>b2||b1<t2){
			return false;
		}else{
			return true;
		}
	}
	
	
	run(){
		var that=this;
		setInterval(function(){
			//console.log(that.bullets.length,that.enemies.length);
			that.bullets.forEach(function(bullet){
				that.enemies.forEach(function(enemy){
					if(that.crash(bullet.ele,enemy.ele)){
						bullet.bomb();
						enemy.hurt(function(score){
							that.scoreBoard.updateScore(score);
						});
					}
				})
			})
		},50);
	}
	
	
	
}

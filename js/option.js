class gameOption{
	constructor(callbackfunc){
		var html=`<ul id="options" class="options">
						<li value="1">超级困难</li>
						<li value="2">非常困难</li>
						<li value="3">比较困难</li>
						<li value="4">简单</li>
					</ul>`;
		var body_main = document.getElementById('body_main');
		body_main.innerHTML=html;
		
		var options=document.getElementById("options");
		var aLi=options.getElementsByTagName("li");
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				options.style.display="none";
				//用于处理难度选择之后的加载进度操作
				callbackfunc(i);
			}
		}
	}
}

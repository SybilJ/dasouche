
var data = [
 	{name:'block1', bg:'images/banner1.jpg', href:'http://www.qq.com/'},
 	{name:'block2', bg:'images/banner2.jpg', href:'http://www.sina.com/'},
 	{name:'block3', bg:'images/banner3.jpg', href:'http://www.baidu.com/'},
];

var bigDiv=document.createElement('div');
var left=document.createElement('div');
var right=document.createElement('div');
bigDiv.className='box';
left.className='left';
right.className='right';
bigDiv.appendChild(left);
bigDiv.appendChild(right);

function addDiv(data){
	var div = document.createElement('div');
	div.style.backgroundImage = 'url(' + data.bg + ')';
	var a = document.createElement('a');
	a.className = 'bannerHref';
	a.href = data.href;
	div.appendChild(a);
	return div;
};

var arr = data.map(function(item){  //map遍历的返回值是一个数组
    var getDiv = addDiv(item);
    bigDiv.appendChild(getDiv);
    return getDiv ;  //遍历时3行代码会循环3次，将创建出来的div返回出来
    //返回了3次  
    //map把返回值自动创建成一个数组[getDiv1, getDiv2 ,getDiv3] 
});

var a = 0;
arr[a].classList.add('transit'); //样式表增加样式

var play = function(){
	_a = a;
	a < arr.length - 1 ? a++ :a = 0;
	arr[a].classList.add('transit');
	arr[_a].classList.remove('transit');
};
document.body.appendChild(bigDiv);

var time = setInterval(play, 3000);//开始轮播动画
bigDiv.onmouseover = function(){ //鼠标经过 
	clearInterval(time); //清除 结束轮播
};
bigDiv.onmouseout = function(){ //移出
	time = setInterval(play,3000); //重新启动 开始轮播
};
left.onclick = function(){
	_a = a;
	a>0 ? a-- : a=arr.length-1; //到上一页，或者返回最后一页
	arr[a].classList.add('transit');
	arr[_a].classList.remove('transit');
};
right.onclick = function(){
	_a = a;
	a<arr.length-1 ? a++ : a=0;
	arr[a].classList.add('transit');
	arr[_a].classList.remove('transit');
};

var exhibitionData = [
	{
		href:"#",
		leftImg:"./images/exhbt_01.jpg",
		rightImg:"./images/FC1_160x105.png",
		title:"豪车不止BBA",
		lable:"德系三架马车，是时候退位让贤啦"
	},
	{
		href:"#",
		leftImg:"./images/exhbt_02.jpg",
		rightImg:"./images/FC2_160x105.png",
		title:"百年大厂杰作",
		lable:"时间在流逝，品质永流传！"
	},
	{
		href:"#",
		leftImg:"./images/exhbt_03.jpg",
		rightImg:"./images/FC3_160x105.png",
		title:"便宜才是王道",
		lable:"谁说便宜没好车？"
	},
	{
		href:"#",
		leftImg:"./images/exhbt_04.jpg",
		rightImg:"./images/FC4_160x105.png",
		title:"驾校毕业生",
		lable:"那些年，我们练过的普桑和捷达。"
	},
	{
		href:"#",
		leftImg:"./images/exhbt_05.jpg",
		rightImg:"./images/FC5_160x105.png",
		title:"明星也抠门",
		lable:"明星都买二手车了你还等什么"
	},
	{
		href:"#",
		leftImg:"./images/exhbt_06.jpg",
		rightImg:"./images/FC6_160x105.png",
		title:"全能的大玩具",
		lable:"越野帮手、四驱利器"
	}
];

function createBox(option,index){
	var a = document.createElement("a");
	a.style.backgroundImage = "url(" + option.leftImg + ")";
	a.href = option.href;
	if(index%2==0){a.style.marginRight ="40px";}else{a.style.marginRight ="0";}
	a.innerHTML = "<h2>" + option.title +"</h2>"
				+ "<p>" + option.lable + "</p>"
				+ "<img src=\"" + option.rightImg + "\">";
	return a;
};
//创建碎片临时储存站 --- 减少页面渲染次数，提高性能
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item, index){
	fragment.appendChild(createBox(item,index));
});
document.getElementById("CLcontainer").appendChild(fragment);
//==================== 经营的智慧 ========================
var ManagementData = [
	{
		logo:"./images/tanche.png",
		title:"弹个车",
		group:"面向消费者",
		isFor:"基于消费者个人信用提供超低首付、超长分期，灵活智选的汽车融资租赁个性化解决方案",
		availableWith:"支持 IOS / Android",
		checkMore:"查看更多",
		href:"#"
	},
	{
		logo:"./images/fengche_64_64.png",
		title:"大风车",
		group:"面向拥有展厅和销售团队的大车商",
		isFor:"评估管理、车辆管理、客户管理、经营数据......一应俱全",
		availableWith:"支持 IOS / Android / PC 端",
		checkMore:"查看更多",
		href:"#"
	},
	{
		logo:"./images/niuche.png",
		title:"牛车",
		group:"面向经营二手车的中小车商",
		isFor:"收车、卖车、贷款、质保、估价......一步到位",
		availableWith:"支持 IOS / Android",
		checkMore:"查看更多",
		href:"#"
	}
];
function ManageBox(option,index){
	var div = document.createElement("div");
	div.className = "appWrapper";
	div.innerHTML = "<div class=\"titleBox\">"
					+"<img src=\"" + option.logo + "\">"
					+ "<div class=\"rightInfo\">"
					+ "<h3>" + option.title + "</h3>"
					+ "<span>" + option.group + "</span>"
					+ "</div>"
					+ "</div>"
					+ "<p>" + option.isFor + "</p>"
					+ "<p>" + option.availableWith + "</p>"
					+ "<a href=\"" + option.href + "\">" + option.checkMore + "</a>";
	if(index==0){div.style.borderLeft="none"}; 
	return div;
};
// console.log(document.querySelectorAll(".appWrapper"));
// document.querySelectorAll(".appWrapper")[0].classList.add("appItem_0");
var ManagementFragment = document.createDocumentFragment();
ManagementData.forEach(function(item,index){
	ManagementFragment.appendChild(ManageBox(item,index));
});
document.getElementById("WScontainer").appendChild(ManagementFragment);

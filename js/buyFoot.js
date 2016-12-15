var body=document.body;

var guideData = [
	{
		title:"导购大全", 
		guide1:"城市大全", guide2:"品牌大全", guide3:"车系大全", guide:"", 
		href1:"#", href2:"#", href3:"#", href4:""	},
	{
		title:"购车指南", 
		guide1:"如何挑选二手车", guide2:"如何判断事故火烧水漫车", guide3:"二手车指标说明", guide4:"", 
		href1:"#", href2:"#", href3:"#", href4:""	},
	{
		title:"关于我们", 
		guide1:"大搜车理念", guide2:"牛车", guide3:"大风车", guide4:"大搜车手机版",
		href1:"#", href2:"#", href3:"#", href4:"#"},
	{
		title:"联系我们", 
		guide1:"联系电话", guide2:"", guide3:"", guide4:"",
		href1:"#", href2:"", href3:"", href4:""	},
];
var guideFragment = document.createDocumentFragment();
guideData.forEach(function(item){
	guideFragment.appendChild(footerFloor1(item));
});
function footerFloor1(option){
	var div = document.createElement("div");
	div.className = "floor1";
	div.innerHTML = "<p>" + option.title + "</p>"
					+ "<a href=\"" + option.href1 + "\">" + option.guide1 + "</a>"
					+ "<a href=\"" + option.href2 + "\">" + option.guide2 + "</a>"
					+ "<a href=\"" + option.href3 + "\">" + option.guide3 + "</a>"
					+ "<a href=\"" + option.href4 + "\">" + option.guide4 + "</a>";
	return div;
};
document.getElementById("footerWrapper").appendChild(guideFragment);

var citiesData = [
	{ city:"热门城市:", href:"#" }, { city:"厦门", href:"#" }, 
	{ city:"北京", href:"#" }, { city:"南宁", href:"#" }, { city:"杭州", href:"#" },
	{ city:"郑州", href:"#" }, { city:"漳州", href:"#" }, { city:"长沙", href:"#" }, 
	{ city:"合肥", href:"#" }, { city:"西安", href:"#" }, { city:"上海", href:"#" }, 
	{ city:"宁波", href:"#" }, { city:"温州", href:"#" }, { city:"太原", href:"#" }, 
	{ city:"青岛", href:"#" }, { city:"南京", href:"#" }, { city:"武汉", href:"#" }, 
	{ city:"沈阳", href:"#" }, { city:"成都", href:"#" }, { city:"石家庄", href:"#" }, 
	{ city:"重庆", href:"#" }, { city:"台州", href:"#" }, { city:"大连", href:"#" }, 
	{ city:"福州", href:"#" }, { city:"佛山", href:"#" }, { city:"临沂", href:"#" }, 
	{ city:"济南", href:"#" }, { city:"苏州", href:"#" }, { city:"贵阳", href:"#" }, 
	{ city:"泉州", href:"#" }, { city:"南昌", href:"#" }, { city:"天津", href:"#" }, 
	{ city:"东莞", href:"#" }, { city:"深圳", href:"#" }, { city:"昆明", href:"#" }, 
	{ city:"广州", href:"#" }, { city:"包头", href:"#" }, { city:"鞍山", href:"#" }, 
	{ city:"淮南", href:"#" }, { city:"长春", href:"#" }, { city:"金华", href:"#" },
	{ city:"乌鲁木齐", href:"#" }, { city:"无锡", href:"#" }, { city:"柳州", href:"#" },
	{ city:"潍坊", href:"#" }, { city:"荆州", href:"#" }, { city:"保定", href:"#" }, 
	{ city:"枣庄", href:"#" }, { city:"洛阳", href:"#" }, { city:"常州", href:"#" }, 
	{ city:"沧州", href:"#" }, { city:"更多城市", href:"#" }
];
function hotCity(option){
	var 
};
var hotCityFragment = document.createDocumentFragment();
citiesData.forEach(function(item){
	hotCityFragment.appendChild()
});

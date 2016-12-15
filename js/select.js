//mainBodyTop__select

var topSelect = document.createElement("div"),
	sales1 = document.createElement("div"),
	sales2 = document.createElement("div"),
	onSale = document.createTextNode("出售中 "),
	onSaleAmount = document.createTextNode("("  + 3157 + ")"),
	sold = document.createTextNode("已售 "),
	soldAmount = document.createTextNode("(" + 19287 + ")");
topSelect.className = "topSelect";
sales1.className = "sales1";
sales2.className = "sales2";
// onSale.className ="onSale";
// sold.className = "sold";
onSale.onclick = function(){
	onSale.style.color = "#ff571a";
};
sales1.appendChild(onSale);
sales1.appendChild(onSaleAmount);
sales2.appendChild(sold);
sales2.appendChild(soldAmount);
topSelect.appendChild(sales1);
topSelect.appendChild(sales2);

// var rank = document.createElement("div"),
	// rankOption = [
	// 	{"排序：默认", "上牌时间", "价格", "里程"}
	// ];
// rankOption.forEach(function(item){
// 	rank.appendChild(rankOption(item));
// });


// topSelect.appendChild(rank);

var clear = document.createElement("div");
clear.className = "clear";
topSelect.appendChild(clear);

document.getElementById("mbRight").appendChild(topSelect);


//mainBodyRight__cars

var carData = eval('([{"title":"福特 2013款 翼虎 1.6L GTDi 两驱舒适型","url":"http://f.souche.com/5902aeb738faa21e0b6dd22080fea3b7.png?imageView2/1/w/240/h/160","price":"13.6","lisenceTime":1377964800000,"kilometer":"3.81","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=udBqUnsfao"},{"title":"别克 2010款 昂科雷 3.6L 精英版","url":"http://img.souche.com/20161129/jpg/d7e6c229cd2a9db9b8badc66ecc234a9.jpg","price":"18.8","lisenceTime":1293811200000,"kilometer":"12.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=c80e86eff4434f55999268409f39c62d"},{"title":"2013款 宝马Z4 sDrive20i领先型","url":"http://img.souche.com/files/default/d827a4b2d9cd6b9740bf741922083dca.png@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"31.5","lisenceTime":1372608000000,"kilometer":"6.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=d23260938f9345639bdff8d8f58ec84d"},{"title":"雪佛兰 2009款 科鲁兹 1.6L SL AT","url":"http://img.souche.com/files/default/8e893f51d6bd3011c985457dd674c1b8.png","price":"6.3","lisenceTime":1285862400000,"kilometer":"9.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=4938e7dbb6574316af857eb4d53fa10c"},{"title":"保时捷 2017款 Macan Macan 2.0T","url":"http://f.souche.com/df1fbcd5adf79e3746849258fd43f3e9.png?imageView2/1/w/240/h/160","price":"63.5","lisenceTime":1464710400000,"kilometer":"0.69","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=MtKJ3rKTw1"},{"title":"别克 2013款 凯越 1.5L 自动经典型","url":"http://img.souche.com/20161129/jpg/2eb9a154383685fe4923a77e05b7960a.jpg","price":"5.98","lisenceTime":1385827200000,"kilometer":"5.80","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=855b0351e1d349d88f5387f30d2f95fb"},{"title":"别克 2010款 凯越 1.6 自动 LE 智能加装版","url":"http://f.souche.com/81d5017769ffe1dee264c1a2cbf6c47b.jpg?imageView2/1/w/240/h/160","price":"4.28","lisenceTime":1254326400000,"kilometer":"9.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=ujoWGXN5Yr"},{"title":"2015款 奥迪Q7 40 TFSI 尊藏型","url":"http://f.souche.com/e30ae1b7fba54af4f597f4ad3d30002c.png?imageView2/1/w/240/h/160","price":"61.8","lisenceTime":1438358400000,"kilometer":"2.31","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=YQcjSihoZc"},{"title":"路虎 2016款 发现神行 2.0T S","url":"http://f.souche.com/77abb7bc7851292be625efce0a9b6543.png?imageView2/1/w/240/h/160","price":"48","lisenceTime":1427817600000,"kilometer":"3.16","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=5iDpmx3ckC"},{"title":"2015款 北京现代ix35 2.0L 自动两驱智能型 国V","url":"http://img.souche.com/20161129/JPG/64423d9c5cc12847140b98d61594de7c.JPG","price":"13.98","lisenceTime":1443628800000,"kilometer":"3.85","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=e78f601f897c4b32a0032ecc9faa5e69"},{"title":"2014款 奥迪A6L 30 FSI 豪华型","url":"http://f.souche.com/4795b407d33772cc52d05c4919fd13dd.png?imageView2/1/w/240/h/160","price":"33.5","lisenceTime":1417363200000,"kilometer":"3.30","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=7dBoeyvwmd"},{"title":"路虎 2015款 揽胜极光 2.0T 五门锐动版","url":"http://img.souche.com/20161129/JPG/fbc7eb69cb82a6a2df8533fab4c5d041.JPG","price":"39.8","lisenceTime":1427817600000,"kilometer":"1.10","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=5934ac0e68064aeeb269a1be4c8681d9"},{"title":"2011款 奔驰SLK级 SLK 200 时尚型","url":"http://img.souche.com/files/default/4485fd058b9d6ed5a7cbe6999c5c0e4c.jpg","price":"32.8","lisenceTime":1377964800000,"kilometer":"2.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=936457a317d74b61bbd4b91f24b3e14c"},{"title":"2012款 奔驰S级 S 350 L Grand Edition","url":"http://img.souche.com/20160924/JPG/f4003158ad8aec8dfc7c6c71c1c9c497.JPG","price":"66.8","lisenceTime":1359648000000,"kilometer":"8.60","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=f0337ba573be48098e844cdf56ca0373"},{"title":"2011款 奔驰SLK级 SLK 200 时尚型","url":"http://f.souche.com/d63bf736bf3f866747c513d4039e5d19.jpg?imageView2/1/w/240/h/160","price":"32.8","lisenceTime":1377964800000,"kilometer":"2.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=GgKdE6xvNM"},{"title":"2014款 捷豹XF XF 2.0T 豪华版","url":"http://img.souche.com/20160916/JPG/451bac21002bf8cb2950fc6aa5d47143.JPG","price":"32.98","lisenceTime":1391184000000,"kilometer":"8.32","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=82e6fe6a0309492dadbf2e56b15e715e"},{"title":"日产 2015款 天籁 2.5L XL-NAVI Tech欧冠智享版","url":"http://img.souche.com/20161129/jpg/6e47a25b6f89a6d43445d409afd1d4af.jpg","price":"17.8","lisenceTime":1438358400000,"kilometer":"2.40","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=1d826cd7a45b4358a46426983115addc"},{"title":"现代 2010款 悦动 1.6L 自动 GLS","url":"http://f.souche.com/e1c3f3efa6396cc89a29652fced69b8d.png?imageView2/1/w/240/h/160","price":"4.5","lisenceTime":1254326400000,"kilometer":"13.82","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=epTOJZcuoB"},{"title":"丰田 2013款 卡罗拉 特装版 1.8L 无级变速至酷版GL-i","url":"http://f.souche.com/7d6c16abd2eaabe73841bd45eeb4106d.png?imageView2/1/w/240/h/160","price":"10.5","lisenceTime":1388505600000,"kilometer":"2.25","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=P7qN6qcyB6"},{"title":"福特 2013款 翼搏 1.5L 手动舒适型","url":"http://f.souche.com/45ea02e2640f1f28bd06ac3b2c9379db.png?imageView2/1/w/240/h/160","price":"6.6","lisenceTime":1388505600000,"kilometer":"5.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=RGLTFzHk7N"},{"title":"2012款 奥迪Q5 2.0TFSI 技术型","url":"https://res.souche.com/images/fed/zhanwei.png","price":"25.8","lisenceTime":1338480000000,"kilometer":"6.50","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=37e7621751e144a28fb1b997180241e7"},{"title":"别克 2006款 凯越 LX 1.6 手动 基本版","url":"https://res.souche.com/images/fed/zhanwei.png","price":"1.8","lisenceTime":1138723200000,"kilometer":"10.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=bb89d905f6e841e9b3f8ac695d77a285"},{"title":"马自达 2010款 睿翼 2.0L 自动豪华版","url":"https://res.souche.com/images/fed/zhanwei.png","price":"9.8","lisenceTime":1296489600000,"kilometer":"6.82","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=L4kQbcbbKj"},{"title":"现代 2014款 索纳塔八 2.4L 自动豪华版 国IV","url":"https://res.souche.com/images/fed/zhanwei.png","price":"14.8","lisenceTime":1425139200000,"kilometer":"2.10","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=AUUld1nWvN"}])');

var renderCars = function(data){
	var container = document.getElementById("selectSubject");
	return function(){
		container.innerText = "";
		var carFragment = document.createDocumentFragment();
		// data.forEach(function(item){
		// 	carFragment.appendChild(salesBox(item));
		// })();
		container.appendChild(carFragment);
	};
}();

function salesBox(option){
	var aboutCars = document.createElement("div"),
		carImg = document.createElement("img"),
		details = document.createElement("div");
		details.innerHTML = [
			"<a class=\"carLink\" href=\"", option.id, "\" >", option.title, "</a>",
			"<p class=\"price\">", "¥", option.price, "万</p>",
			"<p class=\"carInfo\">", 
				function(){
					var date = new Date(option.lisenceTime);
					return [
						date.getFullYear(),
						"/",
						date.getMonth() + 1
					].join("");
				}(), 
				"上牌 | ",
				option.kilometer,
				"万公里 | ",
				option.province,
				"</p>",
			"<div class=\"greyLine\">", "</div>",
			"<span class=\"approveTag\">", 
				["商家","实名"][option.isPersonal],
				"认证",
			"</span>"
		].join("");
		
	aboutCars.className = "aboutCars";
	carImg.className = "carImg";
	carImg.src = option.url ;
	details.className = "details";

	aboutCars.appendChild(carImg);
	aboutCars.appendChild(details);
	
	return aboutCars;
};

carData.forEach(function(item){
	document.getElementById("mbRight").appendChild(salesBox(item));
});

var filterSetting = [
	{
		title:"里程",
		options:[
			{name:"1万公里以内", value:1},
			{name:"3万公里以内", value:3},
			{name:"5万公里以内", value:5},
			{name:"8万公里以内", value:8}
		]
	},
	{
		title:"变速箱",
		options:[
			{name:"MT-手动", value:1},
			{name:"AT-自动", value:2}
		]
	},
	{
		title:"排量",
		options:[
			{name:"1.0L以下", value:"1.0"},
			{name:"1.0L-1.6L", value:"1.1"},
			{name:"1.6L-2.0L", value:"1.6"},
			{name:"2.0L-2.5L", value:"2.0"},
			{name:"2.5L-3.0L", value:"2.5"},
			{name:"3.0L-4.0L", value:"3.0"},
			{name:"4.0L以上", value:"4.0"}
		]
	},
	{
		title:"排放标准",
		options:[
			{name:"国二及以上", value:1},
			{name:"国三及以上", value:2},
			{name:"国四及以上", value:3},
		]
	},
	{
		title:"国别",
		options:[
			{name:"德国", value:"111"},
			{name:"日本", value:"222"},
			{name:"美国", value:"333"},
			{name:"韩国", value:"444"},
			{name:"法国", value:"555"},
			{name:"英国", value:"666"},
			{name:"意大利", value:"777"},
			{name:"瑞典", value:"888"},
			{name:"中国", value:"999"},
			{name:"奥地利", value:"000"}
		]
	}
];

function createSelector(option){
	var container = document.createElement("div"),
		rowTitle = document.createElement("h2"),
		optionBox = document.createElement("div"),
		placeholder = document.createElement("span"),
		arrowDown = document.createElement("div"),
		ul = function(){
			var ul = document.createElement("ul");
			ul.className = "ULhidden ULoptions";
			option.options.forEach(function(item){
				var li = document.createElement("li");
				li.innerText = item.name;
				li.onclick = function(){
					//
					placeholder.innerText = item.name;
				};
				ul.appendChild(li);
			});
			var unlimited = document.createElement("li");
			unlimited.innerText = "不限";
			unlimited.onclick = function(){
				placeholder.innerText = "请选择" + option.title;
			};
			ul.appendChild(unlimited);
			return ul;
		}();
		status = 0;
	container.className = "row";
	arrowDown.className = "arrowDown";	
	rowTitle.className = "rowTitle";
	optionBox.className = "optionBox";
	placeholder.className = "plhr";
	rowTitle.innerText = option.title;
	placeholder.innerText = "请选择" + option.title;
	optionBox.onclick = function(){
		ul.className = [["ULhidden ","ULoptions"][status]].join("");
		status ^= 1;
	};
	optionBox.appendChild(arrowDown);	
	optionBox.appendChild(placeholder);
	optionBox.appendChild(ul);
	container.appendChild(rowTitle);
	container.appendChild(optionBox);
	return container;
};

var filterFragment = document.createDocumentFragment(),
	filterFunc = [
		function(item,value){
			return item.kilometer < item.value;
		},,,,
		// funtion(){
		// 	var a = 1
		// }
	];

filterSetting.forEach(function(item, index){
	item.filterFunc = filterFunc[index];
	filterFragment.appendChild(createSelector(item));
	document.getElementById("selectSubject").appendChild(createSelector(item));
});


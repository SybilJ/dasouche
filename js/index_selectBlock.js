var brandData = [
	{ logoImg:"images/brand_41.png", name:"大众" },
	{ logoImg:"images/brand_20.png", name:"宝马" },
	{ logoImg:"images/brand_15.png", name:"奥迪" },
	{ logoImg:"images/brand_25.png", name:"奔驰" },
	{ logoImg:"images/brand_49.png", name:"丰田" },
	{ logoImg:"images/brand_27.png", name:"本田" },
	{ logoImg:"images/brand_30.png", name:"别克" },
	{ logoImg:"images/brand_53.png", name:"福特" }
];

function createBrandBox(option){
	var selectType = document.getElementById("selectType"),
		typeSelect = document.createElement("div"),
		model = document.createElement("div");
	model.innerHTML = ["<span>", option.name, "</span>"].join("");
	typeSelect.className = "typeSelect";
	model.className = "model brand_logo";

	typeSelect.appendChild(model);
	selectType.appendChild(typeSelect);
	return selectType;
};

brandData.forEach(function(item){
	document.getElementById("selectType").appendChild(createBrandBox(item));
});


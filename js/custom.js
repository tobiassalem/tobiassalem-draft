/**
 * Source code for our site custom JavaScript. Dependencies:
 * 1) jQuery 1.2+
 * 2) jGCharts 1.0+
 * 
 * @author Tobias
 * @version 0.1
 */ 
function initAreas() {
	$("#contentbody").load("home.html");
	
	// Hide all submenus & make them toggable (by click event on menuItem)
	// onClick on a menuItem, toggle it's child subMenu
    //$(".subMenu").hide();
	//$(".menuItem").click(function() {
		//$(this).children().toggle();
	//});	
}

function focusFields() {
	
	// Highlight all input types on focus, unhighlight on blur
	$("input, textarea, select").bind("focus",function(){
	    $(this).addClass("highlight");
	});

	$("input, textarea, select").bind("blur",function(){
		$(this).removeClass("highlight");
	 });

	 if($.browser.msie){
		$("select").bind("focusin",function(){
		   $(this).addClass("highlight");
		});	

		$("select").bind("focusout",function(){
		   $(this).removeClass("highlight");
		});
	 }
}

function focusEntities() {
	// Highlight all entity elements (e.g. rows in result table) onmousover
	// Get asset & financial data to generate charts in dedicated areas  
	$(".entity").bind("mouseenter",function(){
		$(this).addClass("highlight");
		// find the first form within the element with class .entity
		// NOTE: find returns an array, even if we have :first selector
		var daform = $(this).find("form:first");
		//var daform = $("this form:first");
		if (daform.length > 0) {
			daform = daform[0];
		} else {
			return;
		}
		//alert("should be da form: " +daform+ ", name: " +daform.name+ ", id: " +daform.id+ ", daform.length: " +daform.length);
		var assetData = daform.assetData.value;
		var financialData = daform.financialData.value;
		var nrOfAssets = daform.nrOfAssets.value;
		var nrOfFinancials = daform.nrOfAssets.value;
		// NOTE: need to convert the string to array object of numbers
		var aData = new Array(eval(assetData)); //convertToFloatArray(str);
		var fData = new Array(eval(financialData)); // convertToFloatArray(financialData);
		createAssetChart(aData);
		createFinancialChart(fData);
		$("p:first",this).text("ENTER Lorem ipsum....");
	}).bind("mouseleave", function() {
		$(this).removeClass("highlight");
		$("p:first",this).text("EXIT This is the entity text...");
	});
	
    var n = 0;
    $("div.enterleave").bind("mouseenter",function(){
    	$(this).addClass("highlight");
      $("p:first",this).text("mouse enter");
      $("p:last",this).text(++n);
    }).bind("mouseleave",function(){
    	//$(this).removeClass("highlight");
      $("p:first",this).text("mouse leave");
    });	
}

// Executed when the DOM is ready 
$(document).ready(function() {

	initAreas();
	//focusFields();
	//createSampleChart();
}); 



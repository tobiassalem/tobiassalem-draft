// TroggleLayer. Syntax: trogglelayer('yourlayername')
showdropdown = false;
function trogglelayer(lay) {
	if (showdropdown) {document.getElementById([lay]).style.display = "none";showdropdown = false;}
	else {document.getElementById([lay]).style.display = "block";showdropdown = true;}
}

// HideLayer. Syntax: hidelayer('yourlayername')
function hidelayer(lay) {
	document.getElementById([lay]).style.display = "none";
}

// ShowLayer. Syntax: hidelayer('yourlayername')
function showlayer(lay) {
	document.getElementById([lay]).style.display = "block";
}
// Changes the CSS-class of an element
function hiLight(el, changeTo) {
	el.className = changeTo;
}

 function openWin(URL,name,width,height,scroll) {
   self.name = "main";
   newWin = window.open(URL,name,
'width='+width+',height='+height+',status=no,toolbar=no,menubar=no,scrollbars='+scroll);
newWin.focus();
} 

//Open Window function
 function openPhotoWin(URL,width,height) {
 	var photowin;
 if (photowin){photowin.close()};
   photowin = window.open(URL,'photo',
'width='+width+',height='+height+',status=no,toolbar=no,menubar=no,scrollbars=no');
photowin.focus();
}   


function returnError(ErrorMessage, Field) {
		alert(ErrorMessage);
		Field.select();
		Field.focus();}

/*Some constants used by other functions */
	buttonPressed = true;
	reNoDigits = /\D+/;
	reAlfaNumber = /[^a-zA-Z0123456789_\-]+/;
	reAlfaNumberSwe = /[^a-zA-ZåäöÅÄÖ0123456789_\-]+/;
	reFileName = /[^a-zA-Z0123456789_\-\.]+/;

/*Validate if a field is empty */
function isEmpty(Field){
	if (Field == '') {return true;}
}

/*Validate if field is numeric */	
function notNumber(Field, Optional) {
	if (reNoDigits.test(Field) || Field == '' && Optional =='') {return true;}
} 	

/*Validate if filename contains characters other than a-z, 0-9, _ - . */
function notGoodFileName(Field, Optional)	{
	pos = Field.lastIndexOf( '\\' ) ;
	tot = Field.length;
	filename = Field.substr( pos+1, tot );
	if (reFileName.test(filename)|| filename == '' && Optional =='') {return true;}
	} 
	
function notGoodImageFile(Field, Optional)	{
	pos = Field.length -3 ;
	tot = Field.length;
	extention = Field.substr( pos, tot );
	if (Field.length>0 && extention !== 'jpg' && extention !== 'gif' ) {return true;}
	} 	

// Set cookie
// syntax: javascript:setCookie('anderskaka','dajm',365)
function setCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000))
		var expires = "; expires="+date.toGMTString()
	}
	else expires = ""
	document.cookie = name+"="+value+expires+"; path=/"
}
// Get cookie
// syntax: javascript:getCookie('anderskaka')
function getCookie(name) {
	var nameEQ = name + "="
	var ca = document.cookie.split(';')
	for(var i=0;i<ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length)
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length)
	}
	return null
}

// Delete cookie
// syntax: javascript:deleteCookie('anderskaka')
function deleteCookie(name) {
	setCookie(name,"",-1)
}

//Search Yahoo
function searchY() {
	var query = document.getElementById('query').value;
	newel=document.createElement('script');
	newel.type="text/javascript";
	newel.src="http://search.yahooapis.com/ImageSearchService/V1/imageSearch?appid=YahooDemo&output=json&callback=showResult&query="+query;
	document.body.appendChild(newel)
}
function showResult(result) {
	result = result.ResultSet;
	str= 'antal träffar: '+result.totalResultsAvailable+'<'+'br />';
	for (var i=0; i<result.Result.length; i++) {
		str= str+'<div class="photoresult"><'+'a href="'+result.Result[i].Url+'"><br />'
		str= str + result.Result[i].Title+'<'+'/a><'+'br />';
		str= str +'<'+'img align="top" src="'+ result.Result[i].Thumbnail.Url+'" /><span>';
		str= str + result.Result[i].Summary+'</span></div><'+'br /><'+'br />';
	}
	document.getElementById('result').innerHTML = str;
}

// Converts the given string into a string array, with given delim
// Syntax: convertStringToArray("this,is,my,string",",")
// Returns ["this","is","my","string"]
function convertToStringArray(str,delim) {
	return str.split(delim);
}

// Converts the given string (with , delim) into an integer array
// Syntax: convertToIntArray("1","2","3")
// Returns [1,2,3] 
//PROBLEM with input "[1,2], [3,4]" --> "[1", "2]", "[3", "4]"
function convertToIntArray(str) {
	var sArr = str.split(",");
	var nArr = new Array();
	var i = 0;
	for (x in sArr) {
		nArr[i] = parseInt(x);
	}
	return nArr;
}

//Converts the given string (with , delim) into an float array
//Syntax: convertToIntArray("1,2,3")
//Returns [1.0,2.0,3.0]
// PROBLEM with input "[1,2], [3,4]" --> "[1", "2]", "[3", "4]"
function convertToFloatArray(str) {
	var sArr = str.split(",");
	var nArr = new Array();
	var i = 0;
	for (x in sArr) {
		if (x.indexOf("[") > -1) {
			
		}
		nArr[i] = parseFloat(x);
	}
	return nArr;
}



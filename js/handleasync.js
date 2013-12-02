// Where to inject server result
var dataInjection = "contentbody";
var menuArea = "menuArea";
var graphArea = "graphArea";
var toolsArea = "toolsArea";

var defaultErrorMessage = "Kunde inte kontakta servern. Försök igen senare.";
// NOTE: needed for request memory (e.g. a request cannot be processed because org is not selected)
var lastGetURL = null;
var lastPostURL = null;
 
// pre-submit callback 
function showRequest(formData, jqForm, options) { 
    // formData is an array; here we use $.param to convert it to a string to display it 
    // but the form plugin does this for you automatically when it submits the data 
    var queryString = $.param(formData); 
 
    // jqForm is a jQuery object encapsulating the form element.  To access the 
    // DOM element for the form do this: 
    // var formElement = jqForm[0]; 
 
    //alert('About to submit: \n\n' + queryString); 
 
    // here we could return false to prevent the form from being submitted; 
    // returning anything other than false will allow the form submit to continue 
    return true; 
} 
 
// post-submit callback 
function showResponse(responseText, statusText)  { 
    // for normal html responses, the first argument to the success callback 
    // is the XMLHttpRequest object's responseText property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'xml' then the first argument to the success callback 
    // is the XMLHttpRequest object's responseXML property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'json' then the first argument to the success callback 
    // is the json data object returned by the server 
 
    //alert('status: ' + statusText + '\n\nresponseText: \n' + responseText + 
    //  '\n\nThe output div should have already been updated with the responseText.');

	// Add focus effect for all input fields
	focusFields();
	
	// Add focus effect for entities (businessCases, etc.)
	focusEntities();
} 

function postAsync(url,targetArea,form) {
	lastPostURL = url;
	var targetId = '#'+targetArea;
	var formId = '#'+form.id;
	var formName = form.name;
	//alert('targetId: ' +targetId+ ", form: " +form+ ", formName: " +formName);
	//prepare the form when the DOM is ready, we do it on the onclick event
    var options = { 
            target:        targetId,   // target element(s) to be updated with server response 
            beforeSubmit:  showRequest,  // pre-submit callback 
            success:       showResponse,  // post-submit callback 
     
            // other available options: 
            url:       url         // override for form's 'action' attribute 
            //type:      type        // 'get' or 'post', override for form's 'method' attribute 
            //dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
            //clearForm: true        // clear all form fields after successful submit 
            //resetForm: true        // reset the form after successful submit 
     
            // $.ajax options can be used here too, for example: 
            //timeout:   3000 
        }; 
     
        // bind form using 'ajaxForm' 
    	// PROBLEM: when we iterate over multiple entities, the forms all have e.g.
        // modelAttribute="businessCase" which will be their form id
    	// the post then ONLY WORKS FOR THIS FIRST FORM!
        //$('#myForm1').ajaxForm(options);
		// SOLUTION: use fom name instead (should always be unique)
    	// PROBLEM2: form.name SOMETIMES becomes the input element instead! WHY???
    	// even though form ALWAYS is the form object!
    	// Cannot we just wrap the form in a jquery object? Yes we can!
    	//alert('url: '+url+ ', targetId: ' +targetId+ ', formId: ' +formId+ ', formName: ' +formName);
    	var formquery = "form[name="+formName+"]";
    	//$(formquery).ajaxForm(options);
    	$(form).ajaxForm(options);
}

function confirmPostAsync(url, targetArea, form) {
	var ok = confirm('Are you sure?');
	if (ok) {
		postAsync(url, targetArea, form);
	} else {
		return false;
	}
}

function getCallback() {
	//focusEntities();
}

function getAsync(url, targetArea) {
	lastGetURL = url;
	// load( url, [data], [callback] ) 
	// Load a piece of the documentation sidebar navigation into a custom unordered list.
	// $("#links").load("/Main_Page #p-Getting-Started li");
	$('#'+targetArea).load(url, getCallback);
}


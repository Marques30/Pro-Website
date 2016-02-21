

function checkEmail(email){
	var status = false;     
	var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (document.Login.email.value.search(emailRegEx) == -1) {
    	alert("Please enter a valid email address.");
    } else {
    	status = true;	
        location.href='yu.html';
  	}
    return status;
}

// Create cookie for the first time
function createCookie(name,value) {
	// basic error checking - name cannot be blank
	if (value.length < 1) {
		alert("Please enter your name to login");
		return false;
		}
	// ***** perform additional error checking here 
	
	document.cookie = name+"="+value+"; path=/";
	location.reload();   // reloading the page causes the cookie and logout link to be displayed on the page
}

// read the cookie, if it exists, and display on the page
function readCookie(name) {
	var nameEQ = name + "=";  // this will equal the first part of the cookie string
	var visitorName = "";
	var cookieList = document.cookie.split(';');   // get the cookie string as an array, and split on ; character
	for(var i=0;i < cookieList.length;i++) {
		var c = cookieList[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) {       // find the cookie that begins with "myCookie" 
			visitorName = c.substring(nameEQ.length,c.length)  // get whatever is to the right of the = sign
		}
	}
	
	//determine if visitor is logged in, or not, and display appropriate text
	if (visitorName.length > 0) {
		var writeLink = "Welcome " + visitorName + " - <a href=\"javascript:eraseCookie('myCookie')\">Log Out</a>"
	} 
	else
	{
		var writeLink = "Hello. Please log in." // cookie is empty, so don't add any text to the page
	}
	 
	document.write(writeLink);  // this line causes the cookie, plus some text, to be added to the page dynamically
}

// Delete the cookie and reload the page to clear it
function eraseCookie(name) {
	document.cookie = name+"=;expires='1/1/2000'; path=/"; //setting to past date causes it to expire
	document.forms["frmLogin"].fname.value=''; location.href='index.html'
}

var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf('android') == -1 
	&& userAgent.indexOf('iphone') == -1 
	&& userAgent.indexOf('ipad') == -1) {

	location.href = '../pc/index.html';
	

}
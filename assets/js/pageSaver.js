
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


setInterval(function(){
	var url = window.location.href
	url = url.replace("#", "?")
	const urlParams = new URLSearchParams(url);
	if(urlParams.get('slide') == null)
	{
		return -1;
	}
	setCookie("currentPage", urlParams.get('slide'), 1000)
	setCookie("currentBook", document.getElementById("file-path").value, 1000)
}, 1);


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      // specify options here
    });
  });

function restorePage()
{
	document.getElementsByClassName("imgUrl")[0].click()
	window.location.href = "#lg=1&slide=" + getCookie("currentPage")
}
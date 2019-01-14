function showSidebar() {
    document.getElementById("sidebar").style.width = "300px";
	var le = document.getElementsByClassName("havbarLinkElement").length;
    for(var i=0; i<le; i++){
	document.getElementsByClassName("havbarLinkElement")[i].style.left = "50%";
    }
}
function hideSidebar() {
    document.getElementById("sidebar").style.width = "0";
    var le = document.getElementsByClassName("havbarLinkElement").length;
    for(var i=0; i<le; i++){
	document.getElementsByClassName("havbarLinkElement")[i].style.left = "-150px";
    }
}


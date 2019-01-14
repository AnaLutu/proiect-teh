document.getElementById("form-input").onclick = function () {
    var deClonat = document.getElementsByClassName("deClonat")[0],
        input = document.getElementById("input-text").value;
    clona = deClonat.cloneNode(true);
    clona.getElementsByClassName("paragraf")[0].innerText = input;
    clona.getElementsByClassName("cancel")[0].innerText = 'x';
	var length = document.getElementsByClassName("cancel").length;
	for(var i=0;i<length;i++){
    document.getElementsByClassName("cancel")[i].onclick = function () {
        var deClonat1 = document.getElementsByClassName("deClonat");
        document.getElementById("lista").removeChild(deClonat1[0]);
    }
	}
    //clona[0].appendChild(p);
   // clona.appendTo($("#lista"));
	document.getElementById("lista").appendChild(clona);
}

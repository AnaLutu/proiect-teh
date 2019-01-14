//AJAX


//Get users
var url  = "http://localhost:3000/contact";
var xhr  = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function () {
	var datas = JSON.parse(xhr.responseText);

	if (xhr.readyState == 4 && xhr.status == "200") {

   var info = new Array();
        info = datas;

        var news = document.getElementsByClassName("comments")[0];

        for(var i = 0; i < info.length; i++) {
            var h5 = document.createElement("input");
            h5.setAttribute('value', info[i].id);
            h5.setAttribute('id', "id");
            var id = info[i].id;
            news.appendChild(h5);

            var p = document.createElement("input");
            p.setAttribute('value', info[i].nume);
            p.setAttribute('id', "nume");
            news.appendChild(p);

            var p = document.createElement("input");
            p.setAttribute('value', info[i].prenume);
            p.setAttribute('id', "prenume");
            news.appendChild(p);

            var p = document.createElement("input");
            p.setAttribute('value', info[i].email);
            p.setAttribute('id', "email");
            news.appendChild(p);

            var p = document.createElement("input");
            p.setAttribute('value', info[i].text);
            p.setAttribute('id', "text");
            news.appendChild(p);

            var br = document.createElement("br");
            news.appendChild(br);


            var l = document.createElement("div");
            l.setAttribute('class', 'line');

            var button = document.createElement('input');

            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Sterge');

            button.setAttribute('onclick', 'deleteUser("id")');
            button.setAttribute('onclick', 'deleteUser("id")');

            news.appendChild(button);

            var button = document.createElement('input');

            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Update');

            button.setAttribute('onclick', 'uploadUser("id")');
            button.setAttribute('onclick', 'uploadUser("id")');

            news.appendChild(button);



            news.appendChild(l);

        }

	} else {
		console.error(datas);
	}
}
xhr.send(null);


// Post a user
function inputData() {
  var data = {};

  data.nume  = document.getElementById("nume").value;
  data.prenume  = document.getElementById("prenume").value;
  data.email  = document.getElementById("email").value;
  data.text = document.getElementById("text").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
  	var users = xhr.responseText;
  	if (xhr.readyState == 4 && xhr.status == "201") {
  		console.table(users);
  	} else {
  		console.error(users);
  	}
  }
  xhr.send(json);
}

// Delete a user
function deleteUser(who){

  var xhr = new XMLHttpRequest();
  var who = document.getElementById('id').value;
  console.log(who);
  xhr.open("DELETE", url+"/"+who, true);
  xhr.onload = function () {
  	var users = JSON.parse(xhr.responseText);
  	if (xhr.readyState == 4 && xhr.status == "200") {
  		console.table(users);
  	} else {
  		console.error(users);
  	}
  }
  xhr.send(null);
}

// Update a user
function uploadUser(){
  var data = {};
  data.nume  = document.getElementById("nume").value;
  data.prenume  = document.getElementById("prenume").value;
  data.email  = document.getElementById("email").value;
  data.text = document.getElementById("text").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  var who = document.getElementById('id').value;

  xhr.open("PUT", url+'/'+who, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
  	var users = JSON.parse(xhr.responseText);
  	if (xhr.readyState == 4 && xhr.status == "200") {
  		console.table(users);
  	} else {
  		console.error(users);
  	}
  }
  xhr.send(json);
}

/*$("#buton").on("click", function(){
	$.ajax({url: "http://localhost:3000/contact", success: function(result){
    $("#div1").html(result);
  }});
});*/


function suma(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;

	var url = "http://localhost:8085/suma/?num1=" + num1 + "&num2=" + num2;

	$.getJSON(url,
    function(json) {
       //console.log(json);
       document.getElementById('resultado').innerHTML = json.result;
    }
  );
}

function resta(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;

	var url = "http://localhost:8085/resta/?num1=" + num1 + "&num2=" + num2;

	$.getJSON(url,
    function(json) {
       //console.log(json);
       document.getElementById('resultado').innerHTML = json.result;
    }
  );
}

function division(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;

	var url = "http://localhost:8085/division/?num1=" + num1 + "&num2=" + num2;

	$.getJSON(url,
    function(json) {
       //console.log(json);
       document.getElementById('resultado').innerHTML = json.result;
    }
  );
}

function multiplicacion(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;

	var url = "http://localhost:8085/multiplicacion/?num1=" + num1 + "&num2=" + num2;

	$.getJSON(url,
    function(json) {
       //console.log(json);
       document.getElementById('resultado').innerHTML = json.result;
    }
  );
}

function cuadrado(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;

	var url = "http://localhost:8085/cuadrado/?num1=" + num1 + "&num2=" + num2;

	$.getJSON(url,
    function(json) {
       //console.log(json);
       document.getElementById('resultado').innerHTML = json.result;
    }
  );
}

function sqrt(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;

	var url = "http://localhost:8085/sqrt/?num1=" + num1 + "&num2=" + num2;

	$.getJSON(url,
    function(json) {
       //console.log(json);
       document.getElementById('resultado').innerHTML = json.result;
    }
  );
}
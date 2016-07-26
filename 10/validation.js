function otherOption(){
	var a = document.querySelector('#country').value;
	if (a == 'other'){
		var L1 = document.createElement("label");
		L1.innerHTML= 'Which one?';
		L1.id = "extralabel";
		document.querySelector('#countryDiv').appendChild(L1);
		I1 = document.createElement("input");
		I1.id = "extrainput";
		I1.required = true;
		document.querySelector('#countryDiv').appendChild(I1);

		
	}
	else if (document.querySelector('#extralabel') !== null && document.querySelector('#extrainput') !== null){
		document.querySelector('#countryDiv').removeChild(document.querySelector('#extralabel'));
		document.querySelector('#countryDiv').removeChild(document.querySelector('#extrainput'));
	}
	

	
}
function isValidName(x) {
	
	if (x.trim().split(' ').length == 3) {
		return true;
	}
	return false;
}
function isValidDate (x) {
	var array = x.split('/');
	if (array.length != 3) {
		return false;
	}
	
	if (array[0].length != 2) {
		return false;
	}
	
	var date = parseInt(array[0]);
	if (date < 1 || date > 31) {
		return false;
	}
	
	if (array[1].length != 2) {
		return false;
	}
	
	var date = parseInt(array[1]);
	if (date < 1 || date > 12) {
		return false;
	}
	
	if (array[2].length != 4) {
		return false;
	}
	
	var d = new Date();
	
	if (array[2] < 1900 || array[2] > d.getFullYear()) {
		return false;
	}
	
	return true;

}
function isValidPhone(x) {
	if (x.indexOf('+3598') != 0) {
		return false;
	}
	if (x.strlen != 13) {
		return false;
	}
	return true;
}
function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate(){
	var name = document.querySelector('#name').value;
	var phone = document.querySelector('#phone').value;
	var mail = document.querySelector('#email').value;
	var date = document.querySelector('#date').value;
	
	writeError (isValidName(name), '#divName');
	writeError (isValidPhone(phone), '#divPhone');
	writeError (isValidDate(date), '#divDate');
	writeError (isValidEmail(mail),'#divEmail');
	

}

function writeError(isValid, divName) {
	var errorP = document.createElement('p');
	errorP.innerHTML = 'Error';
	errorP.className = 'error';

	if (!isValid && document.querySelector(divName).lastChild.className != "error"){
		document.querySelector(divName).appendChild(errorP);
		document.querySelector(divName).querySelector('.input').className = 'error';
		

	} else if (isValid && document.querySelector(divName).lastChild.className == "error") {
		document.querySelector(divName).lastChild.remove();
		document.querySelector(divName).querySelector('.error').className = 'input'; 
	}
}



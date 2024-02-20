function getFormvalue() {
    //Write your code here
	let name = document.querySelectorAll('input');
	let firstName = name[0].value;
	let lastName = name[1].value;
	alert(firstName + ' ' + lastName);

}

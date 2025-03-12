function entername() {
	let personname = prompt('как тебя зовут?');
	localStorage.setItem('name', personname);
}
function showname() {
	alert(localStorage.getItem('name'));
}

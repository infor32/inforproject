let b;
let chars = "Jizz7122";
function init(){
	for(let i = 9616; i < 9620; i++){
		chars += String.fromCharCode(i);
	}
	console.log(chars);
	b = baffle("h1", {
		characters: chars,
		speed: 80
	}).once().reveal(5000);
	b = baffle("h3", {
		characters: chars,
	}).start().reveal(1000);
	b = baffle("p", {
		characters: chars,
	}).start().reveal(1000);
}


// console.log(baffle("h1").once())
document.getElementById('theButton').onclick = function checkLogIn() {

//Username- and password-values have to be inside of the scope of the function that gets triggered on the onclick event!
let validUsername = document.getElementById('username').value
let validPassword = document.getElementById('password').value

			console.log("username:" + validUsername)
			console.log(validPassword)
		if(/\d/.test(validUsername)!== true || validPassword !== '12345678') {
			alert('Please enter valid username and/or password');
		} else if (/\d/.test(validUsername) && validPassword === '12345678') {
			document.getElementById('main-section').innerHTML = `<h1>Hello ${validUsername}</h1>`;
		}
	}
let charString = ""

document.getElementById('username').addEventListener("keypress", function(event) {
	document.getElementById('main-section').innerHTML = `<h1>${charString += String.fromCharCode(event.which)}</h1>`;
})

/*NO LONGER NEEDED?
	function rightPassword(password) {
		if(document.getElementById('password').value === 12345678) {
		} else {
			alert('Intruder!')
		}
	}*/


/*let newText = document.getElementById('main-section').innerHTML = "<h3>Hello World Smaller</h3>"
*/
/*function checkPassword (password) {
let password = document.getElementById('password').value
	if (password === '12345678') {
		window.location.href = //redirect naar pagina
	}
}*/

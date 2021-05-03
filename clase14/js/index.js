/*console.log("clase 14");*/

/*function Usuario(username, edad) {
    this.username = username;
    this.edad = edad;
    this.saludar = function() {
    	console.log("Hola mi nombre es ", this.username);
    }
}

let usuarios = [
	new Usuario("Diana"),
	new Usuario("Diana Nerd"),
	new Usuario("Diana 2")
];

usuarios.forEach((usuario) => usuario.saludar());
*/

let usuario = "diana_nerd";
let password = "1234";

if (usuario === "diana_nerd") {
	if (password === "1234") {
		// acceder
	} else {
		// revisa tu contraseña
	}
} else {
	// el usuario no
}

if (usuario !== "diana_nerd") {
	// el usuario no existe
} else {
	if (password !== "1234") {
		// el password es incorrecto
	} else {
		// acceder
	}
}

if (usuario !== "diana_nerd") {
	// el usuario no existe
} else if (password !== "1234") {
	// el password es incorrecto
} else {
	// acceder
}

/*
Menu
	Home
	Ayuda
	Login
	Registro
	Salir
*/

let opcion = "home";

if (opcion === "home") {
	// ir a home
} else if (opcion === "ayuda") {
	// ir a ayuda
} else if (opcion === "login") {
	// ir a login
} else if (opcion === "registro") {
	// ir a registro
} else if (opcion === "salir") {
	// ir a salir
} else {
	// ninguna de las aneriores
}

switch(opcion) {
	case 'home':
		// ir a home
		break;
	case 'ayuda':
		// ir a ayuda
		break;
	default:
		// ninguna de las anteriores
}

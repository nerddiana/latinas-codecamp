let frutas = ["mango", "fresa", "papaya", "kiwi", "melón"];
 
/*for (let count = 0; count < frutas.length; count += 1) {
	console.log("count: ", count);
	console.log("fruta: ", frutas[count]);
}*/

/*let count = 0;
while (count < frutas.length) {
	console.log("fruta: ", frutas[cout]);
	count++;
}*/

/*let count = 0;
while (frutas[count] !== undefined) {
	console.log("fruta: ", frutas[count]);
	count = count + 1; // 2
}*/

/*while(frutas.length) {
	console.log("fruta: ", frutas.pop());
}*/

/*frutas.forEach((frutaActual) => { 
	console.log("fruta actual: ", frutaActual);
});*/

/*let usuarios = [{
	username: "diana_nerd",
	password: "1234"
}, {
	username: "diana",
	password: "1234"
}];

let username = "diana2";

usuarios.forEach((usuario) => {
	if (usuario.username === username) {
		console.log("El usuario existe!");
	}
});*/

function saludar(nombre) {
	console.log("Hola yo soy ", nombre);
}

let usuario = {
	username: "Diana",
	saludar: function() {
		console.log("Hola yo soy ", this.username);	
	}
};

usuario.saludar()


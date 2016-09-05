
window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var numero1 = parseFloat(document.getElementById("numero1").value);
		var numero2 = parseFloat(document.getElementById("numero2").value);
    if(numero1 >= 1 && numero2 >= 1){
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "<p>El resultado es $ " + conversion(numero1,numero2) + "</p>";
    } else {
      var resultado = document.getElementById("resultado");
        document.getElementById("numero2").value = "";
        document.getElementById("numero2").value = "";
        resultado.innerHTML = "<p>Ingresa un valor válido" + "</p>";  
    }
		
	});

	function conversion(numero1, numero2) {
		var conversion = numero1 / numero2;
        var redondo = conversion.toFixed(2);
		return redondo; /* otra manera pudo ser conversion.toFixed(2)*/
	}
});



//Modo funcional 1 sin html
/*function conversion (){
  var condicion = true;
  while(condicion) {
    var mensaje = "Escoja una opción\n" +
        "1. Convertir tipo de cambio\n" +
        "0. Salir";
    var opcion = prompt(mensaje);

    if(opcion == "1"){
      var num1 = parseFloat(prompt("Ingresa el tipo de cambio"));
      var num2 = parseFloat(prompt("Ingresa el monto en soles"));
    }

    switch(opcion) {
      case "1":
        if(num1 >= 1 && num2 >= 1){
          var conversion = num1 / num2;
          var redondo = conversion.toFixed(2);
          alert("Tu monto en Dólares es: $ " + redondo);
        }
        break;
      case "0":
        alert("Gracias");
        condicion = false;
        break;
      default:
        alert("Ingresa una opción valida");
        break;
    }
  }
}

conversion ();*/
/*procesar los datos del formulario mediante una funcion */

function procesarDatos(){
  /*obtener los datos del formulario */
  
/*otra forma de reaizar es */
    var v1 = document.getElementById("nota1").value;
    var v2 = document.getElementById("nota2").value;
    var v3 = document.getElementById("nota3").value;
    var v4 = document.getElementById("nota4").value;
    var v5 = document.getElementById("nota5").value;
    
    /*arreglo para validar notas*/
      var notas = [v1, v2, v3, v4, v5]; 
    /*VALIDAR LAS NOTAS DE 0 A 10 */
    function numeroEnRango(numero,inicio,final){
        if(inicio < final){
            return numero>= inicio && numero <= final;
        }else{
            return false;
        }
    }
/*un for para validar cada nota individualmente.*/
    for (let i = 0; i < notas.length; i++) {
        if (isNaN(notas[i]) || !numeroEnRango(notas[i], 0, 10)) {
        alert("Nota inválida");
        return;
    }
    }
    
    /*calcular promedios y pase de semestre*/
      /*para el calculo del promedio */
     
      var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3)+parseFloat(v4)+parseFloat(v5))/5;
   
    var resultado = "";
    if (pro >= 7) {
        resultado = ("Pasaste el semestre");
       
    } else if (pro <= 3.5) {
        resultado = ("Perdiste el semestre");
    } else {
        resultado = ("supletorio")
    }
// Mostrar el resultado en el div con id 'resultado'
document.getElementById("resultado").innerHTML = resultado + " - Promedio: " + pro.toFixed(2);
}
    

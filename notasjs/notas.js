/*procesar los datos del formulario mediante una funcion */

function procesarDatos(){
  /*obtener los datos del formulario */
  /*usamos un CONST para declarar constantes, con ello guardaremos en el arreglo las 5 notas */
  /*parseFloat convierte el texto en número decimal. */
  const notas = [
    parseFloat(document.getElementById('nota1').value),
    parseFloat(document.getElementById('nota2').value),
    parseFloat(document.getElementById('nota3').value),
    parseFloat(document.getElementById('nota4').value),
    parseFloat(document.getElementById('nota5').value),
];
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
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = suma / notas.length;

    let resultado = "";
    if (promedio > 7) {
        resultado = `Promedio: ${promedio.toFixed(2)}. Pasaste el año.`;
    } else if (promedio <= 3.5) {
        resultado = `Promedio: ${promedio.toFixed(2)}. Perdiste el semestre.`;
    } else {
        resultado = `Promedio: ${promedio.toFixed(2)}. Supletorio.`;
    }

    // Mostrar el resultado al usuario
    alert(resultado);

}
    

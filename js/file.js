var resultado = document.getElementById('resultado');

function tablaMultiplicar(){   //!función mal escrita: falta la 'i' en 'Multiplicar'
  var n = document.getElementById('dato').value;
  var m;
  var tabla = '';
  if (isNaN(n) || n === '') {
    tabla = '¡¡ Error !! >>> Dato mal escrito.';
    resultado.style.backgroundColor = '#f00';
  } else {
    tabla = '<table>';    //? ¿Debería poner borde a la tabla?
    resultado.style.backgroundColor = 'inherit';
    n = parseInt(n);
    m = n+9;    //TODO: Encontrar el bucle for en donde debemos usar la variable 'm'
    tabla += '<tr><td></td>';
    for (var k=1; k<=10;k++) {
      tabla += '<td>' + k + '</td>';
    }
    tabla += '</tr>';
    for (var i=n;i<=m;i++) {
      tabla += '<tr><td>'+ i +'</td>';
      for (var j=1; j<=10;j++){
          tabla += '<td data-n="'+ i +'x'+ j +'=' + (i*j) +'">' + (i*j) + '</td>';
        }
      tabla += '</tr>';
      }
    tabla += '</tabla>';  
  }
  resultado.innerHTML = tabla;
}

var result = document.getElementById('resultado');

function multiplicationTable(){   //! misspelled function: 'i' missing in 'multplication'
  var n = document.getElementById('dato').value;
  var m;
  var table = '';
  if (isNaN(n) || n === '') {
    table = '¡¡ Error !! >>> El dato introducido es incorrecto.';
    result.style.backgroundColor = '#f00';
  } else {
    table = '<table>';    //? should I put border to the table?
    result.style.backgroundColor = 'inherit';
    n = parseInt(n);
    m = n+9;
    table += '<tr><td></td>';
    for (var k=1; k<=10;k++) {
      table += '<td>' + k + '</td>';
    }
    table += '</tr>';
    for (var i=n;i<=m;i++) {    //* In this for loop, we change condition from 1<=n to i<=m 
      table += '<tr><td>'+ i +'</td>';
      for (var j=1; j<=10;j++){
          table += '<td data-n="'+ i +'x'+ j +'=' + (i*j) +'">' + (i*j) + '</td>';
        }
      table += '</tr>';
      }
    table += '</table>';  
  }
  result.innerHTML = table;
}

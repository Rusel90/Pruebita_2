function multiplicacion(arreglo, _num) {
  var resultado =0;
  if(Array.isArray(arreglo)){
    resultado = arreglo.reduce(function(total,actual){
       return total*actual;
    });
    if(!isNaN(_num)) // si es un numero
    {
      return resultado = resultado * _num;
    }
    return resultado;
  }
}

describe('Ejercicio 1', function(){
  it('Prueba de [2,3] y 10', function(){
    assert.equal(60, ejercicios.ejercicio1([2,3], 10));
  });
  it('Prueba de [2,3] y "Hola"', function(){
    assert.equal(6, ejercicios.ejercicio1([2,3], "Hola"));
  });
  it('Prueba de [2,3] y nada', function(){
    assert.equal(6, ejercicios.ejercicio1([2,3]));
  });
  it('Prueba de 2 y 3', function(){
    assert.equal(6, ejercicios.ejercicio1(2,3));
  });
});

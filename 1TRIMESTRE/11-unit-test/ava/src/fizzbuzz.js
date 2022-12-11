function fizzBuzz(n){
    let resultado = '';
    if(n%3 === 0) resultado += 'fizz';
    if(n%5 === 0) resultado += 'buzz';
    if(n%15 === 0) resultado += 'fizzbuzz'
    return resultado;
     }

module.exports = fizzBuzz;
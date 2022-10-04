/*
Programa que imprima los numeros desde el 1 hasta el N
Cada vez que encuentre un multiplo de 3 escribira 'fizz'
Cada vez que encuentre un multiplo de 5 escribira 'buzz'
Cada vez que encuentre un multiplo de ambos escribira 'fizzbuzz'
*/
function fizzbuzz(numero){
    console.log(numero);
    let i = 1;
    while(i<=numero){
        if(i%3==0 && i%5==0){
            console.log('fizzbuzz');
        }
        else if(i%3==0){
            console.log('fizz');
        }
        else if(i%5==0){
            console.log('buzz');
        }
        else{
            console.log(i);
        }
        i++;
    }

}
const numero = process.argv[2];
if(numero){
    fizzbuzz(numero);
}
else{
console.log("Introduzca un número: node fizzbuzz.js 20");
}



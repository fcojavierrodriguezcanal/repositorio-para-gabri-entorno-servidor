/*
Piedra papel tijeras
*/
function piedrapapeltijera(eleccion){
    console.log(eleccion);
    if(eleccion=="piedra"){
        const x = 1;
    }
    else if(eleccion=="tijera"){
        const x = 2;
    }
    else if(eleccion=="papel"){
        const x = 3;
    }
    else{
        console.log("introduzca piedra papel o tijeras!!!");
    }
    const y=Math.round(Math.random()*3+1);
    if(x==y){
        console.log("Empate");
    }else if(y==1&&x==3){
        console.log("Perdiste");
    }else if(y==1&&x==2){
        console.log("Ganaste");
    }else if(y==2&&x==3){
        console.log("Perdiste");
    }else if(y==2&&x==1){
        console.log("Ganaste");
    }else if(y==3&&x==1){
        console.log("Perdiste");
    }else if(y==3&&x==2){
        console.log("Ganaste");
    }else{
    console.log("VUELVA A INTRODUCIR LOS DATOS");
    }
    }


const eleccion = process.argv[2];
if(eleccion){
    piedrapapeltijera(eleccion);
}
else{
console.log("Introduzca una eleccion: node fizzbuzz.js 20");
}
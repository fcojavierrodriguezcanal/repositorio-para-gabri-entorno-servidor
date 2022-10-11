const boom=(arr) => {
    let x =[]
    let y ="No se encontro ningun 7";
    for(let i = 0; i < arr.length;i++){
        x.push(arr[i].toString());
    }
    for(let i = 0;i<x.length;i++){
        for(let j = 0; j < x[i].length;j++){
            if(x[i][j]==7){
                y="Boom";
            }
        }

    }
    return y;
}
const BAILE =
    ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step",
        "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];


function convertor(codigo) {

    let nuevoCodigo = [];

    nuevoCodigo[0] = parseInt(codigo[0]) + 0;
    nuevoCodigo[1] = parseInt(codigo[1]) + 1;
    nuevoCodigo[2] = parseInt(codigo[2]) + 2;
    nuevoCodigo[3] = parseInt(codigo[3]) + 3;


    nuevoCodigo[1] > BAILE.length - 1 ? nuevoCodigo[1] = (nuevoCodigo[1] - BAILE.length) + 0 : nuevoCodigo[1] = nuevoCodigo[1]
    nuevoCodigo[2] > BAILE.length - 1 ? nuevoCodigo[2] = (nuevoCodigo[2] - BAILE.length) + 1 : nuevoCodigo[2] = nuevoCodigo[2]
    nuevoCodigo[3] > BAILE.length - 1 ? nuevoCodigo[3] = (nuevoCodigo[3] - BAILE.length) + 2 : nuevoCodigo[3] = nuevoCodigo[3]

    for (x in nuevoCodigo) {
        switch (nuevoCodigo[x]) {
            case 0:
                nuevoCodigo[x] = BAILE[0];
                break;
            case 1:
                nuevoCodigo[x] = BAILE[1];
                break;
            case 2:
                nuevoCodigo[x] = BAILE[2];
                break;
            case 3:
                nuevoCodigo[x] = BAILE[3];
                break;
            case 4:
                nuevoCodigo[x] = BAILE[4];
                break;
            case 5:
                nuevoCodigo[x] = BAILE[5];
                break;
            case 6:
                nuevoCodigo[x] = BAILE[6];
                break;
            case 7:
                nuevoCodigo[x] = BAILE[7];
                break;
            case 8:
                nuevoCodigo[x] = BAILE[8];
                break;
            case 9:
                nuevoCodigo[x] = BAILE[9];
                break;
            default:
                nuevoCodigo[x] = 'aaa';
        }
    }

    let sinNumero = new RegExp('([^0-9])', 'g')
    let noEncontrado = codigo.match(sinNumero) ? codigo.match(sinNumero)[0] : ''

    return noEncontrado || codigo.length < 4 ? 'Valor no valido.' : nuevoCodigo

}

//Validos
console.log(convertor("0000"));
console.log(convertor("1233"));
console.log(convertor("9999"));
console.log(convertor("5678"));
console.log(convertor("8765"));
console.log(convertor("2001"));
console.log(convertor("1999"));
console.log(convertor("9742"));
//No validos
console.log(convertor("abcd"));
console.log(convertor("122"));
console.log(convertor("3213213"));
console.log(convertor("-2092"));
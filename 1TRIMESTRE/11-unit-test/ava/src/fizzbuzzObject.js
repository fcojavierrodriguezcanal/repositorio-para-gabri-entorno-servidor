function fizzBuzzObject(numero,condiciones) {

    let resultado = '';

    for (const [modulo, valor] of Object.entries(condiciones)) {
        if(numero% modulo === 0) resultado += valor;

    }
    return resultado;
}
module.exports = fizzBuzzObject;
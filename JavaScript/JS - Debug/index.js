function validaArray(arr,num) {
try{
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("Array precisa ser um object!");

    if(typeof num !== 'number') throw new TypeError("Num precisa ser um Number!");

    if(arr.length !== num) throw new RangeError("Tamanho Inválido");

    return arr;

}
catch(e) {
    if(e instanceof ReferenceError) {
        console.log("Referencia")
        console.log(e.message)
    } else if (e instanceof TypeError) {
        console.log("Tipo")
        console.log(e.message)
    } else if (e instanceof RangeError) {
        console.log("Range")
        console.log(e.message)
    } else {
        console.log("Socorro:" + e);
    }

}
}

console.log(validaArray());


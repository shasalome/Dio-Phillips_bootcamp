//palíndromo 1

/*function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;

}
console.log(verificaPalindromo("ama"));*/

//palíndromo 2
//abba
//0123
/* // function verificaPalindromo2(string) {
     if (!string) return "string inexistente";

     for (let i = 0; i < string.length / 2; i++) {
         if (string[i] !== string[string.length - 1 - i]) {
             return false;
         } 
     }
     return true;
 }

console.log(verificaPalindromo2("abba")); */

/* function substituiPares(carl) {
    if (!carl) return -1;
    if(!carl.length) return -1;

    for(let i = 0; i < carl.length; i++) {
        if(carl[i] === 0) {
            console.log("Já é zero!!");
        } else if (carl[i] % 2 === 0) {
        console.log(`Substituindo ${carl[i]} por 0...`);
            carl[i] = 0;
        } 
        }
          return carl;
    }

  


let carl = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares()); */


// Schrijf een functie die een array van getallen als argument accepteert, 
// en een nieuwe array returned met de vierkantswortels van elk getal
// e.g. [9, 4, 1] -> [3, 2, 1]
// [64, 25, 100] -> [8, 5, 10]
function squareroot(array){
    let sqarray = [];
    for(num of array){
        let root = Math.sqrt(num);
        sqarray.push(Math.floor(root))
    }
    return(sqarray)
}
 
const numbers = [65, 435, 433, 122, 64, 47];
console.log(squareroot(numbers));
// suma.js
function suma(a, b) {
    if(a == undefined || b == undefined){
        throw new  Error("Error valor undefined");
    }
    return a + b;
}
module.exports = suma;
